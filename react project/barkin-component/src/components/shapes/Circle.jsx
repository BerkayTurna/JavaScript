import propTypes from "prop-types";
const Circle = ({ color }) => {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: color,
        margin: "10px",
        borderRadius: "50%",
      }}
    ></div>
  );
};

Circle.propTypes = {
  color: propTypes.string,
};
export default Circle;
