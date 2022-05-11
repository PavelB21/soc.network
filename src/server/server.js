var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();
app.use(cors())

app.get('/posts', function (request,response){
    var fileName = path.resolve(__dirname, './data/posts.json');
    response.sendFile(fileName, {})
});

app.get('/comments', function (request,response){
    var fileName = path.resolve(__dirname, './data/comments.json');
    response.sendFile(fileName, {})
});
app.listen(3001)