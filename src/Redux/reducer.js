import {
  ADD_TASK,
  EDIT_TODO,
  DELETE_TODO,
  TEXT_DECORATION,
} from "./actionTypes";

const initState = {
  Tasks: [],
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        Tasks: [...state.Tasks, action.data],
      };
    case EDIT_TODO:
      return {
        ...state,
        Tasks: state.Tasks.map((el) =>
          el.id === action.data.id
            ? { ...el, description: action.data.input }
            : el
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        Tasks: state.Tasks.filter((el) => el.id !== action.data),
      };
    case TEXT_DECORATION:
      return {
        ...state,
        Tasks: state.Tasks.map((el) =>
          el.id == action.data ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};
