import {component$} from '@builder.io/qwik'

interface badgeProps{ 
  text?: string;
}
export default component$<badgeProps>((props)=>{
  return (
    <div
      class="w-fit rounded-base border-2 border-black bg-bg px-3 py-1.5 text-sm font-base">
      <p>{props.text}</p>
    </div>
  )
})
