import React from "react";
import { sliderData } from "../config";
import Accordian from "./Accordian";

export default function Accordian1() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {sliderData.map((it) => {
          return (
            <Accordian imge={it.image} name={it.name} message={it.message} />
          );
        })}
      </div>
    </>
  );
}
