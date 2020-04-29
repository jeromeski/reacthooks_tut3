import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [results, setResults] = useState([])
  
  useEffect(() => {
     axios
      .get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(res => {
        console.log(res.data)
        setResults(res.data.hits)
      })
  },[]);

  

  return (
    <>
      <ul>
        {results.map(result => 
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        )}
      </ul>
    </>
  );
};

export default App;
