import React, { useRef } from "react";

const CounterUseRef = () => {
  //   const [count, setCount] = useState(0);
  const countRef = useRef();

  const incrementCounter = () => {
    countRef.current++;
    // setCount(countRef.current++);
    console.log(`Clicked ${countRef.current} times`);
  };
  const decrementCounter = () => {
    countRef.current--;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log("I rendered!");
  return (
    <div>
      <button onClick={incrementCounter}>increment</button>
      <span>{countRef.current} times</span>
      <button onClick={decrementCounter}>decrement</button>
    </div>
  );
};

export default CounterUseRef;
