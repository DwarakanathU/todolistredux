import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions/actions";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  const editUpdateState = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  };

  const renderForm = () => {
    return (
      <form class="ui card" onSubmit={editUpdateState}>
        <input type="text" ref={textRef} defaultValue={task.message} />
        <button className="ui basic green button" type="submit">
          Edit Todo
        </button>
      </form>
    );
  };

  const renderItem = () => {
    return (
      <div key={task.id} class="ui card four column grid">
        <div className="card">
          <div className="content">
            <div className="ui small header">{task.message}</div>
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <button
              className="ui basic green button"
              onClick={() => setIsUpdate(true)}
            >
              edit
            </button>
            <div
              className="ui basic red button"
              onClick={() => dispatch(deleteTodo(task.id))}
            >
              delete
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{isUpdate ? renderForm() : renderItem()}</>;
};

export default TodoItem;
