import React from "react";
import "./footer.css";
import logo from "../../assets/images/GPT-3.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <h1 className="text-gradient">Do you want to step in to the future before others</h1>
        <a href="#">Request Early Access</a>
      </div>
      <div className="footer-content">
        <div className="footer-content_logo">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-content_links">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Overons</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">Counters</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-content_links">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-content_links">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            </li>
            <li>
              <a href="#">085-132567</a>
            </li>
            <li>
              <a href="#">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>
    <p className="footer-copyright">
    © 2021 GPT-3. All rights reserved.
    </p>
    </div>
  );
};

export default Footer;
