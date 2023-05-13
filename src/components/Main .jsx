import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";
import Wrapper from "./Wrapper";


const Main = () => {
    const [data, setData] = useState([])
    
    const [searchInput, setSearchInput] = useState('a')


    useEffect(() =>{
        const fetchData = async () => {
            const { data } = await axios({
                method :"get",
                url : "https://www.themealdb.com/api/json/v1/1/search.php?f=" + searchInput

            })
            setData(data.meals)

        }
        fetchData()

    }, [searchInput])
    const filteredData = data?.filter?.(x => {
        // console.log(x)

        if(!searchInput) {
            return true
        }

        return x.strMeal?.toLowerCase().includes(searchInput?.toLowerCase())
    } ) ?? [];


    return(
        <>
            <Wrapper>
                <SearchBox setSearchInput={setSearchInput} searchInput={searchInput} />
            </Wrapper>
            <SearchList data={data || []} />


        </>
          
    )
}
export default Main;