import React from 'react';
import './linktile.css';


const Linktile = (props) => {

    let linkItems = props.links.map(function(item, index){
        return <li key={index}>{item}</li>
      })
    

    return (
    <div id="linktile" className="linktile">
        <button onClick={function(e){e.currentTarget.parentElement.classList.toggle('active');}}><h1>{props.headings}</h1><div id="chevron-arrow-left"/></button>
        
        <ul>
            {linkItems}
        </ul>
        <div className="mob-line"> </div>
        

    </div>
    )
};


export default Linktile;