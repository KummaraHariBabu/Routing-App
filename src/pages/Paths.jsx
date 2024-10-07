import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h3>Dive into the World of Development</h3>
      <p>
        Embark on an exciting journey through the realms of software
        development! Whether you're passionate about creating stunning user
        experiences with Frontend development or eager to master the intricacies
        of Backend technologies, this platform offers the guidance and resources
        you need. Choose your path and start building the future today!
      </p>

      <div className="btnGroup">
        <NavLink to="frontend">FrontEnd</NavLink>
        <NavLink to="backend"> BackeEnd</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
