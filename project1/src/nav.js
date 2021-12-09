import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

const Nav = () => {

    const setStyle = {
        color: 'white'
    };
//The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. 

    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to="/about" style = {setStyle}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style = {setStyle}>
                <li>Shop</li>
            </Link>
        </ul>
        </nav >

    );
}
export default Nav;

