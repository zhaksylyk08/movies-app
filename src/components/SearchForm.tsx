import { Component } from "react";

interface IProps {
  inputValue: string;
  onSearch: (inputValue: string) => void;
}

interface IState {
  inputValue: string;
}

export default class SearchForm extends Component<IProps, IState> {
  state: IState = {
    inputValue: this.props.inputValue,
  };

  handleChange = (event: any) => {
    this.setState({ inputValue: event.target?.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <input
          placeholder="What do you want to watch?"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onFocus={this.handleSearch}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.handleSearch();
            }
          }}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}
