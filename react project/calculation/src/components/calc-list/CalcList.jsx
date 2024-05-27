import React from "react";
import CalcCard from "../calc-card/CalcCard";

const CalcList = ({ calcList }) => {
  return (
    <div className="calc-list">
      {calcList.map((calc) => (
        <CalcCard calc={calc} key={calc.id} />
      ))}
    </div>
  );
};

export default CalcList;