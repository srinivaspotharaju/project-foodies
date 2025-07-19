import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Foodies is your gateway to exceptional dining, delivering luxury meals with a personal touch. Where every bite tells a story of flavor, freshness, and finesse.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>8520050490</li>
                    <li>contact@Foodies.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 @Foodies.com -All Right Reserved.
        </p>
    </div>
  )
}

export default Footer