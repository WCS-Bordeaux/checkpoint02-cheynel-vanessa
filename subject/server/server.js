let express = require('express');
let app = express();
let base = require('./mocks/users.json');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + './public'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(base);
    res.end();
});


app.post('/users', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(base);
    res.end();
});


app.get('/users/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(base);
    res.end();
});

app.put('/users/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(base);
    res.end();
});

app.delete('/users/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(base);
    res.end();
});


app.use(bodyParser.json());
let server = app.listen(9000, function() {
    console.log('We have started our server on the port 9000')
})