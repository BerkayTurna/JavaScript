import { createContext } from "react";
import useShape from "../../hooks/shape/useShape";

export const ShapeContext = createContext();

export const ShapeProvider = ({ children }) => {
  const { shapeList, deleteShape, createShape } = useShape();
  const contextValue = { shapeList, deleteShape, createShape };
  return (
    <ShapeContext.Provider value={contextValue}>
      {children}
    </ShapeContext.Provider>
  );
};
