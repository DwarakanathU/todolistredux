import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  COMPLETED_DELETE_TODO,
} from "./action-types";
export const addTodo = (message) => {
  return {
    type: ADD_TODO,
    message,
  };
};
export const updateTodo = ({ message, id }) => {
  return {
    type: UPDATE_TODO,
    message,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const completeTodo = ({ message, id }) => {
  return {
    type: COMPLETE_TODO,
    message,
    id,
  };
};
export const completeDeleteTodo = (id) => {
  return {
    type: COMPLETED_DELETE_TODO,
    id,
  };
};
