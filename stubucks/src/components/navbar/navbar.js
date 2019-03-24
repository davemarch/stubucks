import React from 'react';
import './navbar.css';


const NavBar = (props) => {
    return (
    <nav id="navbar">
    <img id="logo" src={props.logo.logo}/>        
    </nav>
    )
};


export default NavBar;