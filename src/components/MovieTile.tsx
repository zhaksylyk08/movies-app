import React, { Component } from "react";

interface IProps {
  id: number;
  title: string;
  releaseDate: string;
  genres: Array<string>;
  imageUrl: string;
  onClick: (movieId: number) => void;
}

export default class MovieTile extends Component<IProps> {
  render() {
    return (
      <div
        className="movie-tile"
        onClick={() => this.props.onClick(this.props.id)}
      >
        <img src={this.props.imageUrl} />
        <span>{this.props.title}</span>
        <span>{this.props.releaseDate}</span>
        <span>{this.props.genres.join(", ")}</span>
      </div>
    );
  }
}
