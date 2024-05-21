import { useState } from "react";
import "./App.css";

function App() {
  const [calcList, setCalcList] = useState([]);
  const [input, setInput] = useState([{ input1: 0, input2: 0 }]);

  const output = () => {input1, input2, calcList};
  return (
    <>
      <header>
        <h1>Basic CALCULATOR</h1>
      </header>
      <main>
        <div className="calc-form">
          <input
            type="number"
            onChange={(event) => {
              setInput((prevState) => ({
                ...prevState,
                input1: event.target.valueAsNumber,
              }));
            }}
          />
          <input
            type="number"
            onChange={(event) => {
              setInput((prevState) => ({
                ...prevState,
                input2: event.target.valueAsNumber,
              }));
            }}
          />
          <div className="buttons">
            <button
              onClick={() => {
                setCalcList([...calcList, {input.input1 + input.input2, id: Date.now().toString()}]);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setCalcList(input.input1 - input.input2);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCalcList(input.input1 * input.input2);
              }}
            >
              x
            </button>
            <button
              onClick={() => {
                setCalcList(input.input1 / input.input2);
              }}
            >
              /
            </button>
          </div>
        </div>
        <span>{calcList}</span>
        {console.log(calcList)}
        <div className="calc-list">
          {input.map((calc) => {
            return (
              <div className="calc-card" key={calc.id}>
                <span>{calc.input1}</span>
                <span>button</span>
                <span>{calc.input2}</span>
                <span>=</span>
                <span>{calcList}</span>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
