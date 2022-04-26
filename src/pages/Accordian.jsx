import React, { useState } from "react";
import { sliderData } from "../config";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Accordian({ imge, name, message }) {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className={show ? "bg-[#fff1e06e] rounded-xl" : ""}>
        <div
          className={
            !show
              ? "relative w-[350px] md:w-[500px] py-4 flex items-center gap-4 rounded-xl  bg-[#fff1e06e]"
              : "relative w-[350px] md:w-[500px] py-4 flex items-center gap-4 rounded-xl  "
          }
        >
          <div className=" ml-4 border-2 rounded-full w-11 h-11">
            <img src={imge} alt="error" className="rounded-full w-10 h-10" />
          </div>
          <div className="">
            <h1 className="font-bold">{name}</h1>
          </div>
          <div>
            {!show ? (
              <p
                onClick={() => setshow(!show)}
                className="absolute top-7 right-8"
              >
                <FaAngleDown />
              </p>
            ) : (
              <p
                onClick={() => setshow(!show)}
                className="absolute top-7 right-8"
              >
                <FaAngleUp />
              </p>
            )}
          </div>
        </div>
        {show ? (
          <p className="mx-1 md:ml-16 w-[350px] md:w-[400px] h-[50px] md:h-[40px] flex items-center ">
            {message}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
