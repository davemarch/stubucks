import React from 'react';
import './button.css';


const Button = () => {
    return (
    <div id="button">
        <button className="orderButton"><p id="orderTextDesktop">Choose your Coffee</p><p id="orderTextMobile">Order</p></button>
    </div>
    )
};


export default Button;