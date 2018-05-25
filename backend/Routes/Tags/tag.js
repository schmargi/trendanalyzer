module.exports = class Tag {
  constructor(title, is_favorite, posts) {
    this.title = title;
    this.is_favorite = is_favorite;
    this.posts = posts;
  }
}
