import React from 'react';
import Info from "../components/info_aboutpage";
import Hero from "../components/hero";
import aboutBcg from "../images/aboutBcg.jpeg";

function AboutPage(){
    return(
        <>
            <Hero img={aboutBcg}/>
            <Info/>
        </>
    ); 
}

export default AboutPage;