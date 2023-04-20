import React from "react";
import { TodoContext } from "../TodoContext";
import { ImArrowDown } from 'react-icons/im';
import './EmptyTodos.css';

const EmptyTodos = () => {
    const { textCreate , totalTodos} = React.useContext(TodoContext);
    return (
        <div className="arrow-container">
        <p>{textCreate}</p>
        {
            (!totalTodos) && <span className="arrow"><ImArrowDown/></span>
        }
        

        </div>
    )
        
}
export { EmptyTodos };