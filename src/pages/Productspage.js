import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/hero';
import productsBcg from '../images/productsBcg.jpeg';
export default function Productspage() {
    return (
        <div>
            <Hero img={productsBcg}/>
            <Products/>
        </div>
    )
}
