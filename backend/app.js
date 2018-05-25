var express = require('express');
var app = express();
var http = require('http').Server(app);

var cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.contentType('application/json');
  next();
});

var tagsController = require('./Routes/Tags');
app.use('/tags', tagsController);

module.exports = http;
