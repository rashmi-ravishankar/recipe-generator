import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, link}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p><b>Ingredients:</b></p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p><b>Calories: </b>{Math.round(calories)}</p>
            <p>For more details click <a href={link}>here</a>!</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;