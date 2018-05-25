var express = require('express');
var app = express();
var http = require('http').Server(app);

var cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.contentType('application/json');
  next();
});

var questionsController = require('./Routes/Questions');
app.use('/questions', questionsController);

var courseController = require('./Routes/Courses');
app.use('/courses', courseController);

var messageController = require('./Routes/Messages');
app.use('/messages', messageController);

var loggingController = require('./Routes/Logging');
app.use('/logging', loggingController);

var sockets = require('./Sockets');
sockets.listen(00);

module.exports = http;
