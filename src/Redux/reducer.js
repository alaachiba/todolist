import { ADD_TASK, EDIT_TASK, DELETE_TODO } from './actionTypes';
import { taskData } from '../Tasks';

const initState = {
    data: taskData
  };

  export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
          return {
            ...state,
            data: [...state.data, action.payload]
          };
          case EDIT_TASK:
        return {
          ...state,
          Tasks:state.Tasks.map((el)=>el.id===action.data.id ?
          {...el,description:action.data.input}:el)
        }
        case DELETE_TODO :
          return {
            ...state,
            Tasks: state.Tasks.filter((el) => el.id !== action.data.id),
          }
        default:
          return state;
      }
  }