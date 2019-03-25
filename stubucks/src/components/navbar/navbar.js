import React from 'react';
import './navbar.css';


const NavBar = (props) => {

let menuItems = props.menu.map(function(item, index){
    return <li key={index}>{item}</li>
  })

    return (
    <nav id="navbar">
    <img id="logo" src={props.logo.logo}/>    
    <ul>
    {menuItems}
    </ul>
    </nav>
    )
};


export default NavBar;