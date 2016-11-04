// server.js

var express = require('express');
var bodyParser = require('body-parser');
require('./app/models/db');

var posts = require('./app/routes/posts');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', posts);

app.get('/', function(req, res) {
	res.send('hello world');
});

var port = process.env.PORT || 8082;

app.listen(port);
console.log('Server started on port ' + port);