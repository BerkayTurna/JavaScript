import { useState } from "react";
import "./App.css";

function App() {
  const [shapeList, setShapeList] = useState([]);
  const [shapeForm, setShapeForm] = useState({
    color: "",
    shape: "",
  });
  const getShape = (event) => {
    event.preventDefault();
    setShapeList((prevShape) => [
      ...prevShape,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };

  return (
    <>
      <header>
        <div>
          <h1>Custom Shape with Color</h1>
        </div>
      </header>
      <main>
        <div>
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
            <option value="red">Red</option>
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
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
          </select>
          <button onClick={getShape}>Get Shape</button>
        </div>
        <div className="shape-list">
          {shapeList.map((shape) => (
            <div className="shape-card">
              {(shape.shape === "square" && (
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: shape.color,
                    margin: "10px",
                  }}
                ></div>
              )) ||
                (shape.shape === "rectangle" && (
                  <div
                    style={{
                      height: "50px",
                      width: "100px",
                      backgroundColor: shape.color,
                      margin: "10px",
                    }}
                  ></div>
                )) ||
                (shape.shape === "circle" && (
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: shape.color,
                      margin: "10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
