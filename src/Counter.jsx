import { createSignal, createEffect } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
    
    createEffect(() => console.log(count()*10));

    return <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count() + 1)}>+</button>
      <button onClick={() => setCount(count() - 1)}>-</button>
    </div>;
  }

export default Counter;