//Import constants from the constants file
import * as CONSTANTS from "./constants";

export const addTask = (task) => (dispatch) => {
  dispatch({
    type: CONSTANTS.ADD_TASK,
    payload: {
      id: Date.now(),
      name: task,
      done: false,
    },
  });
};
export const removeTask = (task) => (dispatch) => {
  dispatch({
    type: CONSTANTS.REMOVE_TASK,
    payload: {
      id: task.id,
    },
  });
};
export const editTask = (task, editedTitle) => (dispatch) => {
  dispatch({
    type: CONSTANTS.EDIT_TASK,
    payload: {
      id: task.id,
      name: editedTitle,
    },
  });
};
export const checkTask = (task) => (dispatch) => {
  dispatch({
    type: CONSTANTS.CHECK_TASK,
    payload: {
      id: task.id,
    },
  });
};
