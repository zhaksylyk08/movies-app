import React, { Component } from "react";
import { SortOptions } from "../types/SortOptions";

interface IProps {
  selectedOption: SortOptions;
  onSortChange: (selectedOption: SortOptions) => void;
}

export default class SortControl extends Component<IProps, any> {
  render() {
    return (
      <div className="sort">
        <label>SORT BY </label>
        <select
          value={this.props.selectedOption}
          onChange={(e) =>
            this.props.onSortChange(e.target.value as SortOptions)
          }
        >
          <option value={SortOptions.ReleaseDate}>Release Date</option>
          <option value={SortOptions.Title}>Title</option>
        </select>
      </div>
    );
  }
}
