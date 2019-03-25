import React from 'react';
import './footer.css';


const Footer = (props) => {
    return (
    <footer id="footer">
        <div className='address'>
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