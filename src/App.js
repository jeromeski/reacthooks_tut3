import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('reacthooks')
  
  useEffect(() => { 
     getResults()
  },[query]);

  const getResults = async () => {
    const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    setResults(res.data.hits)
  }
  

  return (
    <>
      <div>
      <input type='text' onChange={(evt) => setQuery(evt.target.value)}></input>
      <ul>
        {results.map(result => 
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        )}
      </ul>
      </div>
    </>
  );
};

export default App;
