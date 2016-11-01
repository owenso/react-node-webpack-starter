process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('./config/express');

var app = express();

var port = process.env.PORT || 1337;


app.listen(port);
module.exports = app;

console.log('Server running on port: ' + port);
console.log('Running in environment: ' + process.env.NODE_ENV );
