import React from "react";
import "./Reference.css";
import coffee from "./coffee.jpg";

export default function Reference() {
  const arr = [
    <a href="https://www.w3schools.com/">w3schools</a>,
    <a href="https://developer.mozilla.org/ko/">MDN</a>,
    <a href="https://shloksomani.github.io/react-portfolio/">git portfolio</a>,
    <a href="https://www.pexels.com/ko-kr/">image</a>,
  ];
  return (
    <div className="ref">
      <h3 style={{ paddingTop: "10px" }}>참고한 내용</h3>
      <div className="tagWrap">
        {arr.map((a) => (
          <figure>
            <img src={coffee} alt="coffee" className="img" />
            <figcaption className="imgtxt">{a}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
