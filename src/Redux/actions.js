import {
  ADD_TASK,
  EDIT_TODO,
  DELETE_TODO,
  TEXT_DECORATION,
} from "./actionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    data: newTask,
  };
};
export const editTask = (editedTodo) => {
  return {
    type: EDIT_TODO,
    data: editedTodo,
  };
};
export const deleteTask = (deletedTodo) => {
  return {
    type: DELETE_TODO,
    data: deletedTodo,
  };
};

export const TextDecoration = (id) => {
  return {
    type: TEXT_DECORATION,
    data: id,
  };
};
