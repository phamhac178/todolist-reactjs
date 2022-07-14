import React from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, setEditTodo, editTodo }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([
                ...todos,
                { id: uuidV4(), title: input, completed: false },
            ]);
            setInput("");
        } else {
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placerholder=" Enter a Todo..."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;
