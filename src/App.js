import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from './pages/Aboutpage';
import Home from './pages/Homepage';
import Contact from './pages/Contactpage';
import Cart from "./pages/Cartpage";
import Products from './pages/Productspage';
import Singleproduct from './pages/Singleproductpage';
import Error from './pages/Errorpage';

import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/SideCart";

class  App extends Component {
  render(){
    return (
    <div>

     <Router>

      <Navbar/>
      <Sidebar/>
      <Sidecart/>

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={AboutPage}/>
          <Route path="/contacts"  component={Contact}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/products/:id" exact component={Singleproduct}/>
          <Route component={Error}/>
      </Switch>

      <Footer/>
    
      </Router>

      
    </div>
  );
}
}

export default App;
