import React from 'react';
import '../Style/CreatePost.css';
const url = 'http://localhost:3001/posts';
let form = document.getElementById('createPost')
form.addEventListener('submit', function (e){
    e.preventDefault();
    let username = document.getElementById('name').value
    let description = document.getElementById('content').value
    let id = document.getElementById('id').value

    fetch(url, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            id: id,
            username: username,
            description: description
        })
    })
        .then(function (response){
            return response.json()
        })
        .then(function (data){
            console.log(data)
        })
})


const CreatePost = () => {

    return (
        <div className="post">
            <form action="http://localhost:3001/posts" method="post" id="createPost">
                <div>
                    <div>
                        <label htmlFor="name">id</label>
                        <input type="text" id="id" name="idPost"></input>
                    </div>
                    <div>
                        <label for="name">Имя</label>
                        <input type="text" id="name" name="username"></input>
                    </div>
                    <div>
                        <label for ="content">Текст поста</label>
                        <textarea id="content" name="description"></textarea>
                    </div>
                    <input type="submit" value='Создать'></input>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;