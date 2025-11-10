import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Nav.css";
import logo from "../assets/logo.png";
import subtract from "../assets/Subtract.png";
import hamburger from "../assets/hamburger.svg";
import subtract2 from "../assets/Subtract-mob.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isStartPage = location.pathname === "/start";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${isStartPage ? "navbar--glass" : ""}`}>
      {!isStartPage && (
        <>
          <img className="bg-design1" src={subtract} alt="subtract" />
          <img className="bg-design-mob" src={subtract2} alt="subtract" />
        </>
      )}


      {/* ===== Left Side (Logo + Start Button in Mobile) ===== */}
      <div className="nav-left">
        <div className="logo-section">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Start button visible only on mobile */}
        <Link to="/start" className="start-btn mobile-btn">
          Start Now
        </Link>
      </div>

      {/* ===== Right Side ===== */}
      <div className="nav-right">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        {/* Desktop Start Button */}
        <Link to="/start" className="start-btn desktop-btn">Start Now</Link>

        {/* Hamburger Icon */}
        <img
          src={hamburger}
          alt="menu"
          className="hamburger"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}
