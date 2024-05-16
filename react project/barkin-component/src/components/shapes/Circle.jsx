import propTypes from "prop-types";
const Circle = ({ color, size }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
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
