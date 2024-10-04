import React, { useState } from "react";
import courses from "../data/data"; // Assuming this has {name, img, text, link}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="sectionWrapper">
      {selectedCourse ? (
        <div className="courseDetail">
          <h1>{selectedCourse.name}</h1>
          <iframe
            src={selectedCourse.link}
            title={selectedCourse.name}
            style={{ width: "100%", height: "500px", border: "none" }}
          />
          <button onClick={() => setSelectedCourse(null)} className="btnWrapper">
            Back to Courses
          </button>
        </div>
      ) : (
        <div className="courseWrapper">
          <h1>OUR COURSES</h1>
          <div className="iconWrapper">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img
                  src={course.img}
                  alt={course.name}
                  onClick={() => handleClick(course)}
                  style={{ cursor: "pointer" }} // Adds cursor pointer to indicate clickable
                />
                <div>
                  <h5>{course.name}</h5>
                  <p>{course.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
