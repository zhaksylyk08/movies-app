import React, { Component } from "react";
import IMovieDetails from "../types/IMovieDetails";

interface IProps {
  movie: IMovieDetails;
}

export default class MovieDetails extends Component<IProps> {
  render() {
    return (
      <div className="movie-details">
        <img src={this.props.movie.imageUrl} />
        <span className="right">
          <span className="title">{this.props.movie.title}</span>
          <span>{this.props.movie.genres.join(", ")}</span>
          <span className="rating">{this.props.movie.rating}</span>
          <span>
            {this.props.movie.releaseDate} {this.props.movie.duration}min
          </span>
          <span className="description">{this.props.movie.description}</span>
        </span>
      </div>
    );
  }
}
