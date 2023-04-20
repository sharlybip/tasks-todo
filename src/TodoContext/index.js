import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const [
        todos,
        saveTodos,
        loading,
        error,
        ] = useLocalStorage('TODOS_V1', []);
    //const [patos, savePatos] = useLocalStorage('PATS_V1', 'Fernando')
    const [searchValue, setSearchValue] = React.useState('');
    const [textCreate, setTextCreate] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    React.useEffect(() =>{
        (!totalTodos) ? setTextCreate('Crea tu Primer ToDo') : setTextCreate('No Hay TODOs relacionados con tu busqueda');
    },[totalTodos]);
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }) 
    }

    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push( 
            {
                completed: false,
                text: text,
            });
        saveTodos(newTodos);
    } 
    const completeTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
    } 
    const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            textCreate,
            setTextCreate,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
} 



export {  TodoContext, TodoProvider};