import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="flex justify-around flex-wrap items-center h-[200px] md:h-[80px] w-full border-t-[1px] ">
        <p className="mt-4">&copy; Panchitos powered by Adnan Ahmad</p>
        <div className="flex  md:mt-0 md:flex-row justify-evenly items-center gap-4 w-60">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaFacebookF />
          </span>
        </div>
      </div>
    </>
  );
}
