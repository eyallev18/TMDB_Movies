export default class MovieModel {
  constructor(title, relativePosterURL, id) {
    this.title = title;
    this.posterURL = "https://image.tmdb.org/t/p/w500" + relativePosterURL;
    this.id = id;
  }
}
