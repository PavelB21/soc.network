import React from 'react';
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

const url = 'http://localhost:3001/posts';

class Feed extends React.Component {
    state = {
        posts: [],
    };
    componentDidMount = async () => {
        const result = await fetch(url);
        const posts = await result.json();
        this.setState({
            posts: posts,
        });
    };


    render() {
        const {posts} = this.state;
        return (
            <div>
                <CreatePost></CreatePost>
                {posts.map(user => {
                    return (
                        <Post post={user}/>
                    )})}
            </div>
        )
    };
}



export default Feed;