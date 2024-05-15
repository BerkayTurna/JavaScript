import { useState } from "react";

const ShapeForm = ({ createShape }) => {
  const [shapeForm, setShapeForm] = useState({
    color: "red",
    shape: "square",
  });
  const getShape = (event) => {
    event.preventDefault();
    createShape(shapeForm);
  };
  return (
    <div className="shape-form">
      <select
        name="color"
        id="color"
        onChange={(event) => {
          setShapeForm((prevShape) => ({
            ...prevShape,
            color: event.target.value,
          }));
        }}
      >
        <option value="red" selected>
          Red
        </option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <select
        name="shape"
        id="shape"
        onChange={(event) => {
          setShapeForm((prevShape) => ({
            ...prevShape,
            shape: event.target.value,
          }));
        }}
      >
        <option value="square" selected>
          Square
        </option>
        <option value="rectangle">Rectangle</option>
        <option value="circle">Circle</option>
      </select>
      <button onClick={getShape}>Get Shape</button>
    </div>
  );
};

export default ShapeForm;
