import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import { Container, Row, Col } from "react-bootstrap";
import MovieComp from "../components/MovieComp";
import MovieModel from "../model/MovieModel";
import Axios from "axios";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieSearchResults: [],
      movieSearchResultStrings: [],
      movies: []
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchMovies(searchText) {
    if (searchText === "") {
      this.setState({
        movieSearchResults: [],
        movieSearchResultStrings: [],
        movieDetailsResult: [],
        movieDetailsResultStrings: []
      });
    } else {
      const searchURL =
        "https://api.themoviedb.org/3/search/movie?api_key=77cc9523668c3dd019a1c3282e7b7141&query=" +
        searchText;

      Axios.get(searchURL).then(response1 => {
        this.setState({
          movieSearchResults: response1.data.results,
          movieSearchResultStrings: response1.data.results.map(
            result => result.title
          ),
          movieDetailsResult: response1.data.results.map(result => result.id)
        });
      });

      for (var i = 0; i < this.state.movieSearchResultStrings.length; i++) {
        const details =
          "https://api.themoviedb.org/3/movie/" +
          this.state.movieSearchResults[i].id +
          "?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US";
        const promise1 = Axios.get(details);
        const promises = [promise1];
        Promise.all(promises).then(response => {
          this.setState({
            movieDetailsResultStrings: response[0].data.runtime.map(
              result => result
            )
          });
        });
      }
    }
  }
  addMovie(index) {
    // const details =
    //   "https://api.themoviedb.org/3/movie/" +
    //   this.state.movieSearchResults[index].id +
    //   "?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US";
    // const promise1 = Axios.get(details);
    // const promises = [promise1];
    // Promise.all(promises).then(response => {
    //   this.setState({
    //     movieDetailsResult: response[0].data.runtime
    //   });
    // });
    // Here I could call another function from TMDB to get additional actor data

    const newMovie = new MovieModel(
      this.state.movieSearchResults[index].title,
      this.state.movieSearchResults[index].poster_path,
      this.state.movieSearchResults[index].id,
      this.state.movieDetailsResultStrings[index]
    );

    this.setState({
      movies: this.state.movies.concat(newMovie),
      movieSearchResults: [],
      movieSearchResultStrings: [],
      movieDetailsResult: []
    });
  }

  render() {
    const { movieSearchResultStrings, movies } = this.state;

    const movieComp = movies.map((movie, index) => (
      <Col md={4} key={index}>
        <MovieComp movie={movie} />
      </Col>
    ));

    return (
      <div>
        <Container>
          <SearchBox
            searchPlaceholder="Search Movie"
            results={movieSearchResultStrings}
            onSearchChange={this.searchMovies}
            onSelectedResult={this.addMovie}
          />
          <Row>{movieComp}</Row>
        </Container>
      </div>
    );
  }
}
