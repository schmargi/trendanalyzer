module.exports = class Tag {
  constructor(id, title, is_favorite, posts, score, post_count,
    retweet_count, like_count, contains_twitter, contains_instagram,
    today_like_count, today_retweet_count, today_post_count,
    yesterday_like_count, yesterday_retweet_count, yesterday_post_count,
    presterday_like_count, presterday_retweet_count, presterday_post_count,
    one_before_presterday_like_count, one_before_presterday_retweet_count, one_before_presterday_post_count,
    two_before_presterday_like_count, two_before_presterday_retweet_count, two_before_presterday_post_count,
  ) {
    this.id = id;
    this.title = title;
    this.is_favorite = is_favorite;
    this.posts = posts;
    this.popularity = score;
    this.post_count = post_count;
    this.retweet_count = retweet_count;
    this.like_count = like_count;
    this.contains_twitter = contains_twitter;
    this.contains_instagram = contains_instagram;

    // super intense analytics
    this.today_like_count = today_like_count;
    this.today_post_count = today_post_count;
    this.today_retweet_count = today_retweet_count;
    this.yesterday_like_count = yesterday_like_count;
    this.yesterday_post_count = yesterday_post_count;
    this.yesterday_retweet_count = yesterday_retweet_count;
    this.presterday_like_count = presterday_like_count;
    this.presterday_retweet_count = presterday_retweet_count;
    this.presterday_post_count = presterday_post_count
    this.one_before_presterday_like_count = one_before_presterday_like_count;
    this.one_before_presterday_retweet_count = one_before_presterday_retweet_count;
    this.one_before_presterday_post_count = one_before_presterday_post_count;
    this.two_before_presterday_like_count = two_before_presterday_like_count;
    this.two_before_presterday_retweet_count = two_before_presterday_retweet_count;
    this.two_before_presterday_post_count = two_before_presterday_post_count;
  }
}
