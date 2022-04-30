import React from 'react';
import Post from "../components/Post";
import data from "../components/data/data.json";
const Feed = () => {
    return (
        <div>
            {data.map(user => {
                return (
                    <Post post={user}/>
                )
            }
            )
            }
            )
        </div>
    )

};

export default Feed;