import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
const Course = ({ course, handleCourseName }) => {
  const { title, image, description, price, credit_hour } = course;
  return (
    <div>
      <div className="card card-compact p-4 w-[330px] bg-white shadow-sm rounded-lg  ">
        <figure>
          <img src={image} alt={`cover picture of the title ${title}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-xl mt-4 mb-3">
            {title}
          </h2>
          <p className="font-normal text-sm text-gray-400	">{description}</p>
          <div className="flex gap-4 items-center mt-4">
            {" "}
            <FaDollarSign></FaDollarSign>
            <p className="text-gray-500 font-medium">Price : $ {price}</p>
            <FaBookOpen></FaBookOpen>
            <p className="text-gray-500 font-medium">
              Credit : {credit_hour}hr
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleCourseName(course)}
              className="bg-blue-700 mt-6 text-center px-28 py-3 rounded-lg text-xl font-semibold text-white	"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourseName: PropTypes.func.isRequired,
};

export default Course;
