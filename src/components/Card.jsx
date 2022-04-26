import React from "react";
import crd from "../asset/images/card.png";
import "../style/card.css";
import { card } from "../config";
export default function Card({ image, heading, text }) {
  return (
    <>
      <div className="Card__Section">
        <div className=" flex justify-center flex-wrap items-center ">
          <h1 className=" w-[350px] z-10 mb-32 md:mb-32 text-2xl uppercase md:w-[900px] text-center md:text-5xl lg:text-6xl font-bold">
            3 authentically delicious flavors
          </h1>
        </div>
        <div className="main__Container ">
          {card.map((it) => {
            return (
              <>
                <div className="Card">
                  <div>{it.image}</div>
                  <h1 className="Card__head">{it.head}</h1>
                  <p className="Card__para">{it.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
