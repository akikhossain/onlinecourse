import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleCourseName }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-3/4 grid grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleCourseName={handleCourseName}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleCourseName: PropTypes.func.isRequired,
};

export default Courses;
