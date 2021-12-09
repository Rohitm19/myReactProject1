import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
// import Tweet from './Tweet';
import Recipe from './Recipe'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [querry, setQuerry] = useState('chicken');

  const APP_ID = "ce39fa51";
  const APP_KEY = "7708a1a501f3efc483405be929203c0f";
  const APP_URL = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [querry]);

  const getRecipes = async () => {
    const response = await fetch(APP_URL);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value); //e is the event, which in this case is change, target is the element that triggered the event, which in this case is the input, and value is the value of the input element
  }

  const getSearch = e => {
    e.preventDefault() ///to prevent page refresh
    setQuerry(search);
    setSearch('');
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit"> search </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
export default App;

