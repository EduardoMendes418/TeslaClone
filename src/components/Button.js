import React from "react";
import "./Button.css";

const Button = ({ img, text, link }) => {
  return (
    <div className={`button ${(img = "secondary" ? "button_white" : "")}`}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
