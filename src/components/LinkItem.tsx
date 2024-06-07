import {component$} from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city';
interface LinkProps{ 
  text?: string;
  dir?: string;
}
export default component$<LinkProps>((props)=>{ 
  return(
    <Link href={props.dir}>
      <button
      role="button"
      aria-label="Click to perform an action"
      class='flex cursor-pointer items-center rounded-base border-2 border-black bg-mainAccent px-4 py-2 text-md font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none font-display text-main'>
     {props.text} 
    </button>
    </Link>
  )
})
