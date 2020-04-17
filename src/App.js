import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "c9c5311d";
  const APP_KEY = "6b827db324b96cbf534cda1763fb6a6c";
  let URL = sessionStorage.getItem("URL");

  const [recipes, setRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState(sessionStorage.getItem("searchBar"));
  const [search, setSearch] = useState("");
  const [t, setT] = useState("");
  
  let rolodex = parseInt((sessionStorage.getItem('rolodex') === null) ? "0" : sessionStorage.getItem('rolodex'));
  
  const setRolodex = (e) => {
    rolodex = e;
    sessionStorage.setItem('rolodex', rolodex);
  };

  const setURL = (e) => {
    URL = (`https://api.edamam.com/search?q=`+e+`&app_id=${APP_ID}&app_key=${APP_KEY}`);
    sessionStorage.setItem("URL", URL);
    rolodex = 0;
  }

  useEffect( () => {
    console.log('rolodex:' + rolodex);
    if ( new String(sessionStorage.getItem('prevURL')).valueOf() == new String(sessionStorage.getItem('URL')).valueOf()) {
      setRecipes((sessionStorage.getItem('recipes') === null) ? recipes : JSON.parse(sessionStorage.getItem('recipes')));
    } else {
      getRecipes();
    }
  }, [search, rolodex]);

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    sessionStorage.setItem('recipes', JSON.stringify(data.hits));
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearchBar = (e) => {
    setSearchBar(e.target.value);
  };
  
  const performSearch = () => {
    sessionStorage.setItem("searchBar", searchBar);
    sessionStorage.setItem('rolodex','0');
    sessionStorage.setItem("prevURL", URL);
    setURL(searchBar);
    setSearch(searchBar);
  };

  const increaseIndex = () => {
    let e = 1;
    if (rolodex === null){
      sessionStorage.setItem('rolodex', 0);
      setRolodex(0);
    }
    if ((rolodex + e) <= (recipes.length - 1)) {
      sessionStorage.setItem('rolodex', (rolodex + e));
      setRolodex(parseInt(rolodex) + e);
      setT(rolodex);
    }
  };

  const decreaseIndex = () => {
    let e = -1;
    if (rolodex === null){
      sessionStorage.setItem('rolodex', 0);
      setRolodex(0);
    }
    if ((rolodex + e) >= 0) {
      sessionStorage.setItem('rolodex', (rolodex + e));
      setRolodex(parseInt(rolodex) + e);
      setT(rolodex);
    }
  };

  return (
    <div className="App">
     <form className="search-form">
       <input 
       className="search-bar" 
       type="text" 
       value={searchBar} 
       onChange={updateSearchBar}
       />
       <button className="search-button" type="submit" onClick={performSearch}>Search</button>
     </form>
     <div class="container">
     <div className={recipes}>
     <button className="change-button" onClick={decreaseIndex}>Back</button>
     <div class="spaced"></div>
     {recipes.filter((recipe, index) => index === rolodex).map((recipe) => (
        <Recipe
       key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       link={recipe.recipe.url}
       />
       ))}
       <div class="spaced"></div>
       <button className="change-button" onClick={increaseIndex}>Next</button>
     </div>
     </div>
    </div>
  );
}

export default App;