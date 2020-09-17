//Task
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //usestate
  const [counter, setCounter] = useState(value);

  //handles
  const count = (e) => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };

  const minus = (e) => {
    setCounter(counter - 1);
  };

  const resetAll = (e) => {
    setCounter(value);
  };

  return (
    <>
      <h1>counterApp</h1>
      <h2>{counter}</h2>

      <button onClick={count}>+= 1</button>
      <button onClick={resetAll}>Reset</button>
      <button onClick={minus}>-= 1</button>
    </>
  );
};

CounterApp.prototypes = {
  valur: PropTypes.number.isRequired,
};

export { CounterApp as default };
