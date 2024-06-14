import React, { useCallback, useMemo, useState } from "react";

function MemoPage() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  //   const calculateSum = useMemo(() => {
  //     console.log("calculateSum called");
  //     console.log("num1:" + num1 + `\n` + "num2:" + num2 + `\n` + "sum:" + sum);
  //     return num1 + num2;
  //   }, [num1, num2]);
  const calculateSum = useCallback(() => {
    console.log("calculateSum called");
    console.log("num1:" + num1 + `\n` + "num2:" + num2 + `\n` + "sum:" + sum);
    return num1 + num2;
  }, [num1, num2]);

  const handleClick = () => {
    console.log("handleClick called");
    setSum(calculateSum);
  };
  return (
    <div>
      <label>Num1:</label>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <br />
      <label>Num2:</label>
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      <button onClick={handleClick}>Calculate</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default MemoPage;
