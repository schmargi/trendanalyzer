module.exports = class Tag {
  constructor(id, title, is_favorite, posts, score) {
    this.id = id;
    this.title = title;
    this.is_favorite = is_favorite;
    this.posts = posts;
    this.score = score;
  }
}
