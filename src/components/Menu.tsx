import { component$ } from '@builder.io/qwik'
import LinkItem from './LinkItem';

interface dirs {
  dir: string;
  text: string;
}
export default component$(() => {
  const dirs: dirs[] = [{ dir: '/dashboard', text: "Dashboard" }, { dir: '/dailies', text: 'Dailies' }, { dir: '/habits', text: "Habits" }, { dir: '/notes', text: 'Notes' }, { dir: '/tasks', text: 'Tasks' }, { dir: '/quests', text: 'Quests' }, { dir: '/guild', text: ['Guild'] }, { dir: '/shop', text: 'Shop' }]
  return (
    <header class="bg-bg h-[fit] py-2 border-solid border-4 border-black">
      <div>
        <h1 class="text-5xl text-main font-display pt-3 pl-3">Rpgamify👾</h1>
      </div>
      <div class="flex gap-10 mt-5">
        {dirs.map((dir) => <LinkItem dir={dir.dir} text={dir.text} />)}
      </div>
    </header>
  )
});
