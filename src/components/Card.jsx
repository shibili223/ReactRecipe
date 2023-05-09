import React from "react";

const Card = ({ item: { strMealThumb, strCategory, strMeal }}) => {
    console.log(strCategory)

    return(
        
        <div className="card">
            <img src={ strMealThumb }  alt="Image" />
            <h2> { strCategory } </h2>
            <h3> { strMeal } </h3>

        </div>
    )

}
export default Card;

 