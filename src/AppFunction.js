/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';


const initialLocState = {
  latitude: null,
  longtitude: null,
  speed: null
}

const App = () => {
  const [value, setValue] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });
  // initial state value based on an external API
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longtitude, speed}, setLocation] = useState(initialLocState)
  let mounted = true;

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
    //APIs
    document.title = `You clicked ${value} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnlineStatus )
    window.addEventListener('offline', handleOfflineStatus);
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)


    // clean up this side effect
    // this part is like componentWillUnmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnlineStatus )
      window.removeEventListener('offline', handleOfflineStatus);
      navigator.geolocation.clearWatch(watchId)
      mounted = false;
    };
  }, [value]);

  const handleGeolocation = (event) => {
    if(mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longtitude: event.coords.longtitude,
        speed: event.coords.speed
      })
    }
  }

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
      <hr/>
      <h3>Geolocation</h3>
      <p>Latitude is: {latitude}</p>
      <p>Longtitude is: {longtitude}</p>
      <p>Speed is: {speed}</p>
    </Fragment>
  );
};
export default App;

/*
Before you move on to some more practical examples with re-act hooks Let's compare our code. Let's take a look at the code that we wrote in our function component with the help of reactor X and what we wrote in our class component.First of all state so in our class component in order to use state we have to create a state object and it has to be an object. And on this object we set the properties that we want to keep track of over and our function component. We didn't have to create state so to speak. We just used it. So we imported used state then for every time we wanted to keep track of the value we initialize you state with the initial value for the state property that we wanted to create. And along with that you state gave us a setter which we not only prefixed with set state has to be an object and a class component but for functional components with use state we can use any javascript type to use numbers booleans objects and will use more types in the future. When it came time to work with an API and we learned that actions such as interacting with an API are known as side effects we use the use of fact hook and with use effect we got virtually all of the functionality that we previously had and a number of different lifecycle methods in our class components. We had the functionality of component did mount component did update as well as component will unmount and in particular for our title example we saw that if we wanted to get the current value of count on component mount and component update all we had to do was provide the logic for updating the time to within the effect function. And it did exactly the same thing that we had in both compounded mount and component did update. So use effect helps us to avoid code duplication and gives us now a better way of grouping things related things in a function that we previously had to separate and different lifecycle methods. And then for our side effects where we set up a listener or a subscription that we have to remove or unsubscribe upon component unmount we have this convenient callback function by default use effect ran after every RE render But once we added this array as the second argument to use affect or effect function only ran on component mount and unmount. And if we found out that any side effects that we had within our effect function were dependent upon a certain value we place that value within the array as a dependency so to speak. And in this way it allowed use effect to function very much like component did update. And when we compare the syntax of a number of these function calls safe for all of our Activant listeners and remove event listeners we don't have to continually reference this for each of our callbacks. All we have to do is once we have created a given function within our component we just reference it by name when working with a function component. We don't have to deal with all the pitfalls that the this keyword introduces since we have to rely on this within a class component. So we never have to worry like we did for our class components about correctly binding a given method to this if we go further down and we look at these functions that we've created say as the callbacks to our listeners let's just take a look at handle mouse move for example in our functional component as compared to our class component with the help of you state and the setters that we get for each piece of state that we create. Our code becomes eminently more readable. So instead of filling these handlers with the number of sets state calls where we have to look at what's being updated in order to determine what a given method does we get for our function component a very particular setter that can be written exactly how we choose with whatever naming convention that we choose and it becomes very clear what's taking place. So for our handle mouse move function we see we're setting the mouse position. There's no second guessing and there's no confusion when it came to updating value being of value in state based on its previous state. We found that we could use the updater form for every sector that we created with use state in a very similar manner to the form that said state gave us. However in stead of returning the entire state the entire previous state as an object where off of it we had to select the relevant property that we wanted to update for the data function that we get in a set or such as set count. We don't get the entire previous state. We just get the previous count itself and improvements like this allow us to make or react code much more succinct. You'll see that in just these two functions between our two components we've saved four lines or so. And again this seems to me much more readable than our code on the right. So already with the use date and use effect hooks we've seen a lot of ways that these new features improve our re-act code and generally make it more succinct. It's important to note that we can use these new hooks these new features and react on entirely opt in basis with the introduction of hooks. Classes aren't being replaced and you can pick and choose as to whether you want to use a class component or a function component that works really just give us more options to work with and more choices and creating our re-act out. So in the next section We'll take a look at a practical example and see some of the flexibility that re-act hooks provide us in particular with the use state hook that we didn't have previously in writing our re-act code.
*/