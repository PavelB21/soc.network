import React from 'react';
import '../Style/PostStyle.css';
import {useState} from 'react';
import Modal from '../Modal/modal';

function Post(props) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="post">
                <div className="post_top" onClick={() =>
                    setShow(true)}>
                    <div className="post_topInfo" key={props.post.id}>
                        <h3>{props.post.username}</h3>
                    </div>
                </div>
                <div className="post_bottom">
                    <p>{props.post.description}</p>
                </div>
                <div className="post__options">
                    <div className="post_option">
                        <p>Нравится</p>
                    </div>
                    <div className="post_option">
                        <p>Комментарий</p>
                    </div>
                    <div className="post_option">
                        <p>удалить</p>
                    </div>
                    <div className="post_option">
                        <p>редактировть</p>
                    </div>
                </div>
            </div>
            <Modal onClise={() => setShow(false)} show={show}/>
        </div>
    );
}

export default Post;