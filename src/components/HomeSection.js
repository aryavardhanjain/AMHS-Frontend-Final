import React from "react";
import Button from "./Button";
import "../styles/Home.css";

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="content-container">
        <div className="text-section">
          <h2 className="welcome">
            Welcome to <span className="amhs">AMHS</span> !
          </h2>
          <p>
            Thank you for showing the courage to take a step towards yourself.
            Our team is here with you to help you explore your journey towards a
            better state of mental health.
            <br />
            <br />
            Would you like to know more about us?
          </p>
          <div className="button-group">
            <Button text="Yes, I'd like to know more!" />
            <Button
              href="https://api.whatsapp.com/send?phone=918979096954&text=Hi, I'd like to know more about taking a consultation."
              text="Connect with a therapist"
            />
          </div>
        </div>
        <div className="image-section">
          <div className="phone-container">
            <img
              src="/images/counselling.jpg"
              alt="Counselling"
              className="counselling-img"
            />
            <img src="/images/1976104.svg" alt="Phone" className="phone-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
