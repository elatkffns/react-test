import React from "react";
import "./Reference.css";

export default function Reference() {
  const arr = [
    <a href="https://www.w3schools.com/">w3schools</a>,
    <a href="https://developer.mozilla.org/ko/">MDN</a>,
    <a href="https://shloksomani.github.io/react-portfolio/">git portfolio</a>,
    <a href="https://www.pexels.com/ko-kr/">image</a>,
  ];
  return (
    <div className="ref">
      <h3>Reference</h3>
      <p>참고한 내용</p>
      <div className="tagWrap">
        {arr.map((a) => (
          <div className="imgWrap">
            <div>
              <i className="img" />
            </div>
            <div>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
