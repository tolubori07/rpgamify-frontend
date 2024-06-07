import { component$, useSignal } from '@builder.io/qwik';
import { LuCheck } from "@qwikest/icons/lucide";

interface DailyProps {
  taskName?: string;
}

export default component$<DailyProps>((props) => {
  const isChecked = useSignal(false);
  return (
    <div>
      <div class="flex w-min items-center rounded-base border-2 border-black font-base shadow-base"
        role="form">
        <div class="w-full max-w-[30ch] min-w-[14ch] md:min-w-[30ch] rounded-base p-[10px] outline-none">
          <h2>{props.taskName}</h2>
        </div>
        <button
          class="rounded-e-base border-l-2 border-black bg-mainAccent p-[10px] sm:px-5 px-3"
          type="submit"
          aria-label="Submit Newsletter"
          onClick$={() => { isChecked.value = !isChecked.value}}
        >
          <div class="mr-2.5 grid h-5 w-5 place-items-center bg-white outline outline-2 outline-black">
            {isChecked && <LuCheck class="h-4 w-4" />}
          </div>
        </button>
      </div>
    </div>
  )
})



