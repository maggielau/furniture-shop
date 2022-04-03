import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductDetails from "./ProductDetails";
import About from './About';
import './App.css'
import { ShoppingCart } from "./Icons";


function App() {

  const [totalProducts, setTotalProducts] = useState(0);

  function addProducts (x) {
    setTotalProducts(prevTotalProducts => prevTotalProducts + x);
  }

  return (
    <Router>
      <div>
        <div class="header">
          <Nav />
          <div class="cart">
            <ShoppingCart />
            {totalProducts}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails addProducts={addProducts}/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
