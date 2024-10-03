import React, { useEffect, useState } from "react";
// import { createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
// import Personnel from "./Personnel";

//create context for sending parameters to the components

const PersonnelDetails = () => {
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  // const { state: person } = useLocation();

  //for fetching the corresponding data with id
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  if (error) {
    return <NotFound />;
  }
  if (loading) {
    return <h3>Data Loading....</h3>;
  }
  if (!error && !loading) {
    return (
      <div className="personWrapper">
        <div className="personCard">
          <h3>
            {person.first_name} {person.last_name}
          </h3>
          <img src={person.avatar} alt="img" />
          <p>{person.email}</p>
          <div className="btnWrappers">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate(-1)}> Back</button>
          </div>
        </div>
      </div>
    );
  }
};

export default PersonnelDetails;
