import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setprice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setprice(e.target.value);
    }

    const addmovie = (e) => {
        e.preventDefault();
        setMovies((previous) => [...previous, { name: name, price: price }]);
    }

    return (
        <div>
            <form>
                <input type="text" name="name" value={name} onChange={updateName} />    // name and price are js variables hence they are enclosed with curly brackets.
                <input type="text" name="name" value={price} onChange={updatePrice} />
                <button onClick={addmovie}> submit </button>
            </form>
        </div>

    )
}

export default AddMovie;