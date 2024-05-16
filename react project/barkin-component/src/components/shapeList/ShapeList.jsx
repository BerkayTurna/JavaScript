import { useContext } from "react";
import ShapeCard from "../shapeCard/ShapeCard";
import { ShapeContext } from "../../contexts/shape/shapeContext";

const ShapeList = () => {
  const { shapeList } = useContext(ShapeContext);
  return (
    <div className="shape-list">
      {shapeList.map((shape) => (
        <ShapeCard shape={shape} key={shape.id} />
      ))}
    </div>
  );
};

export default ShapeList;
