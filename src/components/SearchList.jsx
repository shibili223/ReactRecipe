import React from "react";
import Card from "./Card";

const SearchList = ({data}) => {

    return(
        <div className="card-wrapper" style={{backgroundColor:"#ffff" }}>
       {  data.map((item) => {
        return(

            <Card item={item} key={item.idMeal} />
        )

         })}
        </div>

    )
}
export default SearchList