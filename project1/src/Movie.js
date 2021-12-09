import React from "react";
import MovieList from "./movielist";

const Movie = ({ name, price, id }) => {

    return (
        <div>
            <h1>{name}</h1>
            <p1>{price}</p1>
            <p1>{id}</p1>
        </div>
    )
}

export default Movie;