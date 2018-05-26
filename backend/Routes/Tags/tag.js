module.exports = class Tag {
  constructor(id, title, is_favorite, posts, score, post_count, retweet_count, like_count, contains_twitter, contains_instagram) {
    this.id = id;
    this.title = title;
    this.is_favorite = is_favorite;
    this.posts = posts;
    this.popularity = score;
    this.post_count = post_count;
    this.retweet_count = retweet_count;
    this.like_count = retweet_count;
    this.contains_twitter = contains_twitter;
    this.contains_instagram = contains_instagram;
  }
}
