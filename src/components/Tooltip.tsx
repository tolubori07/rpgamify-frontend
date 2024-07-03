import { component$ } from '@builder.io/qwik'
interface TipProps {
  elementToHover?: string; 
  tooltip:string
}

export default component$<TipProps>((props) => {
  return (
    <div class="group relative inline-block w-28 cursor-default text-center font-base">
      {props.elementToHover}
      <div class="pointer-events-none absolute -left-1/2 bottom-8 z-10 ml-14 w-28 rounded-base border-2 border-black bg-main px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100">
        {props.tooltip}
      </div>
    </div>
  )
})
