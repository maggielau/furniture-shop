import React, { useState, useEffect } from 'react';
import { MinusSquare, PlusSquare, Delete } from './Icons';


const buttonAlert = () => {
    alert ("Sorry, this is a demo site. Thanks for visiting!");
}


export default function Cart ({cart, delProducts, addProducts}) {


    function displayCart () {

        if (Object.keys(cart).length === 0) {
            return (<h2>Cart is empty</h2>);
        }
        else {
            return (cart.map(product => 
                        <div className="cart-row" key={product._id}>
                            <img src={"https://calm-mountain-38765.herokuapp.com" + product.image} width="50px"/>
                            <p>{product.title}</p>
                            <div className="product-price">${parseFloat(product.price).toFixed(2)}</div>
                            <div className="qty">
                                <div className="qtyButton" onClick={() => delProducts(1, product._id)}>
                                    <MinusSquare />
                                </div>
                                {product.qty}
                                <div className="qtyButton" onClick={() => addProducts(1, product)}>
                                    <PlusSquare />
                                </div>
                            </div>
                            <div className="qtyButton" onClick={() => delProducts(product.qty, product._id)}>
                                <Delete />
                            </div>
                        </div>
                    )
                );
        }
    }

    function displayTotal () {
        let total = 0;
        cart.map(product =>
            total += product.price * product.qty);
        return parseFloat(total).toFixed(2);

    }

    
    return (
        <div className="cart-display">
            {displayCart()}
            <h3>Total: ${displayTotal()}</h3>
            <button onClick={buttonAlert}>Check Out</button>
        </div>
    );

}