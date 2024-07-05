import React from "react";
import "../styles/Footer.css";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img
            src="/images/logo.png"
            alt="Antarman Logo"
            className="footer-logo"
          />
          <h2 className="footer-heading">Want to speak to us?</h2>
          <div className="btn-container">
            <a className="footer-btn" href="mailto:antarmanmhs@gmail.com">
              Email Us
            </a>
            <a
              className="footer-btn"
              href="https://api.whatsapp.com/send?phone=918979096954&text=Hi, I'd like to know more about taking a consultation."
              target="_blank"
            >
              Chat &nbsp;
              <img src="/images/whatsapp.png" alt="WhatsApp" className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-services">
          <h2 className="footer-heading">Consultation Services for:</h2>
          <ul className="services-list">
            <li>
              <a href="#children">Children</a>
            </li>
            <li>
              <a href="#adolescents">Adolescents</a>
            </li>
            <li>
              <a href="#adults">Adults</a>
            </li>
            <li>
              <a href="#senior-citizens">Senior Citizens</a>
            </li>
            <li>
              <a href="#couples-therapy">Couples Therapy</a>
            </li>
            <li>
              <a href="#family-therapy">Family Therapy</a>
            </li>
            <li>
              <a href="#psychiatrist-consultation">Psychiatrist Consultation</a>
            </li>
            <li>
              <a href="#schools">Schools</a>
            </li>
            <li>
              <a href="#organizations">Organizations</a>
            </li>
          </ul>
        </div>
        <div className="footer-blog">
          <a href="#blog">
            <Button text="Blog" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
