var post_count = function(lhs, rhs) {
  if (lhs.post_count > rhs.post_count) {
    return -1;
  }
  if (lhs.post_count < rhs.post_count) {
    return +1;
  }
  return 0;
};

var retweet_count = function(lhs, rhs) {
  if (lhs.retweet_count > rhs.retweet_count) {
    return -1;
  }
  if (lhs.retweet_count < rhs.retweet_count) {
    return +1;
  }
  return 0;
};

var like_count = function(lhs, rhs) {
  if (lhs.like_count > rhs.like_count) {
    return -1;
  }
  if (lhs.like_count < rhs.like_count) {
    return +1;
  }
  return 0;
};

var popularity = function(lhs, rhs) {
  if (lhs.score > rhs.score) {
    return -1;
  }
  if (lhs.score < rhs.score) {
    return +1;
  }
  return 0;
};

module.exports = {
  post_count: post_count,
  retweet_count: retweet_count,
  like_count: like_count,
  popularity: popularity
}
