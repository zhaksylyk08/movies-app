import React, { Component } from "react";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";
import MovieTile from "./MovieTile";
import movies from "../mock-data/movies.json";
import movieService from "../services/movieService";
import MovieDetails from "./MovieDetails";
import IMovieDetails from "../types/IMovieDetails";

interface IState {
  genres: Array<string>;
  counterInitialValue: number;
  selectedMovie: {
    isShown: boolean;
    details: IMovieDetails;
  };
}

export default class App extends Component<any, IState> {
  state: IState = {
    genres: ["All", "Documentary", "Comedy", "Horror", "Crime"],
    counterInitialValue: 0,
    selectedMovie: {
      isShown: false,
      details: {
        id: 0,
        title: "",
        duration: 0,
        imageUrl: "",
        rating: 0,
        releaseDate: "",
        genres: [""],
        description: "",
      },
    },
  };

  onSearch = (searchValue: string) => {
    console.log(`Search value: ${searchValue}`);
  };

  onSelect = (genreName: string) => {
    console.log(`${genreName} is selected`);
  };

  onMovieSelected = (movieId: number) => {
    this.setState({
      selectedMovie: {
        isShown: true,
        details: movieService.getMovieDetails(movieId),
      },
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm inputValue="" onSearch={this.onSearch} />
        <GenreSelect genres={this.state.genres} onSelect={this.onSelect} />
        {this.state.selectedMovie.isShown && (
          <>
            <MovieDetails movie={this.state.selectedMovie.details} />
            <div className="section-divider"></div>
          </>
        )}
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieTile
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                genres={movie.genres}
                imageUrl={movie.poster_path as string}
                onClick={this.onMovieSelected}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
