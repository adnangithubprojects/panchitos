import section from "../asset/images/LCD2.png";
import React from "react";
import "../style/section.css";

export default function Section1() {
  return (
    <>
      <div className="Section__main">
        <h1 className="Section__head ">the panchito's elotes story </h1>
        <div className="">
          <img src={section} alt="error" className="Section__img" />
        </div>
      </div>
    </>
  );
}
