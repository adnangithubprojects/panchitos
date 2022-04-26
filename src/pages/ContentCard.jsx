import React from "react";
import "../style/ContentCrd.css";
export default function ContentCard() {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="Content">
          <div className="ml-2">
            <h1 className="mb-4 text-2xl md:text-5xl font-bold">
              Elot your way
            </h1>
            <p>Add as much or as little sauce.</p>
            <p>Seasoning and Cheese as you like.</p>
            <p>
              Sing up for kickstarter launch updates and early bird discounts!
            </p>
          </div>
          <div>
            <div className="bg-[#fff1e06e] flex justify-between items-center w-[340px]   md:w-[537px] h-[50px] md:h-[88px] rounded-3xl">
              <p className="ml-4 md:ml-8 text-xs md:text-base">
                Enter your email to sign up
              </p>
              <button className="font-bold bg-black text-white text-xs md:text-base w-[150px]  md:w-[237px] h-[50px] md:h-[88px]  rounded-3xl">
                Sign up for kickstarter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
