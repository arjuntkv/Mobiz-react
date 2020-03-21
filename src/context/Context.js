import React, { Component } from 'react';
import {linkdata} from "./Linkdata";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext=React.createContext();

//Two components are needed 
//1.Provider
//2.Consumer

class Productprovider extends Component{

    state={
        sidebaropen:false,
        cartopen:false,
        links:linkdata,
        socialIcons: socialData,   
        cart:[],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        carTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    }

    componentDidMount() {
        //from contentful items
    
        this.setProducts(items);
      }
    
      //set products
      setProducts = products => {
        let storeProducts = products.map(item => {
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url;
          const product = { id, ...item.fields, image };
          return product;
        });

        //  featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({
          storeProducts,
          filteredProducts: storeProducts,
          featuredProducts,
          cart: this.getStorageCart(),
          singleProduct: this.getStorageProduct(),
          loading: false
        },() => {
          this.addTotals();
        }
        ); 

      };


      // get cart from local storage=>getting cart data from local storage
      getStorageCart = () => {
        let cart;
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        } else {
          cart = [];
        }
        return cart;
      };

      // get product from local storage
      getStorageProduct = () => {
        return {};
      };

      // get totals
      getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
          subTotal += item.total;
          cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
          cartItems,
          subTotal,
          tax,
          total
        };
      };

      //add totals
      addTotals = () => {
        const totals = this.getTotals();
        this.setState({
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        });
      };

      // sync storage=>Adding cart data to local storage('cart')
      syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      };

      //add to cart
      addToCart = id => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
          tempItem = tempProducts.find(item => item.id === id);
          let total = tempItem.price;
          let cartItem = { ...tempItem, count: 1, total };
          tempCart = [...tempCart, cartItem];
        } else {
          tempItem.count++;
          tempItem.total = tempItem.price * tempItem.count;
          tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(
          () => {
            return { cart: tempCart };
          },
          () => {
            this.addTotals();
            this.syncStorage();
            this.opencart();
          }
        );
      };

      // set single product
      setSingleProduct = id => {
        console.log(`set single product ${id}`);
      };
    





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
                closecart:this.closecart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const Productconsumer=ProductContext.Consumer;

export {Productprovider,Productconsumer};