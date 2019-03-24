import React from 'react';
import './main.css';
import Container from "../container/container.js";
import Span from "../span/span.js";
import TileContainer from "../tilecontainer/tilecontainer.js";
import NavFooter from "../navfooter/navfooter.js";





const Main = (props) => {
 
        return (
    <div id="main">
        <Container 
            background = {props.heroBackground} 
            headings = {props.headings[0]} 
            subtitles = {props.subtitles[0]}/>
        <Span
            spans = {props.spans[0]}/>
        <Container  
            icedCoffee = {props.icedCoffee} 
            icedCoffeeBg = {props.icedCoffeeBg} 
            headings = {props.headings[1]} 
            subtitles = {props.subtitles[1]}/>
        <Span
            spans = {props.spans[1]}/>
        
        <TileContainer
            tiles = {props.tiles}/>
        <NavFooter/>
    </div>
    )
};


export default Main;