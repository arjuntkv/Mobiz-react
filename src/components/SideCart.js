import React from 'react';
import {Productconsumer } from "../context/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideCart() {
    return (
        <Productconsumer>
            {value => {
                const { cartopen, closecart, cart, cartTotal } = value;
                return (
                <CartWrapper show={cartopen} onClick={closecart}>
                    <ul>
                    {cart.map(item => {
                        return (
                        <li key={item.id} className="cart-item mb-4">
                            <img
                            width="35"
                            src={`../${item.image}`}
                            // src={item.image}
                            alt="cart item"
                            />
                            <div className="mt-3">
                            <h6 className="text-uppercase">{item.title}</h6>
                            <h6 className="text-title text-capitalize">
                                amount : {item.count}
                            </h6>
                            </div>
                        </li>
                        );
                    })}
                    </ul>
                    <h4 className="text-capitalize text-main mt-4">
                    cart total : ₹{cartTotal}
                    </h4>
                    <div className="text-center my-5">
                    <Link to="/cart" className="main-link">
                        cart page
                    </Link>
                    </div>
                </CartWrapper>
                );
            }}
        </Productconsumer>    
    )
}

const CartWrapper=styled.div`
    position:fixed;
    top:60px; 
    right:0;
    width:100%;
    height:100%;
    background:var(--mainGrey);
    z-index:1;
    transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
    border-left:4px solid #5fb7ea;
    transition:all 0.3s ease-in-out;
    @media (min-width:576px){
        width:20rem;
    }
    overflow: scroll;
    padding: 2rem;
    ul {
        padding: 0 !important;
    }
    .cart-item {
        list-style-type: none;
    }
`
