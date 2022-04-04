import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import data from './products.json';


export default function Products() {

    useEffect(() => {
        fetchProducts();      
    }, []);

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        setProducts(data);
    }

    return (
        <div className="products-container">
            <h2>Products</h2>
            <div className="products-display">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                    <Link state={{data: product}} to={`/products/${product.id}`}>
                        <div className="product-link">
                            <img src={product.image} width="100px"/>
                            <p className="product-title">{product.title}</p>
                        </div>
                    </Link>
                    <div className="product-price">${parseFloat(product.price).toFixed(2)}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}