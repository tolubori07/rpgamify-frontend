import { component$ } from '@builder.io/qwik'
import ProgressBars from '../../components/ProgressBars'
import Avatar from '../../components/Avatar'
export default component$(() => {
  return (
    <main class="mt-0">
      <div class="playerProfile bg-mainAccent p-7 flex gap-12">
        <div class="userInfo">
          <h2 class="font-display text-2xl">Jack</h2>
          <Avatar imageUrl="https://tolubori07.github.io/firefoxstpg/assets/vagabond.png" />
        </div>
        <div class="stats flex-grow">
          <div >
            <div class="health">
              <ProgressBars val={37000} max={50000} colour="#B31C19" />
              <h3 class="font-display text-lg">Health ♥️ :37000/50000</h3>
            </div>
            <div class="exp">
              <ProgressBars val={525} max={570} colour="#FBD475" />
              <h3 class="font-display text-lg">EXP <img src="/Vector.svg" alt="" class="size-6 inline" />: 525/570</h3>
            </div>

            <div class="energy">
              <ProgressBars val={100} max={100} colour="#88ceeb" />
              <h3 class="font-display text-lg">Energy <img src="/spark.svg" alt="" class="size-6 inline" />: 10000/10000</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})

