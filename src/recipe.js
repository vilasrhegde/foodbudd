import React from "react";
import style from "./recipe.module.css";

const Recipe =({title,calories,image,ingredients})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <ol>
            <h3>Ingredients:</h3>
                {ingredients.map(ingredients =>(
                 <li>
                     {ingredients.text}
                 </li>
                 ))}
            </ol>   
            <p><b>Calories : </b>{calories}</p>
           
        </div>
    );
};

export default Recipe;