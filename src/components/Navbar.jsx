import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/react.png";
const Navbar = () => {

  return (
    <div className="navWrapper">
      <div>
        <Link to="/">
          <img src={logo} alt="img" className="logo" />
        </Link>
      </div>
      <ul className="navigationWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personal</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/paths">UI & API</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
