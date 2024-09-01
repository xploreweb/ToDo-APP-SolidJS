import { Component } from "solid-js";
import { Todo } from "../types/todo";
import { checkTodo } from "../state/todo";

interface PropTypes {
    todo: Todo;
}

const TodoComponent: Component<PropTypes> = ({ todo }) => {
    return (
        <div>
            <label for={todo.id}>
                <input
                    type="checkbox"
                    name={todo.id}
                    id={todo.id} 
                    checked={todo.checked}
                    onChange={() => checkTodo(todo.id)}
                />
                {todo.content}
            </label>
        </div>
    );
};

export default TodoComponent;