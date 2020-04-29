import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [results, setResults] = useState([])
  
  useEffect(() => { 
     getResults()
  },[]);

  const getResults = async () => {
    const res = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
    setResults(res.data.hits)
  }
  

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
