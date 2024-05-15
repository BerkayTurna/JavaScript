import Circle from "../shapes/Circle";
import Rectangle from "../shapes/Rectangle";
import Square from "../shapes/Square";

const shapeCard = ({ shape }) => {
  return (
    <div className="shape-card">
      {(shape.shape === "square" && <Square color={shape.color} />) ||
        (shape.shape === "rectangle" && <Rectangle color={shape.color} />) ||
        (shape.shape === "circle" && <Circle color={shape.color} />)}
    </div>
  );
};

export default shapeCard;
