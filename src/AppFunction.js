import React, { useState, useEffect, Fragment } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  const handleToggle = evt => {
    console.log(evt);
    setIsOn(!isOn)
  };

  const handleMouseMove = evt => {
    setPosition({ x: evt.pageX, y: evt.pageY });
  };

  useEffect(() => {
    document.title = `You clicked ${value} times`;
    window.addEventListener('mousemove', handleMouseMove);

    // clean up this side effect
    // this part is like componentWillUnmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [value]);

  return (
    <Fragment>
      <h2>App Functional Component</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h3>{value}</h3>
      <hr />
      <div className='icon-wrapper' onClick={handleToggle}>
        <span
          className='icon-sun'
          style={{
            fontSize: '4rem',
            color: isOn ? 'yellow' : 'darkgrey'
          }}></span>
      </div>
      <hr />
      <h3>Mouse Position</h3>
      {JSON.stringify(position, null, 2)}
    </Fragment>
  );
};
export default App;
