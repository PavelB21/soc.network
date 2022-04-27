import React from 'react';
import '../Style/PostStyle.css';
import '../Modal/modal.css';
const Post = ({active, setActive}) => {
    return (
        <div className={active ? "modal.active" : "modal"} onClick={() => {setActive(false)}}>
            <div className="modal__content" onClick={event => event.stopPropagation()}>
                <div className="post">
                    <div className="post_top">
                        <div className="post_topInfo">
                            <h3>имя пользователя</h3>
                        </div>
                    </div>
                    <div className="post_bottom">
                        <p>текст</p>
                    </div>
                    <div className="post__options">
                        <div className="post_option">
                            <p>Нравится</p>
                        </div>
                        <div className="post_option">
                            <p>Комментарий</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;