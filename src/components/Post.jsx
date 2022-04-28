import React from 'react';
import '../Style/PostStyle.css';
import '../Style/select.css';
import data from './data/data.json';
import {useState} from 'react';
import Modal from '../Modal/modal';

function Post() {
    const [openModal, setOpenModal] = useState(false);
            return (
                <div>
                    {data.map( user =>{
                        return(
                        <div className="post">
                            <div className="post_top"
                                 onClick={() => {
                                setOpenModal(true);
                                 }
                            }>
                                <div className="post_topInfo" key={user.id}>
                                    <h3>{user.username}</h3>
                                </div>
                            </div>
                            <div className="post_bottom">
                                <p>{user.description}</p>
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
                                    <p>редактировать</p>
                                </div>
                            </div>
                            {openModal && <Modal closeModal={setOpenModal}/>}
                        </div>
                        )
                    }
                    )
                    }
                </div>
            );
        }

export default Post;