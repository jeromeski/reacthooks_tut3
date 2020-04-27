import React, { Component } from 'react';

class AppClass extends Component {
  state = {
    value: 0
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>App Class Component</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h1>{value}</h1>
      </div>
    );
  }
}

export default AppClass;
