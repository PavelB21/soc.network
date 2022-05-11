import React from 'react';
import './modal.css';

const Modal = props => {
    if (!props.show){
        return null
    }
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="close" onClick={props.onClose}>
                    <div className="modal=body">
                        {props.post.username}
                        {props.post.description}
                    </div>
                </div>
            </div>
        </div>
    )


};

export default Modal;