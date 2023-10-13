import styles from './App.module.css';
import Counter from './Counter';
import MyComponent from './MyComponent';
import {Todos} from './Todos';

function App() {
  return (
    <div class={styles.App}>
      {/* <MyComponent name="Stanley"/> */}
      {/* <Counter/> */}
      <Todos/>
    </div>
  );
}

export default App;
