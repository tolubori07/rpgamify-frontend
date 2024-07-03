import { component$, useSignal } from "@builder.io/qwik";

interface InputProps{ 
  placeholder?:string;
}
export default component$<InputProps>((props)=>{
  
  return (
    <input 
    class="rounded-base border-2 border-black p-[10px] ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none focus:w-full w-3/5"
      type="text"
      name="text"
      aria-label={props.placeholder}
      placeholder={props.placeholder}
    />
  )
})
