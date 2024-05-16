import React, { useState } from "react";

const useShape = () => {
  const [shapeList, setShapeList] = useState([]);

  const deleteShape = (objectId) => {
    setShapeList((prevShapeList) => {
      return prevShapeList.filter((shape) => shape.id !== objectId);
    });
  };
  const createShape = (shapeForm) => {
    setShapeList((prevShape) => [
      ...prevShape,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };
  return { shapeList, deleteShape, createShape };
};

export default useShape;
