import React from 'react';
import './header.css';
import NavBar from "../navbar/navbar.js";


const Header = (props) => {
    return (
    <header >
        <span id="header">
        {props.heading}
        {props.storeLocator}
        </span>
        <NavBar  logo = {props.logo}/>
    </header>
    )
};


export default Header;