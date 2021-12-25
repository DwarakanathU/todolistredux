import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeDeleteTodo } from "../redux/actions/actions";

const CompleteTodo = () => {
  const dispatch = useDispatch();
  const taskObj = useSelector((state) => state.todosReducer.completedData);

  const taskItems = taskObj.map((task) => {
    return (
      <li key={task.id}>
        {task.message}{" "}
        <button onClick={() => dispatch(completeDeleteTodo(task.id))}>
          delete
        </button>
      </li>
    );
  });
  return <ol className="App">{taskItems}</ol>;
};

export default CompleteTodo;
