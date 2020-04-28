import React, { Component } from 'react';

class App extends Component {
  state = {
    value: 0,
    x: null,
    y: null
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
    window.addEventListener('mousemove', this.handleMouseMove)
  };

  componentDidUpdate(){
    document.title = `You clicked ${this.state.value} times`
  }

  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = (evt) => {
    this.setState({x: evt.pageX, y: evt.pageY})
  }

  render() {
    const { value, x, y } = this.state;
    return (
      <div>
        <h2>App Class Component</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h3>{value}</h3>
        <br></br>
        <h3>Mouse Position</h3>
        <p>X position: {`${x}`}</p>
        <p>Y position: {`${y}`}</p>
      </div>
    );
  }
}

export default App;
