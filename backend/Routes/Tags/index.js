var _ = require('lodash');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var instagramFaker = require('./instagramFaker');
var twitterFaker = require('./twitterFaker');
var Post = require('./post');
var Tag = require('./tag');

router.use(bodyParser.json());

  var tags = [];


  var instagramPosts = instagramFaker.sampleData.data;

  for (var i = 0; i < 10; i++) {
    instagramPosts.push(instagramFaker.fake());
  }

  instagramPosts = instagramPosts.map( item => {

    tags.push(...item.tags);
    //nullable values
    var url = "";
    if (item.type == "video") {
      url = item.videos.standard_resolution.url;
    } else {
      url = item.images.standard_resolution.url;
    }
    var text = "";

    if (item.caption) {
      text = item.caption.text;
    }

    return new Post(text, item.link, item.tags, item.created_time, "Regensburg", {"name": item.user.username, "followers_count": 0}, "INSTAGRAM", {"type": item.type, "url": url}, item.likes.count, 0, false);
  });

  var twitterPosts = twitterFaker.sampleData.statuses.map( item => {
    var hashtags = item.entities.hashtags.map(hashtag =>  hashtag.text);
    tags.push(...hashtags);
    return new Post(item.text, item.entities.urls[0].expanded_url, hashtags, item.created_at, "Regensburg", {"name": item.user.name, "followers_count": item.followers_count}, "TWITTER", null, item.favorite_count, item.retweet_count, false);
  });

  tags = _.uniq(tags);

  tags = tags.map(tag => {
    var fittingPosts = [];
    fittingPosts.push(...twitterPosts);
    fittingPosts.push(...instagramPosts);
    fittingPosts = fittingPosts.filter(post => {
      return post.tags.includes(tag);
    });
    return new Tag(tag, false, fittingPosts);
  });

router.get('/', function (req, res) {

  res.status(200).send({tags: tags});
});

module.exports = router;
