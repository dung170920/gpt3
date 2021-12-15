import React, { useState } from "react";
import "./navbar.css";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import logo from "../../assets/images/GPT-3.svg";

const Menu = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#wgpt">What is GPT?</a>
      </li>
      <li>
        <a href="#possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar"  id="home">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="navbar-links_container">
          <Menu />
        </ul>
      </div>
      <div className="navbar-buttons">
        <a href="#" class="navbar-buttons_signin">
          Sign in
        </a>
        <a href="#" class="navbar-buttons_signup button">
          Sign up
        </a>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <ul className="navbar-menu_container-links">
              <Menu />
              <div className="navbar-menu_container-buttons">
                <a href="#" class="navbar-buttons_signin">
                  Sign in
                </a>
                <a href="#" class="navbar-buttons_signup button">
                  Sign up
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
