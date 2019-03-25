import React from 'react';
import './container.css';
import Heading from "../heading/heading.js";



const Container = (props) => {

    return (
    <div>
        <img id="arrow" src={props.arrow} />
        <div 
            id="container" 
            style = {{ backgroundImage: 'url(' + props.background + ')' , backgroundColor: props.icedCoffeeBg}}  >
            <img id="icedCoffee" src={props.icedCoffee} /> 
            <Heading headings = {props.headings} subtitles = {props.subtitles}/>

        </div>
    </div>
    )
};

// 

export default Container;