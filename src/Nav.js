import { Link } from 'react-router-dom';
import React from "react";


const closeNav = () => {
    document.getElementById("mobile-nav").style.height = "0%";
}

export default function Nav() {

    return (
        <nav>
            <div className="logo-container">
                <Link to="/"><img src='/images/logo.svg' /></Link>
                <h1>Furnico</h1>
            </div>
            <ul className="top-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>

            {/* Mobile navigation overlay menu */}
            <div className="overlay-nav" id="mobile-nav">
                <span className="close-btn" onClick={closeNav}>&times;</span>

                <div className="overlay-links">
                <Link to="/" onClick={closeNav}>Home</Link>
                <Link to="/products" onClick={closeNav}>Products</Link>
                <Link to="/about" onClick={closeNav}>About</Link>
                </div>

            </div>


        </nav>
    );

}