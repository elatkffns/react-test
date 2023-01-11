import React from "react";

export default function Svg() {
  const num = Math.random().toFixed(1);
  const x = Math.trunc(Math.random() * window.innerWidth);
  return (
    <svg
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    >
      <circle id="white-circle" r="5" cx={x} cy="0" fill="white" />
      <animate
        xlinkHref="#white-circle"
        attributeName="cy"
        from="0"
        to="100%"
        opacity={num}
        dur="3s"
        repeatCount="indefinite"
      />
    </svg>
  );
}
