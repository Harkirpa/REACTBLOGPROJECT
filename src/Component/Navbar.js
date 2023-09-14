import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const Dropdown = () => {
    setIsMobile(isMobile);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header>
        <div className="main-header">
          <span id="the">THE</span>
          <span id="sir">SIREN</span>
          <img
            onClick={() => setIsMobile(!isMobile)}
            className="Burger_Icon"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/menu--v7.png"
            alt="icon not found"
          />
        </div>

        <div className={isMobile? "DropDown" : "Navbar"}>
          <NavLink onClick={Dropdown} activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink onClick={Dropdown} activeclassname="active" to="/bollywood">
            Bollywood
          </NavLink>
          <NavLink onClick={Dropdown} activeclassname="active" to="/technology">
            Technology
          </NavLink>
          <NavLink onClick={Dropdown} activeclassname="active" to="/hollywood">
            Hollywood
          </NavLink>
          <NavLink onClick={Dropdown} activeclassname="active" to="/fitness">
            Fitness
          </NavLink>
          <NavLink onClick={Dropdown} activeclassname="active" to="/food">
            Food
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
