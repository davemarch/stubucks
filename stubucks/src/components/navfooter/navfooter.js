import React from 'react';
import './navfooter.css';
import Linktile from "../linktile/linktile.js";


const Navfooter = (props) => {

    // let linkItems = props.menu.map(function(item){
    //     return <li>{}</li>
    //   })

    return (
    <nav id="navfooter">
        <h1>Nav Footer</h1>
        <Linktile headings = {props.links.headings[0]} links = {props.links.helpLinks}/>
        <Linktile headings = {props.links.headings[1]} links = {props.links.aboutLinks}/>
        <Linktile headings = {props.links.headings[2]} links = {props.links.companyLinks}/>
        <Linktile headings = {props.links.headings[3]} links = {props.links.socialLinks}/>




    </nav>
    )
};


export default Navfooter;