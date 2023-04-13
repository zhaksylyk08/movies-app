import { Component } from "react";

interface IProps {
  genres: Array<string>;
  onSelect: (genreName: string) => void;
}

interface IState {
  selectedGenreIndex: number;
}

export default class GenreSelect extends Component<IProps, IState> {
  state: IState = {
    selectedGenreIndex: 0,
  };

  selectGenre = (index: number) => {
    this.setState({
      selectedGenreIndex: index,
    });

    this.props.onSelect(this.props.genres[index]);
  };

  render() {
    return (
      <ul className="genre-select">
        {this.props.genres.map((genre, index) => (
          <li
            key={index}
            className={
              this.state.selectedGenreIndex === index ? "selected" : ""
            }
            onClick={() => this.selectGenre(index)}
          >
            {genre}
          </li>
        ))}
      </ul>
    );
  }
}
