import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature">
      <div className="gpt3__feature-heading">
        <div className="gpt3__feature-line"></div>
        <h4 className="gpt3__feature-title">{title}</h4>
      </div>
      <div className="gpt3__feature-text">{text ? <p>{text}</p> : ""}</div>
    </div>
  );
};

export default Feature;
