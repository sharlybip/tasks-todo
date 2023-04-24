import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

const TodoCounter = () =>{
    const {totalTodos, completedTodos } = React.useContext(TodoContext) 

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export { TodoCounter };