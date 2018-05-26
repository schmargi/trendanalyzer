module.exports = class Tag {
  constructor(title, is_favorite, posts, score) {
    this.title = title;
    this.is_favorite = is_favorite;
    this.posts = posts;
    this.score = score;
  }
}
