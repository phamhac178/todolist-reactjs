import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Todos from "./Components/Todos";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}></Route>
                <Route path="/Todolist" element={<Todos />}></Route>
                <Route path="/Todolist" element={<Todos />}></Route>
                
            </Routes>
        </BrowserRouter>
        // <div className="container">
        //     <div className="app-wrapper">
        //         <div>
        //             <Data />
        //             <Header />
        //         </div>
        //         <div>
        //             <Form
        //                 input={input}
        //                 setInput={setInput}
        //                 todos={todos}
        //                 setTodos={setTodos}
        //                 editTodo={editTodo}
        //                 setEditTodo={setEditTodo}
        //             />
        //         </div>
        //         <div>
        //             <TodoList
        //                 todos={todos}
        //                 setTodos={setTodos}
        //                 setEditTodo={setEditTodo}
        //             />
        //         </div>
        //     </div>
        // </div>
    );
};

export default App;
