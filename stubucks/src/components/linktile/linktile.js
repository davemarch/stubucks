import React from 'react';
import './linktile.css';


const Linktile = (props) => {

    let linkItems = props.links.map(function(item, index){
        return <li key={index}>{item}</li>
      })
    

    return (
    <div id="linktile">
        <h1>{props.headings}</h1>
        <ul>
            {linkItems}
        </ul>
        

    </div>
    )
};


export default Linktile;