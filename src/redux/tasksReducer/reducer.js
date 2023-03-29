//Import constants from the constants file
import * as CONSTANTS from "./constants";

const initialState = {
  tasks: [],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case CONSTANTS.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case CONSTANTS.CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, done: !task.done } : task
        ),
      };
    case CONSTANTS.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.name }
            : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
