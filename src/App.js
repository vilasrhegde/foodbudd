import React,{useEffect,useState} from "react";
// import logo from '../public/vilasC1.webp';
import Recipe from "./recipe";
import './App.css';


// from chrome
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

  const [query,setQuery] = useState("");
  const [healthLabels, sethealthLabel] = useState("vegan")

  var url = `https://api.edamam.com/search?&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`;
  // async function getRecipes(){
  //   var result = await Axios.get(url);
  //   console.log(result.data);
  // }
  useEffect(()=>{
       getRecipes();
       },[query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);

  };

  

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log();
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  };

 

  return(
    <div  className="App">
    <br/>
    <div id="pg1"></div>
    <div className="header">
    <center><a href="#pg1"><h1 className="appname">Foo<span>db</span>udd</h1></a></center>
    {/* <h2 className="fh1" onClick={()=>setCounter(counter+1)}>     Hello Foodies! {counter}</h2>  */}
 
    </div>
   

    <form  onSubmit={getSearch} className="search-form">
      <input className="search-bar" placeholder="Find out more..." type="text" value={search} onChange={updateSearch}/>
      <select className="app_healthLabels">
        <option className="dropcontent"   onClick={()=>sethealthLabel("vegan")}>Vegan</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("paleo")}>Paleo</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("low-sugar")}>Low-Sugar</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("dairy-free")}>Dairy-free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("gluten-free")}>Gluten-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("wheat-free")}>Wheat-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("egg-free")}>Egg-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("peanut-free")}>Peanut-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("Tree-nut-free")}>Tree-nut--Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("soy-free")}>Soy-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("fish-free")}>Fish-Free</option>
        <option className="dropcontent"   onClick={()=>sethealthLabel("shellfish-free")}>Shellfish-Free</option>


      </select>
      <button className="search-button"
       type="submit"> 
        🔍                                               
      </button>
     
    </form>
    <div  className="recipes">
    {recipes.map(recipe=>(
      <Recipe
       key={recipe.recipe.label} 
       title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients} 
          healthLabels={recipe.recipe.healthLabels}
          digest={recipe.recipe.digest}
          dishType={recipe.recipe.dishType}
          mealType={recipe.recipe.mealType}
          cautions={recipe.recipe.cautions}
          cuisineType={recipe.recipe.cuisineType}
          // totalDaily={recipe.recipe.totalDaily}
          url={recipe.recipe.url}
          totalNutrients={recipe.recipe.totalNutrients}

         />
    ))}
    </div>
   
    </div> 
  );
 
};

export default App;
