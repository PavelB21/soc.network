import React from 'react';
import '../Style/PostStyle.css';
class Comment extends React.Component {

    state ={
        likeCount: 0
    }

    likePost =() => {
        this.setState(({ likeCount }) => {
            return {
                likeCount: ++likeCount
            }
        })

    }

    render() {
        return (
            <div className='like_wrap _like_wall68491943_1490 '>
                <div className='like_cont PostBottomActionLikeBtns PostBottomActionLikeBtns--withBgButtons'>
                    <div className='like_btns'>
                        <button onClick={this.likePost}>like</button>
                        {this.state.likeCount}
                    </div>
                </div>
            </div>
        )
    };

}
export default Comment;