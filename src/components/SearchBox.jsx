import React, { useState } from "react";
import Card from "./Card";
const SearchBox = ({setSearchInput, searchInput}) =>{
    // console.log(data)

    return(
        <div>
            <div className="SearchBox">
                <input type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search here..." value={searchInput} 
                />
             </div>

        
           
        </div>
    )
}
export default SearchBox;