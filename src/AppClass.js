import React, { Component } from 'react';

class AppClass extends Component {
  state = {
    value: 0
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  componentDidMount(){
    document.title = `You clicked ${this.state.value} times`
  };

  componentDidUpdate(){
    document.title = `You clicked ${this.state.value} times`
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>App Class Component</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h1>{value}</h1>
        <p>x: value of x</p>
        <p>y: value of y</p>
      </div>
    );
  }
}

export default AppClass;
