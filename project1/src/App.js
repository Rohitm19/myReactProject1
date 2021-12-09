import React, { } from 'react';
import { MovieProvider } from './MovieContext';
import movieList from './movielist';
import AddMovie from './AddMovie';
import './App.css'
import Nav from './nav';
import MovieList from './movielist';

function App() {
 
  return (
    <MovieProvider>
      <div className="app">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
export default App;

