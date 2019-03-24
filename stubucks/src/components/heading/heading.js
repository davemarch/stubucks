import React from 'react';
import './heading.css';


const Heading = (props) => {

    return (
    <div id="heading">
        {props.headings}
        {props.subtitles}
    </div>
    )
};


export default Heading;