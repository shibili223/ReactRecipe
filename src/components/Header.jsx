import Wrapper from "./Wrapper";
import React from "react";
import logo from "../assets/logo.jpg"

const Header = () =>{
    return(
        <div>
            <header>
                <Wrapper>
                    <div className="logo">
                        <img src="../src/assets/logo.jpg" alt="Logo"/>
                    </div>
                   

                </Wrapper>
            </header>
        </div>
         
     
    )
}
export default Header;
