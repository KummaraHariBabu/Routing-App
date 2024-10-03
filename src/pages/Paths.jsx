import React from "react";
import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet deserunt
        incidunt animi debitis voluptatem
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui
        cumque, praesentium possimus natus nam, alias illum aliquam est officiis
        quisquam ipsum reprehenderit, similique commodi laborum quibusdam quas
        molestias. Accusamus.
      </p>
      <div className="btnGroup">
        <Link to="frontend">FrontEnd</Link>
        <Link to="backend"> BackeEnd</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
