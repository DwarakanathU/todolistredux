import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cuid from "cuid";
import { addTodo } from "../redux/actions/actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ message: task, id: cuid() }));
  };
  return (
    <form onSubmit={handelFormSubmit}>
      <div className="ui input ">
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={handleOnChange}
        />
      </div>

      <button className="ui blue button" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default AddTodo;
