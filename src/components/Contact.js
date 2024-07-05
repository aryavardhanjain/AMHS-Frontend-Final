import React, { useState } from "react";
import "../styles/Contact.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission", formData);
    setFormData({
      name: "",
      email: "",
      content: "",
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="details">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div className="topic">Phone</div>
            <div className="text-one">+91 85859 76967</div>
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <div className="topic">Whatsapp</div>
            <div className="text-one">+91 89790 96954</div>
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="topic">Email</div>
            <div className="text-one">megha.jain2202@gmail.com</div>
            <div className="text-two">antarmanmhs@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any issue or queries related to this website, you can
            send us a message. It's our pleasure to help you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="input-box message-box">
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your message"
                rows="5"
              ></textarea>
            </div>
            <Button text="Send Now" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
