import React from "react";
import style from "./recipe.module.css";


// digest,cuisineType,mealType,cautions
const Recipe =({title,calories,image,ingredients,healthLabels,cautions,dishType,mealType,digest,cuisineType,totalDaily,url,totalNutrients})=>{
    return (
        image.match(/\.(jpeg|jpg|gif|png)$/)

       !=null&&( <div className={style.recipe} onClick={url} >
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="image" />
            <ol>
            <h3>How to make?</h3>
                {ingredients.map(ingredients =>(
                 <li>
                     {ingredients.text}
                 </li>
                 ))}
            </ol>   
            <div className="details">
            <p><b>Calories : </b>{calories}</p>
            <p><b>Cautions: </b>{cautions}</p> 
            <p><b>Dish Type: </b>{dishType}</p>
            <p><b>Meal type: </b>{mealType}</p> 
            <p><b>Cuisine type: </b>{cuisineType}</p>
            </div>
            <button className="knowmore">
            <a href={url} target="_blank">Know more</a>
            </button>
            {/* <p><b>Total Nutrients: </b>{totalNutrients}</p> */}
            {/* <p><b>Total Daily: </b>{totalDaily}</p> */}
            
            {/* <p className="health"><b>Health label :</b>{healthLabels} </p> */}
            {/* <p><b>Digest: </b>{digest}</p> */}
           
            
           
        </div>
       )
    );
};

export default Recipe;