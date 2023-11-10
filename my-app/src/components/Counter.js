"use client";
import {
  addByAmount,
  decrement,
  increment,
  reset,
} from "@/features/counter/counterSlice";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const btnStyle = {
  width: "20%",
  height: "30%",
  fontSize: "25px",
};

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const [valueAmount, setValueAmount] = useState(0);

  const handleChangeAmount = (e) => {
    const amount = Number(e.target.value);
    setValueAmount(amount);
  };

  const resetAll = () => {
    setValueAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{counter}</p>
      <button
        style={btnStyle}
        type="button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        style={btnStyle}
        type="button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <input type="text" value={valueAmount} onChange={handleChangeAmount} />
      <button style={btnStyle} type="button" onClick={resetAll}>
        Reset All
      </button>
      <button
        style={btnStyle}
        type="button"
        onClick={() => dispatch(addByAmount(valueAmount))}
      >
        Add amount
      </button>
    </section>
  );
};

export default Counter;
