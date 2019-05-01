import React from "react";
import "./Quotes.css";

const Quotes = props => {
  return (
    <div className="item">
      <p id="text">{props.quote}</p>
      <p id="author">
        <i>-{props.name}</i>
      </p>
    </div>
  );
};

export default Quotes;
