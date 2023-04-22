import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

const TodoForm = () => {

    const [newToDoValue, setNewToDoValue] = React.useState('');
    const { addTodo, setOpenModal} = React.useContext(TodoContext);
    const onSubmit = (event) => {
        event.preventDefault();
        if (!newToDoValue) {
            setNewToDoValue('Ingresa un texto');
            setTimeout(() => {
                setNewToDoValue('');
            },1000)
        } else {
            addTodo(newToDoValue);
            setOpenModal(prevState => !prevState);

        }
    }
    const onCancel = () => {
        setOpenModal(prevState => !prevState);
    }
    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
        <label>Write below your new task To Do</label>
            <textarea
            autoFocus
            value={newToDoValue}
            onChange={onChange}
            placeholder="New ToDo"/>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn-form"
                >
                    Cancel
                </button>
                <button
                    className={`btn-form ${(newToDoValue === 'Ingresa un texto') && 'btn-hidden'}`}
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )

}

export { TodoForm }