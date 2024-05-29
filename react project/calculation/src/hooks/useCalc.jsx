import { useState } from "react";

const useCalc = () => {
  const [calcList, setCalcList] = useState([]);

  const addCalc = (input1, operator, input2, result) => {
    setCalcList([
      ...calcList,
      { input1, input2, result, operator, id: Date.now().toString() },
    ]);
  };
  return { calcList, addCalc };
};

export default useCalc;
