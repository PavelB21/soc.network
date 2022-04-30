import React from 'react';
import './modal.css';


function Modal ({active, setActive})  {
    return(
        <div className={active ? "modal active": "modal"}
             onClick={() => setActive(false)}>
            <div className={active ? "modal__content active": "modal__content"}
                 onClick={event => event.stopPropagation()}>
                текст модального окна
            </div>
        </div>
    )


};

export default Modal;