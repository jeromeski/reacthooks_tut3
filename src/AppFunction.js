import React, { useState, useEffect, Fragment } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });
  // initial state value based on an external API
  const [status, setStatus] = useState(navigator.onLine)

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

  const handleOnlineStatus = () => {
    setStatus(true)
  }

  const handleOfflineStatus = () => {
    setStatus(false)
  }

  useEffect(() => {
    document.title = `You clicked ${value} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnlineStatus )
    window.addEventListener('offline', handleOfflineStatus);
    // clean up this side effect
    // this part is like componentWillUnmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnlineStatus )
      window.removeEventListener('offline', handleOfflineStatus);
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
      <hr/>
      <h3>Network Status</h3>
      <p>You are now: <strong>{status ? "Online" : "Offline"}</strong></p>

    </Fragment>
  );
};
export default App;
