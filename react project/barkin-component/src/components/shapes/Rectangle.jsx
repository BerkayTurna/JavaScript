const Rectangle = ({ color, size }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size * 2}px`,
        backgroundColor: color,
        margin: "10px",
      }}
    ></div>
  );
};

export default Rectangle;
