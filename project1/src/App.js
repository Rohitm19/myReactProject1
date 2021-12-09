import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css'
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>    /// use Switch and exact for version 5 and Routes for version 6 of react-router-dom 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;

