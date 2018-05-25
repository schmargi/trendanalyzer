var _ = require('lodash');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var instagramFaker = require('./instagramFaker');
var twitterFaker = require('./twitterFaker');
var Post = require('./post');
var Tag = require('./tag');

router.use(bodyParser.json());

router.get('/', function (req, res) {

  var tags = [];


  var instagramPosts = instagramFaker.sampleData.data.map( item => {

    tags.push(...item.tags);
    //nullable values
    var url = "";
    if (item.type == "video") {
      url = item.videos.standard_resolution;
    } else {
      url = item.images.standard_resolution;
    }
    var text = "";

    if (item.caption) {
      text = item.caption.text;
    }

    return new Post(text, item.link, item.tags, item.created_time, "Regensburg", {"name": item.user.username, "retweet_count": 0}, "INSTAGRAM", {"type": item.type, "url": url}, item.likes.count, 0, false);
  });

  tags = _.uniq(tags);

  tags = tags.map(tag => {
    var fittingPosts = instagramPosts.filter(post => {
      return post.tags.includes(tag);
    });

    return new Tag(tag, false, fittingPosts);
  });


  console.log(tags);

  res.status(200).send({tags: tags});
});

module.exports = router;
