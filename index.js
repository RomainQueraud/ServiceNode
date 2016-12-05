/**
 * Created by romain on 05/12/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );

var operations = require('./operations')

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/contacts', function(req, res){
    operations.getUsers(function(err, data){
        res.send(data);
    });
});

app.get('/contacts/:id', function(req, res){
    operations.getUser(req.params.id, function(err, data){
        res.send(data);
    });
});

app.post('/contacts', function(req, res){
    console.log(req.body);
    operations.addUser(req.body, function(err, data){
       res.send(data);
    });
});

app.put('/contacts/:id', function(req, res) {
    operations.updateUser(req.params.id, req.body, function (err, data) {
        res.send(data);
    })
});

app.delete('/contacts/:id', function(req, res){
    operations.removePost(req.params.id, function(err, data){
        res.send(data);
    })
})

app.delete('/contacts', function(req, res){
    operations.removeAllPosts(function(err, data){
        res.send(data);
    })
});

var server = app.listen(1337, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
