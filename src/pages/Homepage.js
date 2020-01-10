import React from 'react'
import {Productconsumer} from "../context/Context";

export default function Homepage() { 
    return (
        <div>
            <Productconsumer>
                {value=>{
                    console.log(value);
                    return(
                        <h1>hello from home</h1>
                    )
                }}
            </Productconsumer>
        </div>
    )
}
