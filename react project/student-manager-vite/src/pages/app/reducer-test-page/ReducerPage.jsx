import React, { createRef, useReducer } from "react";

const initialState = {
  counter: 0,
  lastUpdatedAt: new Date().toLocaleString(),
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter + 1,
        lastUpdatedAt: new Date().toLocaleString(),
      };
    case "DECREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter - 1,
        lastUpdatedAt: new Date().toLocaleString(),
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        lastUpdatedAt: new Date().toLocaleString(),
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const incRef = createRef();
const decRef = createRef();
const numRef = createRef();

const ReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkIncrement = () => {
    if (isNaN(incRef.current.value) || incRef.current.value === "") {
      dispatch({
        type: "ERROR",
        payload: { error: "Increment value must be a number" },
      });
    } else {
      dispatch({
        type: "INCREMENT",
        payload: { amount: Number(incRef.current.value) },
      });
      incRef.current.value = "";
    }
  };

  const checkDecrement = () => {
    if (isNaN(decRef.current.value) || decRef.current.value === "") {
      dispatch({
        type: "ERROR",
        payload: { error: "Decrement value must be a number" },
      });
    } else {
      dispatch({
        type: "DECREMENT",
        payload: { amount: Number(decRef.current.value) },
      });
      decRef.current.value = "";
    }
  };
  const checkSet = () => {
    if (isNaN(numRef.current.value) || numRef.current.value === "") {
      dispatch({
        type: "ERROR",
        payload: { error: "Set Number value must be a number" },
      });
    } else {
      dispatch({
        type: "SET_COUNTER",
        payload: { amount: Number(numRef.current.value) },
      });
      numRef.current.value = "";
    }
  };

  const resetAll = () => {
    dispatch({ type: "RESET" });
    (incRef.current.value = ""),
      (decRef.current.value = ""),
      (numRef.current.value = "");
  };
  return (
    <div>
      <p>Counter: {state.counter}</p>
      <p>Last Updated: {state.lastUpdatedAt}</p>
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>
        DECREMENT
      </button>
      <button onClick={resetAll}>RESET</button>
      <br />
      <br />
      <button onClick={checkIncrement}>Inc</button>
      <input type="text" placeholder="Increment number" ref={incRef} />
      <br />
      <button onClick={checkDecrement}>Dec</button>
      <input type="text" placeholder="Decrement number" ref={decRef} />
      <br />
      <button onClick={checkSet}>Set</button>
      <input type="text" placeholder="Set number" ref={numRef} />
    </div>
  );
};

export default ReducerPage;
