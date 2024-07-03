import {component$} from '@builder.io/qwik'
import { LuCheck } from '@qwikest/icons/lucide';
interface todoProps{ 
  title?:string;
  isDone?:boolean;
}

export default component$<todoProps>((props)=>{ 
  return(
<div class="bg-white">
  <button
          class="rounded-e-base border-l-2 border-black bg-mainAccent p-[10px] sm:px-5 px-3"
          type="submit"
          aria-label="Submit Newsletter"
          onClick$={() => { props.isDone = !props.isDone}}
        >
          <div class="mr-2.5 grid h-5 w-5 place-items-center bg-white outline outline-2 outline-black">
            {props.isDone && <LuCheck class="h-4 w-4" />}
          </div>
        </button>
  <h3>{props.title}</h3>
    </div>
  ) 
}) 
