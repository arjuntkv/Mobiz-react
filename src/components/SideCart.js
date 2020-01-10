import React from 'react';
import {Productconsumer } from "../context/Context";
import styled from "styled-components";

export default function SideCart() {
    return (
        <Productconsumer>
            {value=>{
                const {cartopen,closecart,cart}=value;
                return(
                    <Cartwrapper show={cartopen} onclick={closecart}>
                        <p>cart items</p>
                    </Cartwrapper>
                )
            }}
        </Productconsumer>    
    )
}

const Cartwrapper=styled.div`
    position:fixed;
    top:60px; 
    right:0;
    width:100%;
    height:100%;
    background:grey;
    z-index:1;
    transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
    border-left:4px solid #5fb7ea;
    transition:all 0.3s ease-in-out;
    @media (min-width:576px){
        width:20rem;
    }
`
