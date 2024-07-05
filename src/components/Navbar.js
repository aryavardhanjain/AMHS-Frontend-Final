import React from "react";
import "../styles/Navbar.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="nav-left">
        <Link to="/">
          <img src="/images/logo.png" alt="Antarman Logo" />
        </Link>
      </div>
      <nav className="nav-middle">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            About <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div className="dropdown-content">
            <Link to="/about/team">Our Founders</Link>
            <a href="#mission">Mission & Vision</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Services <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div className="dropdown-content">
            <a href="#children">Children</a>
            <a href="#adolescents">Adolescents</a>
            <a href="#adults">Adults</a>
            <a href="#seniors">Senior Citizens</a>
            <a href="#family">Family</a>
            <a href="#couples">Couples</a>
            <a href="#consultation">Psychiatrist Consultation</a>
            <a href="#schools">Schools</a>
            <a href="#organizations">Organizations</a>
          </div>
        </div>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
      </nav>
      <div className="nav-right">
        <Button text="Register" className="register-button" />
        <Button text="Login" className="login-button" />
      </div>
    </header>
  );
};

export default Navbar;
