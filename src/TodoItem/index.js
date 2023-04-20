import React from "react";
import './TodoItem.css';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';



 const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                title="Haz click para marcar como completado"
            >
                <FaCheck/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                title="ELiminar"
            >
                <AiOutlineClose/>
            </span>
        </li>
    )
 }

export {TodoItem};