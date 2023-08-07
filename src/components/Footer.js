import "./FooterStyles.css";

import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Vadodara.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    +91-91042-76641
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    er.jeelmaheshwari@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is Jeel Maheshwari. A creative and enthusiastic web designer.</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                    <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Footer