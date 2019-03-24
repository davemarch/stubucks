import React from 'react';
import './tile.css';


const Tile = (props) => {
    console.log(props.tiles.img.shopCoffeeImg)
    return (
    <div id="tile">
        <div id="roundImages" style = {{ backgroundImage: 'url(' + props.tiles.img + ')'}}></div>
        <h1>{props.tiles.title}</h1>
        <h4>{props.tiles.subtitle}</h4>

    </div>
    )
};


export default Tile;