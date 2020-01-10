import React, { Component } from 'react';
import {linkdata} from "./Linkdata";

const ProductContext=React.createContext();

//Two components are needed 
//1.Provider
//2.Consumer

class Productprovider extends Component{

    state={
        sidebaropen:false,
        cartopen:false,
        cartitems:10,
        links:linkdata,
    }

    //handle sidebar
    handlesidebar=()=>{
        this.setState({
            sidebaropen:!this.state.sidebaropen,
        });
    }

    //handle Cart
    handlecart=()=>{
        this.setState({
            cartopen:!this.state.cartopen
        });
    }

    //close cart
    closecart=()=>{
        this.setState({
            cartopen:false
        })
    }

    //open cart
    opencart=()=>{
        this.setState({
            cartopen:true 
        })
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handlesidebar:this.handlesidebar,
                handlecart:this.handlecart,
                opencart:this.opencart,
                closecart:this.closecart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const Productconsumer=ProductContext.Consumer;

export {Productprovider,Productconsumer};