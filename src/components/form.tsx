import { Component } from "solid-js";
import { addTodo } from "../state/todo";

const TodoForm: Component = () => {
    let input: HTMLInputElement | undefined;

    function handleFormSubmit(event: SubmitEvent) {
        event.preventDefault();

        if (input == null || input.value == "") {
            return;
        }

        addTodo(input.value);

        input.value = "";
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" ref={input} />
            <button type="submit">Salvesta</button>
        </form>
    )
}

export default TodoForm;