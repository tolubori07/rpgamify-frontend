import { component$, useSignal } from '@builder.io/qwik';

interface ProgressProps {
  colour?: string;
  max?: number;
  val?: number;
}

export default component$<ProgressProps>((props) => {
  const fill = useSignal((props.val / props.max) * 100);

  return (
    <div class="progressContainer mb-3 h-5 w-1/2 rounded-base bg-gray-800 shadow-base progress">
      <div class={`rounded-base h-5`} style={`width:${fill.value}%; background-color:${props.colour};`}></div>
    </div>
  );
});
