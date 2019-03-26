import React from 'react';
import './navfooter.css';
import Linktile from "../linktile/linktile.js";
import SocialLinktile from "../sociallinktile/sociallinktile.js";



const Navfooter = (props) => {

    // let linkItems = props.menu.map(function(item){
    //     return <li>{}</li>
    //   })

    return (
    <nav id="navfooter">
        <div className = "col-left">
            <div className='helpMenu'>
                <Linktile headings = {props.links.headings[0]} links = {props.links.helpLinks}/>
            </div>
            <div className='aboutMenu'>
                <Linktile headings = {props.links.headings[1]} links = {props.links.aboutLinks}/>
            </div>
        </div>
        <div className = 'col-middle'>
            <Linktile headings = {props.links.headings[2]} links = {props.links.companyLinks}/>
        </div>
        <div className = 'col-social'>
            <SocialLinktile headings = {props.links.headings[3]} links = {props.links.socialLinks}/>
        </div>




    </nav>
    )
};


export default Navfooter;