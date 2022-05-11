import React from 'react';
import '../Style/PostStyle.css';
const url = 'http://localhost:3001/comments';
class Comment extends React.Component{
    state = {
        comments: [],
    };
    componentDidMount = async () => {
        const result = await fetch(url);
        const comments = await result.json();
        this.setState({
            comments: comments,
        });
    };
    render() {
        const {comments} = this.state;
        return (
            <div>
                {comments.map(comment => {
                    return(
                <div className='replies' key={comment.id}>
                    <div className='replies_wrap'>
                        <div className="replies_list _replies_list">
                            <div className="reply reply_dived clear  reply_replieable _post">
                                <div className='reply_wrap _reply_content _post_content clear_fix'>
                                    <div className='reply_content'>
                                        <div className='reply_author'>
                                            <span className="author">
                                                {comment.author}
                                            </span>
                                        </div>
                                        <div className='reply_text'>
                                            {comment.text}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )})}
            </div>
        )
    };
}
export default Comment;