import React from "react";
import "../../src/App.css";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // const completedObj = useSelector((state) => state.todosReducer.completedData);
  const taskObj = useSelector((state) => state.todosReducer.data);
  console.log(taskObj);

  // const completedItems = completedObj.map((task) => {
  //   return <div key={task.id}>{task.message}</div>;
  // });

  const taskItems = taskObj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  console.log(taskItems);
  return (
    <div className="App">
      {taskItems}
      {/* <h4>completed</h4> */}
      {/* <hr />
      {completedItems} */}
    </div>
  );
};

export default TodoList;
