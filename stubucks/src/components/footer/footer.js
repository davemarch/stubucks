import React from 'react';
import './footer.css';


const Footer = (props) => {
    return (
    <footer id="footer">
        <p>{props.footer.address}</p>
        <p>{props.footer.links}</p>
        <p>{props.footer.trademark}</p>


        
    </footer>
    )
};


export default Footer;