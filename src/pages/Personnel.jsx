import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 const Personnel = () => {
  const [people, setPeople] = useState([]);


  let navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setPeople(data.data);
      console.log(data);
    } catch (error) {
      console.log("Fetching data error:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="personnelWrapper">
      <h1>Personal List</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div className="personnelCard" key={id}>
              <img src={avatar} alt="img" />
              <h3>
                {first_name} {last_name}
              </h3>
              <button
                className="btnWrapper"
                onClick={() => navigate(`/personnel/${id}`, { state: person })}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;
