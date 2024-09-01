import { For, type Component } from "solid-js";
import TodoForm from "./components/form";
import TodoComponent from "./components/todo";
import { removeAllCheckedTodos, todos } from "./state/todo";

const App: Component = () => {
  return (
    <>
      <TodoForm></TodoForm>

      <For each={todos}>
        {todo => {
          return (
            <TodoComponent todo={todo}></TodoComponent>
          )
        }}
      </For>

      <button onClick={removeAllCheckedTodos}>Kustuta kõik märgitud tööd</button>
    </>
  );
};

export default App;