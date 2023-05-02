import React, { Component } from "react";
import "../styles/App.scss";
import Counter from "./Counter";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";
import MovieTile from "./MovieTile";
import movies from "../mock-data/movies.json";

interface IState {
  genres: Array<string>;
  counterInitialValue: number;
}

export default class App extends Component<any, IState> {
  state: IState = {
    genres: ["All", "Documentary", "Comedy", "Horror", "Crime"],
    counterInitialValue: 0,
  };

  onSearch = (searchValue: string) => {
    console.log(`Search value: ${searchValue}`);
  };

  onSelect = (genreName: string) => {
    console.log(`${genreName} is selected`);
  };

  onMovieSelected = (movieId: number) => {
    console.log(`Movie with id = ${movieId} selected`);
  };

  render() {
    return (
      <div className="App">
        <Counter initialValue={this.state.counterInitialValue} />
        <SearchForm inputValue="" onSearch={this.onSearch} />
        <GenreSelect genres={this.state.genres} onSelect={this.onSelect} />
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
