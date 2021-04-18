import React from 'react';
import './Footer.css'
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "American" , link: "//google.com/map"},
        {name: "Bakery & Cake" , link: "//google.com/map"},
        {name: "Burger" , link: "//google.com/map"},
        {name: "Burger" , link: "//google.com/map"},
        {name: "Dessert" , link: "//google.com/map"},
    ]
    const ourAddress = [
        {name: "Takeout-Banani, Pizza Guy, Shawarma Street , Coffeelicious Coffee-Baily Road, Time Out." , link: "//google.com/map"},
        {name: "Shawarma Street" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Healthy food" , link: "//google.com/map"},
        {name: "Mexican" , link: "//google.com/map"},
        {name: "Fast food" , link: "//google.com/map"},
        {name: "Mexican" , link: "//google.com/map"},
        {name: "Healthy food" , link: "//google.com/map"},
        {name: "Seafood" , link: "//google.com/map"},
        {name: "Fast food" , link:"//google.com/map"}
    ]
    const services = [
        {name: "Mexican" , link:"//google.com/map"},
        {name: "Healthy food" , link: "/checkup"},
        {name: "Fast food" , link: "//google.com/map"},
        {name: "Healthy food" , link:"//google.com/map"},
        {name: "Mexican" , link: "//google.com/map"},
        {name: "Fast food" , link: "//google.com/map"},
        {name: "Healthy food" , link: "//google.com/map"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Popular Cuisines"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="..." menuItems={services}/>
                    <FooterCol key={3} menuTitle="..." menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+01825550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;