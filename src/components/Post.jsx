import React from 'react';
import '../Style/PostStyle.css';
import '../Style/select.css';
import {useState} from 'react';
import Modal from '../Modal/modal';

function Post(props) {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <div className="post">
                <div className="post_top" onClick={() => {setModalActive(true);}}>
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
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default Post;