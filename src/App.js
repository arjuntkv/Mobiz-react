import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from './pages/Aboutpage';
import Home from './pages/Homepage';
import Contact from './pages/Contactpage';
import Products from './pages/Productspage';
import Singleproduct from './pages/Singleproductpage';
import Error from './pages/Errorpage';

function App() {
  return (
    <div>
      <AboutPage/>
    </div>
  );
}

export default App;
