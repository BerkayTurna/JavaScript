import { createContext, useEffect } from "react";
import useCalc from "../hooks/useCalc";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const { addCalc, calcList, getCalc } = useCalc();

  const contextValue = { addCalc, calcList, getCalc };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
};
