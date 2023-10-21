import PropTypes from "prop-types";

const Coursename = ({ coursename, index }) => {
  const { title } = coursename;
  return (
    <div>
      <ol>
        <li className="text-sm font-normal text-gray-500 mt-3">
          {index}. {title}
        </li>
      </ol>
    </div>
  );
};

Coursename.propTypes = {
  coursename: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Coursename;
