import React from "react";

const Quotes = ({ quote, name }) => {
  return (
    <div className="item">
      <p id="text">{quote}</p>
      <p id="author">
        <i>-{name}</i>
      </p>
    </div>
  );
};

export default Quotes;
