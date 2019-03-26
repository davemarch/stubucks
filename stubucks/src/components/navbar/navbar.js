import React from 'react';
import './navbar.css';


const NavBar = (props) => {

let menuItems = props.menu.map(function(item, index){
    return <li key={index}>{item}</li>
  });


    return (
    <nav id="navbar" className='navbar test'>
    <img id="logo" src={props.logo.logo}/> 
    <button className="burgerIcon" onClick={function(e){e.currentTarget.parentElement.classList.toggle('active');}}><span className="line"></span></button>   
    <ul>
    {menuItems}
    </ul>
    </nav>
    )
};


export default NavBar;