import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import ProgressBars from "../../components/ProgressBars";
import Avatar from "../../components/Avatar";
import ImgSpark from "../../../public/spark.svg?jsx";
import ImgStar from "../../../public/Vector.svg?jsx";
import Badge from "~/components/Badge";
import Input from "~/components/Input";
import { useLocalStorage } from '@ditadi/qwik-hooks';

export default component$(() => {
  interface User { 
    token: string;
    username: string;
    id: number;
    gold: number;
    health: number;
    level: number;
    exp: number;
    max_exp: number;
    energy: number,
    max_energy: number,
    class: string
  }
  
  const todos = useSignal([{ title: "read", isDone: true }]);
  const habits = useSignal([]);
  const dailies = useSignal([]);
  const navigate = useNavigate();
  const { storedValue } = useLocalStorage<User>('user');
  const user = storedValue
useTask$(({track})=>{ 
      track(()=>user)
      if(user==null){ 
        navigate('/auth/login')
    }
  })

  return (
    <main class="mt-0">
      <section class="playerProfile bg-mainAccent p-4 flex gap-10">
        <div class="userInfo">
          <Avatar imageUrl="https://tolubori07.github.io/firefoxstpg/assets/vagabond.png" />
          <h2 class="font-display text-2xl">{user.value?.username}</h2>
          <h2 class="text-base text-bold font-body">
            <Badge text={`Level ${user.value?.level}, ${user.value?.class}`} />
          </h2>
        </div>

        <div class="stats flex-grow text-base">
          <div>
            <div class="health">
              <h3 class="font-display">Health ♥️ : {user.value?.health || 0}/100</h3>
              <ProgressBars val={user.value?.health} max={100} colour="#B31C19" />
            </div>

            <div class="exp">
              <h3 class="font-display">
                EXP <ImgStar class="size-6 inline" />: {user.value?.exp }/{user.value?.max_exp }
              </h3>
              <ProgressBars val={user.value?.exp || 0} max={user.value?.max_exp || 570} colour="#FBD475" />
            </div>

            <div class="energy">
              <h3 class="font-display">
                Energy <ImgSpark class="size-6 inline" />: {user.value?.energy}/{user.value?.max_energy}
              </h3>
              <ProgressBars val={user.value?.energy} max={user.value?.max_energy} colour="#88ceeb" />
            </div>
          </div>
        </div>
      </section>

      <section class="flex gap-5 mt-7 px-2">
        <div class="todo grow bg-accent rounded-base p-3 shadow-base">
          <div>
            <h3 class="font-display">To-do list</h3>
            <Input placeholder="Add a To do" />
          </div>
        </div>

        <div class="daily grow bg-accent rounded-base p-3 shadow-base">
          <div>
            <h3 class="font-display">Dailies</h3>
            <Input placeholder="Add a Daily" />
          </div>
        </div>

        <div class="habits grow bg-accent p-3 rounded-base shadow-base">
          <div>
            <h3 class="font-display mb-3">Habits</h3>
            <div class="mb-5">
              <Input placeholder="Add a Habit" />
            </div>
          </div>
          <div class="body">
            {/* todos.value.length > 0 ? (
              todos.value.map((todo) => <Todo todo={todo} />)
            ) : (
              <h3>Hey you... yes YOU! you have no todos</h3>
            ) */}
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Dashboard | RPGamify",
  meta: [
    {
      name: "description",
      content: "User Dashboard Page",
    },
    {
      property: "og:title",
      content: "Dashboard | RPGamify",
    },
    {
      property: "og:description",
      content: "User Dashboard Page",
    },
  ],
};
