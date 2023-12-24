import { Favorite } from "../Icons/Favorite";
import { HamburgerIcon } from "../Icons/Hamburger";
import { useState, useContext } from "react";
import { useContextHelper } from "../../../../useContextHelper";
import "./Header.css";
export const Header = () => {
  const {isNavActive, setIsNavActive} = useContext(useContextHelper)

  const handleNav = () => {
    setIsNavActive(!isNavActive);
  };  
  console.log(isNavActive);
  return (
    <header>
      <nav className="navbar-container-mobile">
        <ul className="ul-nav-mobile">
          <li className="hamburger-icon" onClick={handleNav}>
            <HamburgerIcon></HamburgerIcon>
          </li>
          <li>Kimey Macrame</li>
          <li>
            <Favorite></Favorite>
          </li>
        </ul>
      </nav>
      <div className={`${isNavActive ? "nav-menu-deploy" : "hidden"}`}>
        <div className="nav-menu-deploy-container">
          <ul>
            <li>Productos</li>
            <li>Contactame</li>
            <li>Sobre nosotros</li>
          </ul>
        </div>
      </div>


    </header>
  );
};
