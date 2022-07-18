import React from "react";

const Todos = () => {
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

export default Todos;
