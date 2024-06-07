import { component$} from '@builder.io/qwik'
interface avatarProps{ 
  imageUrl?:string;
}
export default component$<avatarProps>((props)=> {
  return (
    <div
      style={{backgroundImage: `url(${props.imageUrl})`}}
      class={'h-24 w-24 rounded-full border-2 border-black bg-cover bg-center'}
    ></div>
  )
})
