import React,{useEffect,useState} from "react";
import logo from './logo.svg';
import Recipe from "./recipe";
import './App.css';

//from chrome
// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   // res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

const App = () =>{


  const APP_ID="2476cbe4";
  const APP_KEY="b19127c8bf8749ab8cc49ad126ccbf6d";
  const[counter,setCounter]=useState(0);

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");

  const [query,setQuery] = useState('recipe');

  useEffect(()=>{
       getRecipes();
       },[query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  };

  return(
    <div className="App">
    <br/>
    <div className="header">
    <center><h1 className="appname">Foodbud</h1></center>
    <h2 className="fh1" onClick={()=>setCounter(counter+1)}>     Hello Foodies! {counter}</h2> 
 
    </div>
   

    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button"
       type="submit"> 
        Search                                               
      </button>
    </form>
    <div className="recipes">
    {recipes.map(recipe=>(
      <Recipe
       key={recipe.recipe.label} 
       title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients} />
    ))}
    </div>
   
    </div> 
  );
 
};

export default App;
