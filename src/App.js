import React from 'react';
import AppFunction from './AppFunction';
import AppClass from './AppClass';

const App = () => {
  return(
    <div>
      <AppClass/>
      <hr/>
      {<AppFunction/>}
    </div>
  )
};

export default App;
