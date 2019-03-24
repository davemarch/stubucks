import React from 'react';
import './tilecontainer.css';
import Tile from "../tile/tile.js";


const TileContainer = (props) => {
    return (
    <span id="tilecontainer">
    <Tile tiles = {props.tiles[0]}/>
    <Tile tiles = {props.tiles[1]}/>
    <Tile tiles = {props.tiles[2]}/>
    </span>
    )
};


export default TileContainer;