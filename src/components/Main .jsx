import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";
import Wrapper from "./Wrapper";


const Main = () => {
    const [data, setData] = useState([])
    
    // useEffect(() =>{
    //     const fetchData = async () => {
    //         const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    //         setData(data.meals)
    //     }
    //     fetchData()

    // }, [])

    useEffect(() =>{
        const fetchData = async () => {
            const { data } = await axios({
                method :"get",
                url : "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

            })
            setData(data.meals)

        }
        fetchData()

    }, [])

    return(
        <>
            <Wrapper>
                <SearchBox />
                <SearchList data={data} />
            </Wrapper>

        </>
          
    )
}
export default Main;