import { createSignal, createEffect } from "solid-js";

function MyComponent(props) {
    const [first, setFirst] = createSignal("JSON");
    const [last, setLast] = createSignal("Bourne");
    
    createEffect(() => console.log(`${first()} ${last()}`));

    return <div>Hello {props.name}</div>;
  }

export default MyComponent;