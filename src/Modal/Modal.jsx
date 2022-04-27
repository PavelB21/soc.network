import React from 'react';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal.active" : "modal"} onClick={() => setActive(false)} n>
            <div className="modal__content" onClick={event => event.stopPropagation()}>

            </div>
        </div>
    );
};

export default Modal;