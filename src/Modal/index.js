import  ReactDOM  from "react-dom";
import './modal.css'

const Modal = ({ children }) =>{
    return ReactDOM.createPortal(
        <div className="modal-background">
            {children}
        </div>,
        document.getElementById('modal')

    );
}

export { Modal }