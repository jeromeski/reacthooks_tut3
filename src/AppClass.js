import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    value: 0,
    isOn: false,
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

  handleToggle = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.value} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.value} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = evt => {
    this.setState({ x: evt.pageX, y: evt.pageY });
  };

  render() {
    const { value, x, y, isOn } = this.state;
    return (
      <Fragment>
        <h2>App Class Component</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h3>{value}</h3>
        <hr/>
        <div className='icon-wrapper' onClick={this.handleToggle}>
          <span 
            className='icon-sun'
            style={{
              fontSize: '4rem',
              color: isOn ? "yellow" : "darkgrey"
            }}
          >
          </span>
        </div>
        <hr />
        <br></br>
        <h3>Mouse Position</h3>
        <p>X position: {`${x}`}</p>
        <p>Y position: {`${y}`}</p>
      </Fragment>
    );
  }
}

export default App;
