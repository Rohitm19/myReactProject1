import React from 'react';
//import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import './App.css'

function App() {
  return (
    <div className="app">
      <Tweet name="Rohit" message="HelloReact" />
      <Tweet name="Jon Snow" message="I am the true king!!!" />
      <Tweet name="CR7" message="SIUUUUUUUU!!!" />
    </div>
  );
}
export default App;
