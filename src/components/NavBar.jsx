import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../asset/images/logo.png";
import "../style/NavBar.css";
export default function NavBar() {
  const [Icon, setIcon] = useState(false);
  return (
    <>
      <nav>
        <div className="Logo">
          <div className="Logo__container">
            <img src={Logo} alt="error" />
          </div>
          <div className="Icon__container" onClick={() => setIcon(!Icon)}>
            {!Icon ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        <div>
          <ul
            onClick={() => setIcon(!Icon)}
            className={!Icon ? "menu active " : "menu"}
          >
            <a href="#" className="focus:text-black mt-4 md:mt-0">
              <li>home</li>
            </a>
            <a href="#" className="focus:text-black">
              <li>about</li>
            </a>
            <a href="#" className="focus:text-black">
              <li>contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
