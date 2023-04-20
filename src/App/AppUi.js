
import './App.css';
import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'
import { TodoError } from '../TodoError'; 
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos'


const AppUi = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            
            <TodoList>
                {loading && <TodoLoading loading={loading} />}
                {error && <TodoError error={error}/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = { ()=> completeTodo(todo.text)}
                    onDelete = { ()=> deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            { !!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton/>
        </React.Fragment>
    );
}
export  { AppUi };