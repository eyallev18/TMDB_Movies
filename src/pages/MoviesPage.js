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
    // let newActorSearchResults = [];
    // for (var i = 0; i < this.state.actorSearchResults.length; i++) {
    //     newActorSearchResults.push(this.state.actorSearchResults[i])
    // }
    // newActorSearchResults.push(searchText);

    // this.setState({
    //     actorSearchResults: newActorSearchResults
    // })

    if (searchText === "") {
      this.setState({
        MovieSearchResults: [],
        MovieSearchResultStrings: []
      });
    } else {
      const searchURL =
        "https://api.themoviedb.org/3/search/movie?api_key=77cc9523668c3dd019a1c3282e7b7141&query=" +
        searchText;
      Axios.get(searchURL).then(response => {
        this.setState({
          movieSearchResults: response.data.results,
          movieSearchResultStrings: response.data.results.map(
            result => result.title
          )
        });
      });

      // this.setState({
      //     actorSearchResults: this.state.actorSearchResults.concat(searchText)
      // })
    }
  }

  addMovie(index) {
    // Here I could call another function from TMDB to get additional actor data

    const newMovie = new MovieModel(
      this.state.movieSearchResults[index].title,
      this.state.movieSearchResults[index].poster_path,
      this.state.movieSearchResults[index].id
    );

    this.setState({
      movies: this.state.movies.concat(newMovie),
      movieSearchResults: [],
      movieSearchResultStrings: []
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
