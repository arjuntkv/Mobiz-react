import React from 'react';
import {FaBars, FaCartPlus} from "react-icons/fa";
import styled from "styled-components";
import {Productconsumer} from "../context/Context";
import logo from '../images/logo.svg'; 
export default function Navbar() {
    return (
       <Productconsumer>
           {value=>{

               const{cartItems,handlesidebar,handlecart}=value 

               return(
                   <Navwrapper>
                     <div className="nav-center">
                        <FaBars className="nav-icon" onClick={handlesidebar}/>
                        <img src={logo} alt="mobiz-logo"/>

                        <div className="nav-cart">
                            <FaCartPlus className="nav-icon" onClick={handlecart}/>
                            <div className="cart-items">{cartItems}</div>
                        </div>

                     </div>
                   </Navwrapper>
               )
           }}
       </Productconsumer>
    )
}


//styling using styled-components
const Navwrapper=styled.nav`
    position:-webkit-sticky;
    position:sticky;
    top:0;
    width:100%;
    padding: 1rem 1.5rem;
    background:#fafafa;  /*light grey*/
    border-bottom:3px solid #5f5e5e /*dark grey*/;
    z-index:1;
    
    .nav-center{
        display:flex;
        align-items:center; /*align items vertically*/
        justify-content:space-between;  /*align items horizontally*/
        max-width:1170px;
        margin:0 auto;
    }

    .nav-icon{
        font-size:1.5rem;
        cursor:pointer;
    }

    .nav-cart{
        position:relative;
    }

    .cart-items{
        position:absolute;
        top:-8px;
        font-size:0.85rem;
        background:#5fb7ea /*blue colour primary color*/;
        color:white;
        right:-10px;
        padding:0 5px;
        border-radius:70%;

    }

`
