import { useState } from "react";
import "./App.css";
import Header from "./components/shared/header/Header";
import ShapeList from "./components/shapeList/ShapeList";
import ShapeForm from "./components/shapeForm/ShapeForm";
import { ShapeProvider } from "./contexts/shape/shapeContext";

function App() {
  return (
    <>
      <Header />
      <ShapeProvider>
        <main>
          <ShapeForm />
          <ShapeList />
        </main>
      </ShapeProvider>
    </>
  );
}

export default App;
