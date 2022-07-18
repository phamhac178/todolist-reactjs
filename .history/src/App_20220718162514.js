import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Data from "./Components/TodoList";
import { Routes, Route } from "react-router-dom";
const App = () => {
    const initalState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initalState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Data />
                    <Header />
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
