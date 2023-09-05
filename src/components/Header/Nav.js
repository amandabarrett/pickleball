import React from "react";
import Logo from "../../assets/logo-one.svg";
import Menu from "../../assets/hamburger.svg";
import "../Nav.scss";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";

const options = [
  { name: "Register", Link: "/register" },
  { name: "Login", Link: "/login" },
  { name: "Home", Link: "/" },
];
function Nav() {
  const [active, setActive] = useState(false);
  const hamburgerIcon = (
    <img
      onClick={() => setActive(!active)}
      className={`nav__hamburger ${active ? "nav__hamburger-active" : ""}`}
      src={Menu}
      alt="hamburger menu"
    />
  );
  const closeIcon = (
    <CgCloseO
      onClick={() => setActive(!active)}
      className={`nav__hamburger ${active ? "nav__hamburger-active" : ""}`}
      src={Menu}
      alt="hamburger menu"
    />
  );
  return (
    <>
      <nav className="nav">
        <div className="nav__logo-div">
          <img className="nav__logo" src={Logo} alt="logo" />
        </div>
        <div onClick={() => setActive(!active)} className="nav__hamburger-div">
          {active ? closeIcon : hamburgerIcon}
          <ul className="nav__drop-down-ul">
            {active &&
              options.map((item, i) => (
                <li className="nav__drop-down-li" key={i}>
                  <a href="#">{item.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div
          className={`nav__drop-down ${active ? "nav__drop-down-active" : ""}`}
        ></div>
      </nav>
    </>
  );
}

export default Nav;
