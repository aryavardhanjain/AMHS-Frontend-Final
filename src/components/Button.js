import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({ text, onClick, className = "", style, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default Button;
