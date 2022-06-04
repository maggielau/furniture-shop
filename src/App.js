import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductDetails from "./ProductDetails";
import About from './About';
import Cart from './Cart';
import './App.css'
import { ShoppingCart } from "./Icons";
import { Link } from 'react-router-dom';



function App() {

  const [totalProducts, setTotalProducts] = useState(0);
  const [cart, setCart] = useState([]);

  function addProducts (x, data) {
    setTotalProducts(prevTotalProducts => prevTotalProducts + x);
    console.log(data);
    console.log(data._id)

    //if this product already exists in the cart, add to quantity
    if (cart.filter(x => x._id === data._id).length>0) {
      let index = cart.findIndex(object => {
        return object._id === data._id;
      });
      let newCart = [...cart];
      newCart[index].qty += x;
      setCart([...newCart]);

    }
    //otherwise add the product id, price, and qty to cart
    else {
      let object = {};
      object["_id"] = data._id;
      object["title"] = data.title;
      object["image"] = data.image;
      object["price"] = data.price;
      object["qty"] = x;
      setCart(prevCart => [...prevCart, object]);
    }
  }

  function delProducts (x, _id) {
    setTotalProducts(prevTotalProducts => prevTotalProducts - x);

    let index = cart.findIndex(object => {
      return object._id === _id;
    });

    let newCart = [...cart];

    //completely remove product from cart
    if (cart[index].qty === x) {
      newCart.splice(index, 1);
    }
    //otherwise decrement qty by x
    else {
      newCart[index].qty -= x;
    }
    setCart([...newCart]);
  }

  return (
    <Router>
      <div>
        <div className="header">
          <Nav />
          <div className="cart">
            <Link to="/cart"><ShoppingCart /></Link>
            {totalProducts}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails addProducts={addProducts}/>} />
          <Route path="/cart" element={<Cart cart={cart} delProducts={delProducts} addProducts={addProducts}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
