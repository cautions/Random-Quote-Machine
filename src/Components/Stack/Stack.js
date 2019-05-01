import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import QuoteBox from "../QuoteBox/QuoteBox";
import "./Stack.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Stack() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  //const AnimatedQuoteBox = animated(QuoteBox);

  return (
    <AnimatedQuoteBox
      class="box"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Stack />, rootElement);