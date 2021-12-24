import React from "react";
import "../../src/App.css";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const taskObj = useSelector((state) => state.todosReducer.data);
  console.log(taskObj);
  const taskItems = taskObj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  console.log(taskItems);
  return <div className="App">{taskItems}</div>;
};

export default TodoList;
