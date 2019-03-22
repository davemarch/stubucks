import React from 'react';
import './main.css';
import Container from "../container/container.js";
import Span from "../span/span.js";
import TileContainer from "../tilecontainer/tilecontainer.js";
import NavFooter from "../navfooter/navfooter.js";




const Main = () => {
    return (
    <div id="main">
        <h1>main</h1>
        <Container/>
        <Span/>
        <Container/>
        <Span/>
        <TileContainer/>
        <NavFooter/>
    </div>
    )
};


export default Main;