import React from 'react';
import '../Style/PostStyle.css';
import {useState} from 'react';
import Modal from '../Modal/modal';
import Comment from "./Comments";
const url = 'http://localhost:3001/comments';
function Post(props) {
    const [show, setShow] = useState(false)
    fetch(url)
        .then(response =>response.json())
        .then((data) =>{
            const result = data.filter(element => element.postId === this.props.postID)
            console.log("fff", result);
        })
    return (
        <div>
            <div className="feed_row">
                <div className="_post post page_block all own post--withPostBottomAction  post--with-likes closed_comments deep_active" key={props.post.id}>
                    <div className='_post_content'>
                        <div className='PostHeader PostHeader--legacy PostHeader--inPost js-PostHeader'>
                            <div className='PostHeaderInfo PostHeaderInfo--inHeader PostHeaderInfo--legacy'>
                                <h5 className="post_author">
                                    <p>{props.post.username}</p>
                                </h5>
                            </div>
                        </div>
                        <div className="post_content">
                            <div className='post_info'>
                                <div className='wall_text'>
                                    <div className='wall_post_cont _wall_post_cont'>
                                        <div className="wall_post_text">
                                            {props.post.description}
                                        </div>
                                    </div>
                                </div>
                                <div className='like_wrap _like_wall68491943_1490 '>
                                    <div className='like_cont PostBottomActionLikeBtns PostBottomActionLikeBtns--withBgButtons'>
                                        <div className='like_btns'>

                                        </div>
                                    </div>
                                </div>
                                <Comment postID = {props.post.id}/>
                                <div className='reply_box_wrap'>
                                    <div className='reply_fakebox_container'>
                                        <div className='reply_fakebox'>
                                            <div className='reply_field submit_post_field' role="textbox"
                                                 aria-multiline="true" contentEditable="true">
                                                gdf
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal onClose={() => setShow(false)} show={show} post={props.post}/>
        </div>
    );
}

export default Post;