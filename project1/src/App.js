import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
// import Tweet from './Tweet';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log("Effect has run")
  }, [count]);

  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit" />
      </form>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
    </div>
  );
}
export default App;

// Tip:
// Observe console in browser and useEffect output once count is clicked.
// if the second argument that is an array inside the useEffect is empty then the useEffectwill run once.
// and if we put count inside the array then whenever the count is clicked the useEfffect will be executed.  