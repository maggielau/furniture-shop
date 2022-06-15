import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export default function Products() {

    useEffect(() => {
        fetchProducts();
        fetchCategories();      
    }, []);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryView, setCategoryView] = useState('all');
    const [isLoading, setLoading] = useState(true);

    function fetchProducts() {
        fetch("https://calm-mountain-38765.herokuapp.com/catalog/products-api").then((res)=>res.json()).then((json) => {
            setProducts(json);
            setLoading(false);
        })
        .catch(error => {
            console.log("Fetch API Error:" + error);
        });
    }

    function fetchCategories() {
        fetch("https://calm-mountain-38765.herokuapp.com/catalog/categories-api").then((res)=>res.json()).then((json) => {
            setCategories(json);
        })
        .catch(error => {
            console.log("Fetch API Error:" + error);
        });
    }

    function renderProductCard(product) {
        return (
        <div className="product-card" key={product._id}>
            <Link state={{data: product}} to={`/products/${product._id}`}>
                <div className="product-link">
                    <img src={"https://calm-mountain-38765.herokuapp.com"+product.image} width="100px"/>
                    <p className="product-title">{product.title}</p>
                </div>
            </Link>
            <div className="product-price">${parseFloat(product.price).toFixed(2)}</div>
        </div>
        )
    }

    function showLoadSpinner () {
        if (isLoading)
            return (<div id="spinner"></div>);
        else
            return;
    }

    return (
        <div className="products-container">
            <h2>Our Products</h2>

            <div className="categories-nav">
                <ul>
                    <li onClick={() => setCategoryView('all')}>All</li>
                    {categories.map(category => (
                        <li onClick={() => setCategoryView(category.name)}>{category.name}</li>
                    ))}
                </ul>
            </div>

            
            <div className="products-display">
                {showLoadSpinner()}
                {products.map(product => {
                    if (categoryView === 'all') {
                        return (renderProductCard(product))
                    }
                    //filter products displayed by category selection
                    else if (product.category.some(category => category.name === categoryView)) {
                        return (renderProductCard(product))
                    }

                })}
            </div>

        </div>
    );
}