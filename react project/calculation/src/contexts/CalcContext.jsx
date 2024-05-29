import { createContext } from "react";
import useCalc from "../hooks/useCalc";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const { addCalc, calcList } = useCalc();

  const contextValue = { addCalc, calcList };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
};
