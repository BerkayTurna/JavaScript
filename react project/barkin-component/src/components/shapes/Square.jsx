const Square = ({ color, size }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: color,
        margin: "10px",
      }}
    ></div>
  );
};

export default Square;
