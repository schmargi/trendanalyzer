var _ = require('lodash');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var instagramFaker = require('./instagramFaker');
var twitterFaker = require('./twitterFaker');
var Post = require('./post');
var Tag = require('./tag');
var Sort = require('./SortingHelper');

router.use(bodyParser.json());

  var tags = [];
  var posts = [];
  var postsIDsCounter = 0;
  var tagsIDsCounter = 0;

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

    var location = "";
    if (item.location == undefined) {
      location = "Regensburg"
    } else {
      location = item.location.name;

    }

    postsIDsCounter += 1;
    return new Post(postsIDsCounter, text, item.link, item.tags, item.created_time, "Regensburg", {"name": item.user.username, "followers_count": 0}, "INSTAGRAM", {"type": item.type, "url": url}, item.likes.count, 0, false);
  });

  var twitterPosts = twitterFaker.sampleData.statuses.map( item => {
    var hashtags = item.entities.hashtags.map(hashtag =>  hashtag.text);
    // console.log(hashtags);
    tags.push(...hashtags);
    // console.log(tags);

    postsIDsCounter += 1;
    return new Post(postsIDsCounter, item.text, item.entities.urls[0].expanded_url, hashtags, item.created_at, item.place.name, {"name": item.user.name, "followers_count": item.user.followers_count}, "TWITTER", null, item.favorite_count, item.retweet_count, false);
  });

  tags = _.uniq(tags);
  tags = tags.map(tag => {
    tagsIDsCounter += 1;
    return {name: tag, id: tagsIDsCounter};
  });
  posts.push(...twitterPosts);
  posts.push(...instagramPosts);

router.get('/', function (req, res) {
  var location = req.query.location;
  if (location == undefined) {
    location = "Regensburg";
  }
  var sortBy = req.query.sort_by;
  if (sortBy == undefined) {
    sortBy = "post_count"
  }


  var fittingTags = postsForTags(tags, location, sortBy);
  console.log(fittingTags);

  res.status(200).send({tags: fittingTags});
});

router.get('/:id', function(req, res) {
  var location = req.query.location;
  if (location == undefined) {
    location = "Regensburg";
  }
  var sortBy = req.query.sort_by;
  if (sortBy == undefined) {
    sortBy = "post_count"
  }

  res.status(200).send(JSON.stringify({tags: postsForTags(tags.filter(tag => tag.id == req.params.id), location, sortBy)[0]}));
});

module.exports = router;

var postsForTags = function(tags, location, sortBy) {
  tags = tags.map(tag => {
    var score = 0;
    var retweet_count = 0;
    var like_count = 0;
    var fittingPosts = posts.filter(post => {
      return post.tags.includes(tag.name) && post.city == location
    });
    score += fittingPosts.length;
    fittingPosts.forEach(post => {
      score = score + post.like_count * 0.01;
      score = score + post.retweet_count * 0.5;
      retweet_count += post.retweet_count;
      like_count += post.like_count;
    });
    return new Tag(tag.id, tag.name, false, fittingPosts, score, fittingPosts.length, retweet_count, like_count);
  }).filter(tag => tag.posts.length > 0)

  if (sortBy == "post_count") {
    return tags.sort(Sort.post_count);
  } else if (sortBy == "like_count") {
    return tags.sort(Sort.like_count);
  } else if (sortBy == "retweet_count") {
    return tags.sort(Sort.retweet_count);
  } else {
    return tags.sort(Sort.popularity);
  }
}
