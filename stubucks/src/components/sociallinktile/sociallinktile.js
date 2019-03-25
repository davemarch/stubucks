import React from 'react';
import './sociallinktile.css';


const SocialLinktile = (props) => {

    let linkItems = props.links.map(function(item, index){
        return <li key={index}>{item}</li>
      })
    

    return (
    <div id="sociallinktile">
        <h1>{props.headings}</h1>
        <ul>
            {linkItems}
        </ul>
        

    </div>
    )
};


export default SocialLinktile;