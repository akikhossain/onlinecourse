import PropTypes from "prop-types";
import Coursename from "../Coursename/Coursename";

const Credithour = ({ coursenames, totalPrice, remaining, creditHour }) => {
  return (
    <div className="w-1/4 bg-white p-6 rounded-lg h-[400px]">
      <h1 className="text-blue-600 text-xl font-bold mb-4">
        Credit Hour Remaining: {remaining}
      </h1>
      <hr />
      <h1 className="text-xl font-bold mb-6 mt-4">
        <ol>
          Course Name: {coursenames.length}
          {coursenames.map((coursename, index) => (
            <Coursename
              key={index}
              coursename={coursename}
              index={index + 1}
            ></Coursename>
          ))}
        </ol>
      </h1>
      <hr />
      <h4 className="mt-4 mb-4 text-lg font-medium">
        Total Credit Hour: {creditHour}
      </h4>
      <hr />
      <h4 className="mt-4 mb-4 text-lg font-medium">
        Total Price: {totalPrice}
      </h4>
    </div>
  );
};
Credithour.propTypes = {
  coursenames: PropTypes.array.isRequired,
  totalPrice: PropTypes.func.isRequired,
  remaining: PropTypes.func.isRequired,
  creditHour: PropTypes.func.isRequired,
};

export default Credithour;
