import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div id="container">
      <button id="right" style={{ backgroundColor: props.color }} onClick={""}>
        Tweet
      </button>
      <button
        id="left"
        style={{ backgroundColor: props.color }}
        onClick={() => {
          props.onRandomQuote();
        }}
      >
        New Quote
      </button>
    </div>
  );
};

export default Button;
