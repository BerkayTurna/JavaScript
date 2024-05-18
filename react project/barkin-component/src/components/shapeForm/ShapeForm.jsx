import { useContext, useState } from "react";
import { ShapeContext } from "../../contexts/shape/shapeContext";

const ShapeForm = () => {
  const { createShape } = useContext(ShapeContext);
  const [shapeForm, setShapeForm] = useState({
    color: "red",
    shape: "square",
    size: "50",
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
        <option value="red" defaultValue="red">
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
        <option value="square" defaultValue="square">
          Square
        </option>
        <option value="rectangle">Rectangle</option>
        <option value="circle">Circle</option>
      </select>
      <select
        name="size"
        id="size"
        onChange={(event) => {
          setShapeForm((prevShape) => ({
            ...prevShape,
            size: event.target.value,
          }));
        }}
      >
        <option value="50" defaultValue="50">
          1x
        </option>
        <option value="100">2x</option>
        <option value="200">3x</option>
      </select>
      <button onClick={getShape}>Get Shape</button>
    </div>
  );
};

export default ShapeForm;
