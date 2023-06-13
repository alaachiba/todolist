import { ADD_TASK, EDIT_TASK, DELETE_TODO } from './actionTypes';

export const addTask = (newTask) => {
    return {
      type: ADD_TASK,
      payload: newTask
    };
  };

  export const editTask = (task) => {
    return {
      type: EDIT_TASK,
      payload: task
    };
  };

  export const deleteTask = (deletedTodo) => {
    return {
      type : DELETE_TODO,
      data : deletedTodo
    }
  }