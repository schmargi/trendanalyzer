module.exports = class Post {
  constructor(text, url, tags, timestamp, city, user, origin, media, like_count, retweet_count, is_favorite) {
    this.text = text;
    this.url = url;
    this.tags = tags;
    this.timestamp = timestamp;
    this.city = city;
    this.user = user;
    this.origin = origin;
    this.media = media;
    this.like_count = like_count;
    this.retweet_count = retweet_count;
    this.is_favorite = is_favorite;
  }
}
