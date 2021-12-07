import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import Tweet from './Tweet';
import './App.css'

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {/* <Tweet name = "Rohit" message = "My react app"/>
      <Tweet name = "Rohit" message = "My react app"/>
      <Tweet name = "Rohit" message = "My react app"/>
      <Tweet name = "Rohit" message = "My react app"/> */}
      <h1 className= {isRed ? 'red' : ""}> Change my color! </h1> 
      <button onclick={() => {increment();}}>Click here</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
