import { component$, useSignal } from '@builder.io/qwik';
import {LuChevronDown} from '@qwikest/icons/lucide'
export interface DropdownProps {
  items: { name: string; link: string }[]
  text: string
}

export const Dropdown = component$<DropdownProps>((props) => {
  const isActiveDropdown = useSignal(false) 
  return (
      <div
      data-state={isActiveDropdown.value ? 'open' : 'closed'}
      class="relative group text-text"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown.value}
        onBlur$={() => {
          isActiveDropdown.value = false
        }}
        onClick$={() => {
          isActiveDropdown.value=!isActiveDropdown.value
        }}
        class="flex w-[160px] cursor-pointer items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-7 py-3 font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
      >
        <div class="mx-auto flex items-center">
          {props.text}
          <LuChevronDown
            class={
              'ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        class="absolute left-0 w-[160px] group-data-[state=open]:top-20 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-border dark:border-darkBorder text-center font-base shadow-light dark:shadow-dark transition-all"
      >
        {props.items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              class="block w-full border-b-2 border-border dark:border-darkBorder bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
      );
});
