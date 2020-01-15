export default class MovieModel {
  constructor(
    title,
    relativePosterURL,
    id,
    runtime,
    firstMainStars,
    secondMainStars,
    thirdMainStars,
    director
  ) {
    this.title = title;
    this.posterURL = "https://image.tmdb.org/t/p/w500" + relativePosterURL;
    this.id = id;
    this.runtime = runtime;
    this.firstMainStars = firstMainStars;
    this.secondMainStars = secondMainStars;
    this.thirdMainStars = thirdMainStars;
    this.director = director;
  }
}
