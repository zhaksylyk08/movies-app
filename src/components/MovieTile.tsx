import React, { Component } from "react";
import IMovie from "../types/IMovie";

interface IProps {
  movie: IMovie;
  onClick: (movieId: number) => void;
}

export default class MovieTile extends Component<IProps> {
  render() {
    return (
      <div
        className="movie-tile"
        onClick={() => this.props.onClick(this.props.movie.id)}
      >
        <img src={this.props.movie.imageUrl} />
        <span>{this.props.movie.title}</span>
        <span>{this.props.movie.releaseDate}</span>
        <span>{this.props.movie.genres.join(", ")}</span>
      </div>
    );
  }
}
