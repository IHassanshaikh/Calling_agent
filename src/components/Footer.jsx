import React from "react";
import "../css/Footer.css";
import logo from "../assets/Exclude.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/in.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* --- Left side --- */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="HumanCall" />
            <span>HumanCall</span>
          </div>
          <p>
            Transforming business communications with intelligent AI calling
            technology.
          </p>
        </div>

        {/* --- Company --- */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Features</li>
            <li>API</li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Status</li>
            <li>Security</li>
          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* --- Follow Us --- */}
        <div className="footer-col follow">
          <h3>Follow Us</h3>
          <p>
            By reaching out to connect with us, you’re taking the first step
            towards unlocking the full potential of your online presence
          </p>
          <div className="footer-icons">
            <a href="#"><img src={fb} alt="facebook" /></a>
            <a href="#"><img src={insta} alt="instagram" /></a>
            <a href="#"><img src={linkedin} alt="linkedin" /></a>
          </div>
        </div>
      </div>

      {/* --- Bottom strip --- */}
      <div className="footer-bottom">
        <p>© 2025 HumanCall. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
