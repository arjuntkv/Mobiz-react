import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Productconsumer} from '../context/Context';


export default function Sidebar() {
    return (
        <Productconsumer>
            {value=>{
                const {links,sidebaropen,handlesidebar}=value;
                return(
                    <Sidewrapper show={sidebaropen}>
                        <ul>
                           {links.map(link=>{
                               return(
                                   <li key={link.id}>
                                       <Link to={link.path} className="sidebar-link" onClick={handlesidebar}>{link.text}</Link>
                                   </li>
                               )
                           })}
                        </ul>
                    </Sidewrapper>
                )
            }}
        </Productconsumer>
    )
}


const Sidewrapper =styled.nav`
    position:fixed;
    top:60px;
    left:0;
    width:100%;
    height:100%;
    background:beige;
    z-index:1;
    border-right:4px solid #5fb7ea;
    transition:all 0.3s ease-in-out;
transform:${props=>(props.show?'translatex(0)':'translateX(-100%)')};
    ul{
        list-style-type:none;
        padding:0 !important;
    }

    .sidebar-link{
        display:block;
        font-size:1.5rem;
        text-transform:capitalize;
        color:#222;
        padding:0.5rem 1.5rem;
        background:transparent;
        transition:all 0.3s ease-in-out;
    }

    .sidebar-link:hover{
        background:#5fb7ea;
        color:white;
        padding:0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration:none;
    }

    @media (min-width:576px){
        width:20rem;
    }
`