import { useState } from "react";
import "./App.css";
import Header from "./components/shared/header/Header";
import ShapeList from "./components/shapeList/ShapeList";
import ShapeForm from "./components/shapeForm/ShapeForm";

function App() {
  const [shapeList, setShapeList] = useState([]);
  const createShape = (shapeForm) => {
    setShapeList((prevShape) => [
      ...prevShape,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };

  return (
    <>
      <Header />
      <main>
        <ShapeForm createShape={createShape} />
        <ShapeList shapeList={shapeList} />
      </main>
    </>
  );
}

export default App;
