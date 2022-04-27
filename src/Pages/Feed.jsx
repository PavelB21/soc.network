import React, {useState} from 'react';
import "../Style/FeedStyle.css";
import Post from "../components/Post";

const Feed = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <Post active={modalActive} setActive={setModalActive}/>
    );
};

export default Feed;