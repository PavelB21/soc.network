import React from 'react';
//import './modal.css';
import Post from "../components/Post";

function Modal ({closeModal})  {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
            </div>
        </div>
)
};

export default Modal;