import { component$ } from '@builder.io/qwik'
import LinkItem from './LinkItem';

interface dirs {
  dir: string;
  text: string;
}
export default component$(() => {
  const dirs: dirs[] = [{ dir: '/dashboard', text: "Dashboard" }, { dir: '/notes', text: 'Notes' }, { dir: '/quests', text: 'Quests' }, { dir: '/guild', text: 'Guild' }, { dir: '/shop', text: 'Shop' },{dir:'/profile',text:'Profile'}]
  return (
    <header class="bg-bg h-[fit] pb-2 border-solid border-4 border-black">
      <div>
        <h1 class="text-4xl text-main font-display pt-1 pl-3">Rpgamify👾</h1>
      </div>
      <div class="flex gap-10 mt-5">
        {dirs.map((dir) => <LinkItem dir={dir.dir} text={dir.text} key={dir.text}/>)}
      </div>
    </header>
  )
});
