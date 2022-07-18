import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import 
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route index element={<TodoList />} />
                    <Route path="teams" element={<Data />}></Route>
                </Route>
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
