import React, { Component, createElement } from "react";

interface IProps {
  initialValue: number;
}

interface IState {
  inputValue: number;
}

export default class Counter extends Component<IProps, IState> {
  state: IState = {
    inputValue: this.props.initialValue,
  };

  increment = () => {
    this.setState({ inputValue: this.state.inputValue + 1 });
  };

  decrement = () => {
    this.setState({ inputValue: this.state.inputValue - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <input
          type="number"
          value={this.state.inputValue}
          data-testid="counter-input"
        />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
