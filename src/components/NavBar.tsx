import React, { useState } from "react";
import logo from "../img/logo.jpg";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu";

function Navbar(): JSX.Element {
 const [showMenu, setShowMenu] = useState(false);
 const [showNav, setShowNav] = useState(false);

 const handleToggleNav = () => {
  setShowNav(!showNav);
 };

 return (
  <nav className="navbar">
   {/* Left */}
   <div className="navLeft">
    <img src={logo} alt="" />
    <div>
     <input type="text" placeholder="Search or jump to" />
    </div>
   </div>
   {/* Center */}
   <div className="navCenter">
    <h2>Pulls</h2>
    <h2>Issues</h2>
    <h2>Marketplace</h2>
    <h2>Explore</h2>
   </div>
   {/* Right */}
   <div className="navRight">
    <FiBell />
    <div className="navRightIcons">
     <FiPlus />
     <IoMdArrowDropdown />
    </div>
    <div className="navRightIcons navBurgerMenu" onClick={handleToggleNav}>
     <div className="navBurgerMenuIcon"></div>
     <div className="navBurgerMenuIcon"></div>
     <div className="navBurgerMenuIcon"></div>
    </div>
   </div>
   {/* Mobile menu */}
   {showNav && (
    <div className="navMobileMenu">
     <div className="navMobileMenuHeader">
      <img src={logo} alt="" />
      <div className="navMobileMenuClose" onClick={handleToggleNav}>
       &times;
      </div>
     </div>
     <div className="navMobileMenuItems">
      <h2>Pulls</h2>
      <h2>Issues</h2>
      <h2>Marketplace</h2>
      <h2>Explore</h2>
     </div>
    </div>
   )}
   {showMenu && <Menu />}
  </nav>
 );
}

export default Navbar;
