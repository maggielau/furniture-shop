import { Link } from 'react-router-dom';
import React from "react";

export default function Nav() {

    return (
        <nav>
            <div className="logo-container">
                <img src='/images/logo.svg' />
                <h1>Furnico</h1>
            </div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    );

}