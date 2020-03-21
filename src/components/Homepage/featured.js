import React, { Component } from 'react'
import Product from '../Product';
import { Link } from "react-router-dom";
import Title from "../title";
import { Productconsumer } from "../../context/Context";


export default class featured extends Component {
    render() {
        return (
            <section className="py-5">
                <div className="container">
                
                    {/* title */}
                    <Title title="featured products" center="true" />

                    {/* products */}
                    <div className="row my-5">
                        <Productconsumer>
                            {value => {
                            const {featuredProducts} = value;
                            return featuredProducts.map(product => (<Product key={product.id} product={product} />));
                            }}
                        </Productconsumer>
                    </div>

                    {/* Our products link=>to direct to Products page     */}
                    <div className="row mt-5">
                        <div className="col text-center">
                            <Link to="/products" className="main-link">
                            our products
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
