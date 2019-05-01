import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./Components/QuoteBox";
//import Stack from "./Components/Stack/Stack";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
