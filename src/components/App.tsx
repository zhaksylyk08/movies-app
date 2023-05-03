import React, { Component } from "react";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";
import MovieTile from "./MovieTile";
import movieService from "../services/movieService";
import MovieDetails from "./MovieDetails";
import SortControl from "./SortControl";
import IMovieDetails from "../types/IMovieDetails";
import IMovie from "../types/IMovie";
import { SortOptions } from "../types/SortOptions";

interface IState {
  genres: Array<string>;
  counterInitialValue: number;
  selectedMovie: {
    isShown: boolean;
    details: IMovieDetails;
  };
  selectedSortOption: SortOptions;
  movies: Array<IMovie>;
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
    selectedSortOption: SortOptions.ReleaseDate,
    movies: movieService.getMovies(SortOptions.ReleaseDate),
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

  onSortChanged = (selectedOption: SortOptions) => {
    this.setState({
      selectedSortOption: selectedOption,
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm inputValue="" onSearch={this.onSearch} />
        {this.state.selectedMovie.isShown && (
          <>
            <MovieDetails movie={this.state.selectedMovie.details} />
            <div className="section-divider"></div>
          </>
        )}
        <header>
          <GenreSelect genres={this.state.genres} onSelect={this.onSelect} />
          <SortControl
            selectedOption={this.state.selectedSortOption}
            onSortChange={this.onSortChanged}
          />
        </header>
        <ul className="movie-list">
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <MovieTile movie={movie} onClick={this.onMovieSelected} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
