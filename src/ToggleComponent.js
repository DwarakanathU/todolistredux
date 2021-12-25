import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Counter from "./components/counter/Counter";
import CompleteTodo from "./components/CompleteTodo";
// import CounterUseRef from "./components/counter/CounterUseRef";

const ToggleComponent = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>ToggleComponent</button>
      <br />
      <hr />
      <br />
      {flag ? (
        <Counter />
      ) : (
        // <CounterUseRef />
        <div>
          <AddTodo />
          <TodoList />
          <hr />
          <CompleteTodo />
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
