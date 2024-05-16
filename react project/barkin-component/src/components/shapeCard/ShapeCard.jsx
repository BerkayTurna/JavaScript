import { useContext } from "react";
import { ShapeContext } from "../../contexts/shape/shapeContext";
import Circle from "../shapes/Circle";
import Rectangle from "../shapes/Rectangle";
import Square from "../shapes/Square";

const shapeCard = ({ shape }) => {
  const { deleteShape } = useContext(ShapeContext);
  return (
    <div className="shape-card">
      <span
        onClick={() => {
          deleteShape(shape.id);
        }}
        style={{ cursor: "pointer" }}
      >
        X
      </span>
      {(shape.shape === "square" && (
        <Square color={shape.color} size={shape.size} />
      )) ||
        (shape.shape === "rectangle" && (
          <Rectangle color={shape.color} size={shape.size} />
        )) ||
        (shape.shape === "circle" && (
          <Circle color={shape.color} size={shape.size} />
        ))}
    </div>
  );
};

export default shapeCard;
