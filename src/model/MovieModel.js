export default class MovieModel {
  constructor(title, relativePosterURL, id, runtime, director, mainStars) {
    this.title = title;
    this.posterURL = "https://image.tmdb.org/t/p/w500" + relativePosterURL;
    this.id = id;
    this.runtime = runtime;
    this.director = director;
    this.mainStars = mainStars;
  }
}
