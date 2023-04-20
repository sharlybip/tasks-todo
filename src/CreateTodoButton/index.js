import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

const CreateTodoButton = (props) => {
  const {openModal, setOpenModal} = React.useContext(TodoContext);
  const onClickAdd = () => {
    // (!!openModal)
    //   ?setOpenModal(false)
    //   :setOpenModal(true)
    setOpenModal(prevState => !prevState);
  }
    return (
      <button 
      className={`btn ${!!openModal && 'btn-exit'} `}
      onClick={onClickAdd}
      >
        +
      </button>
    )
 }

export {CreateTodoButton};