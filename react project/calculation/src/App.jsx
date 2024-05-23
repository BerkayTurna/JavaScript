import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CalcList from "./components/calc-list/CalcList";
import CalcForm from "./components/calc-form/CalcForm";

function App() {
  const [calcList, setCalcList] = useState([]);

  const addCalc = (input1, operator, input2, result) => {
    setCalcList([
      ...calcList,
      { input1, input2, result, operator, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <Header />
      <main>
        <CalcForm addCalc={addCalc} />
        <CalcList calcList={calcList} />
      </main>
    </>
  );
}

export default App;
