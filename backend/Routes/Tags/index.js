var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var instagramFaker = require('instagramFaker.js');


router.use(bodyParser.json());

var tags = [];

router.get('/', function (req, res) {
  res.status(200).send(JSON.stringify({tags: tags}));
});

module.exports = router;
