import { useState } from "react";
import {
  getCalc as getCalcAPI,
  removeCalc,
} from "../network/requests/calcRequests";

const useCalc = () => {
  const [calcList, setCalcList] = useState([]);

  const getCalc = async () => {
    try {
      const result = await getCalcAPI();
      console.log(result);
      setCalcList(result);
    } catch (error) {
      console.log(error);
    }
  };

  const addCalc = async (calc) => {
    try {
      const newCalc = await createCalc(calc);
      setCalcList([...calcList, newCalc]);
    } catch (error) {}
  };
  return { calcList, addCalc, getCalc };
};

export default useCalc;
