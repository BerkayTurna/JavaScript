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
      if (isNaN(action.payload.amount)) {
        return {
          ...state,
          lastUpdatedAt: new Date().toLocaleString(),
          error: "Not a number",
        };
      }
      return {
        ...state,
        counter: state.counter + action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "DECREMENT":
      if (isNaN(action.payload.amount)) {
        return {
          ...state,
          lastUpdatedAt: new Date().toLocaleString(),
          error: "Not a number",
        };
      }
      return {
        ...state,
        counter: state.counter - action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        error: null,
      };
    case "SET_COUNTER":
      if (isNaN(action.payload.amount)) {
        return {
          ...state,
          lastUpdatedAt: new Date().toLocaleString(),
          error: "Not a number",
        };
      }
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
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <br />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: { amount: Number(incRef.current.value) },
          })
        }
      >
        Inc
      </button>
      <input type="text" placeholder="Increment number" ref={incRef} />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: { amount: Number(decRef.current.value) },
          })
        }
      >
        Dec
      </button>
      <input type="text" placeholder="Decrement number" ref={decRef} />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "SET_COUNTER",
            payload: { amount: Number(numRef.current.value) },
          })
        }
      >
        Set
      </button>
      <input type="text" placeholder="Set number" ref={numRef} />
    </div>
  );
};

export default ReducerPage;
