import React from 'react';
import './tile.css';


const Tile = (props) => {
    return (
    <div id="tile">
        <div id="roundImages" style = {{ backgroundImage: 'url(' + props.tiles.img + ')'}}></div>
        <div id="circletext">
        <h1>{props.tiles.title}</h1>
        <h4>{props.tiles.subtitle}</h4>
        </div>
    </div>
    )
};


export default Tile;