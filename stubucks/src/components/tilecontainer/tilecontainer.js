import React from 'react';
import './tilecontainer.css';
import Tile from "../tile/tile.js";


const TileContainer = (props) => {
    return (
    <div>
    <img id="arrow" src={props.arrow} />
    <span id="tilecontainer">
    <Tile tiles = {props.tiles[0]}/>
    <div className="mob-line"></div>
    <Tile tiles = {props.tiles[1]}/>
    <div className="mob-line"></div>
    <Tile tiles = {props.tiles[2]}/>
    </span>
    </div>
    )
};


export default TileContainer;