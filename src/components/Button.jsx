import React from "react";

export default function Button({ btn = "type1", width, position }) {
  return (
    <>
      <button
        className={`${position} ${width} border-2 h-11 rounded-3xl bg-[#ffffff00]`}
      >
        {" "}
        {btn}{" "}
      </button>
    </>
  );
}
