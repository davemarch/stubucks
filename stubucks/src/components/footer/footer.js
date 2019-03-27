import React from 'react';
import './footer.css';


const Footer = (props) => {
    console.log(props.footer.map);
    return (
    <footer id="footer">
        <div className='address'>
            <img id='mapicon' src={props.footer.map}></img>
            {props.footer.address}
        </div>
        <div className = "footerWrapper">
            <p>{props.footer.links}</p>
            <p>{props.footer.trademark}</p>
        </div>


        
    </footer>
    )
};


export default Footer;