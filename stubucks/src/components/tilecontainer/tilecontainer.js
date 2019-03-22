import React from 'react';
import './tilecontainer.css';
import Tile from "../tile/tile.js";


const TileContainer = () => {
    return (
    <span id="tilecontainer">
    <Tile />
    <Tile />
    <Tile />
    </span>
    )
};


export default TileContainer;