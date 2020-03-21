import React from 'react';
import Hero from '../components/hero';
import {Link} from 'react-router-dom';
import Services from "../components/Homepage/services";
import Featured from "../components/Homepage/featured";


export default function Homepage() { 
    return (
        <div>
           <Hero  title="awesome gadgets" max="true">
               <Link to="/products" className="main-link" style={{ margin: "2rem" }}>products</Link>
            </Hero>  
            <Services/>
            <Featured/> 
        </div>
    )
}
