import React from "react";
import "./bar.css";

export default function Bar() {
  const skills = [
    { lang: "HTML", per: "50%" },
    { lang: "CSS", per: "20%" },
    { lang: "JAVASCRIPT", per: "20%" },
    { lang: "REACT", per: "10%" },
  ];
  return (
    <>
      {skills.map((skill) => (
        <div>
          <span>{skill.lang}</span>
          <span className="rf">{skill.per}</span>
          <div className="skillbox">
            <div className="bar" style={{ width: skill.per }} />
          </div>
        </div>
      ))}
    </>
  );
}
