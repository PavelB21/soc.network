var express = require('express');
var cors = require('cors');
var path = require('path');
var fs = require('fs');

var app = express();
app.use(cors())

const jsonParse = express.json();
app.post('/posts', jsonParse, function (request,response) {
    var fileName = path.resolve(__dirname, './data/posts.json');
    let data = fs.readFileSync(fileName, 'utf8');
    let posts = JSON.parse(data);
    let newPost = request.body;
    posts.push(newPost)
    fs.writeFileSync(fileName, JSON.stringify(posts))
    response.send(posts);
});

app.get('/posts', function (request,response){
    var fileName = path.resolve(__dirname, './data/posts.json');
    response.sendFile(fileName, {})
});

app.get('/posts/:postId', function (request, response){
    let postId = request.params["postId"]
    let fileName = path.resolve(__dirname, './data/posts.json');
    let data = fs.readFileSync(fileName,'utf8');
    let posts = JSON.parse(data)
    response.send(posts[postId])
});

app.post('/comments', jsonParse, function (request,response) {
    var fileName = path.resolve(__dirname, './data/comments.json');
    let data = fs.readFileSync(fileName, 'utf8');
    let comments = JSON.parse(data);
    let newComments = request.body;
    comments.push(newComments)
    fs.writeFileSync(fileName, JSON.stringify(comments))
    response.send(comments);
});

app.get('/comments', function (request,response){
    var fileName = path.resolve(__dirname, './data/comments.json');
    response.sendFile(fileName, {})
});

app.get('/comments/:commentId', function (request, response){
    let commentId = request.params["commentId"]
    let fileName = path.resolve(__dirname, './data/comments.json');
    let data = fs.readFileSync(fileName,'utf8');
    let comments = JSON.parse(data)
    response.send(comments[commentId])
});

app.listen(3001)