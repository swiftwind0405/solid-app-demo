import styles from './App.module.css';
import Counter from './counter/Counter';
import MyComponent from './components/MyComponent';
import {Todos} from './todo/Todos';

function App() {
  return (
    <div class={styles.App}>
      <MyComponent name="Stanley"/>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
