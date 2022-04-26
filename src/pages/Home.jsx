import React from "react";
import img1 from "../asset/images/sec1.png";
import "../style/home.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="Container__main">
        <div className="text__Container">
          <h1 className="text-4xl lg:text-6xl text-black font-bold">
            Mexician Style
          </h1>
          <h1 className="text-4xl lg:text-6xl text-black font-bold">
            Street corn
          </h1>
          <p className="mt-4">
            sign up for kickstarter launch update and early bird discounts!
          </p>

          <button className="HBtn ">
            Search <FaArrowRight />
          </button>
        </div>
        <div className="img__Container">
          <img src={img1} alt="Error 404" className="HImage" />
        </div>
      </div>
    </>
  );
}
