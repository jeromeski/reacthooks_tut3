import React, { useState } from 'react';

const AppFunction = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  return (
    <div>
      <h3>App Functional Component</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>{value}</h1>
    </div>
  );
};

export default AppFunction;
