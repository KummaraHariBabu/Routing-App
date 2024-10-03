import React from "react";
import error from "../img/notfound.jpg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="errorWrapper">
      <img src={error} alt="error" />
      <div className="btnWrappers">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate(-1)}> Back</button>
        </div>
    </div>
  );
};

export default NotFound;
