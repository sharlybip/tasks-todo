import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";
const TodoSearch = () => {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return (        
        <input 
            className="input" 
            placeholder='Buscar ToDo'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch};