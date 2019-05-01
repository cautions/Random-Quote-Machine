import React from "react";

const Button = ({ color, onRandomQuote }) => {
  return (
    <div id="container">
      <button id="right" style={{ backgroundColor: color }} onClick={""}>
        Tweet
      </button>
      <button
        id="left"
        style={{ backgroundColor: color }}
        onClick={() => onRandomQuote()}
      >
        New Quote
      </button>
    </div>
  );
};

export default Button;
