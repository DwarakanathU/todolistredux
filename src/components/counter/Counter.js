import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  console.log("i rendered");
  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <span>{count}</span>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Counter;
