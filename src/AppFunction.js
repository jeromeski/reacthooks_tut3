import React, { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [position, setPosition] = useState({ x: null, y: null });

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
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
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [value]);

  return (
    <div>
      <h2>App Functional Component</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h3>{value}</h3>
      <h3>Mouse Position</h3>
      {JSON.stringify(position, null, 2)}
    </div>
  );
};

export default App;
