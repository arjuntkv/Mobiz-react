import React from 'react';
import Hero from '../components/hero';
import {Link} from 'react-router-dom';

export default function Homepage() { 
    return (
        <div>
           <Hero  title="awesome gadgets" max="true">
               <Link to="/products" className="main-link" style={{ margin: "2rem" }}>products</Link>
            </Hero>   
        </div>
    )
}
