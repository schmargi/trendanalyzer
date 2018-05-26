module.exports = class Post {
  constructor(text, url, tags, timestamp, city, user, origin, media, like_count, retweet_count, is_favorite) {
    this.text = text;
    this.url = url;
    this.tags = tags;
    this.timestamp = timestamp;
    this.city = city;
    this.user_name = user.name;
    this.user_follower_count = user.followers_count;
    this.origin = origin;
    if (media) {
      this.media_type = media.type;
      this.media_url = media.url;
    } else {
      this.media_type = "";
      this.media_url = "";
    }
    this.like_count = like_count;
    this.retweet_count = retweet_count;
    this.is_favorite = is_favorite;
  }
}
