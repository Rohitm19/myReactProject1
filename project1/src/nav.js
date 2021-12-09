import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import './App.css'

const Nav = () => {
 const [movies, setMovies] = useContext(MovieContext);
    return (
        <div >
         <h1>Number of movies: {movies.length}</h1>
        </div>
    );
}
export default Nav;

