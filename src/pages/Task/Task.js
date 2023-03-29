//Imports from react
import React, { useState } from "react";
//Imports from react-redux
import { useDispatch } from "react-redux";
//Import actions from redux - tasks reducer
import {
  removeTask,
  editTask,
  checkTask,
} from "../../redux/tasksReducer/actions";
//Import styles
import styles from "./styles.module.css";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.name);

  const check_Task = () => {
    dispatch(checkTask(task));
  };

  const delete_Task = () => {
    dispatch(removeTask(task));
  };

  const edit_Task = () => {
    setEdit(!edit);
    dispatch(editTask(task, editedTitle));
  };

  return (
    <div>
      {edit ? (
        <div>
          <input
            type="text"
            defaultValue={task.name}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={edit_Task}>✔️</button>
        </div>
      ) : (
        <div key={task.id} className={styles.container}>
          <div className={styles.taskContainer}>
            <div
              style={{ textDecoration: task.done ? "line-through" : "none" }}
              className={styles.taskName}
            >
              {task.name}
            </div>
            <div className={styles.buttonsContainer}>
              <button onClick={check_Task} className={styles.setCheckButton}>
                {task.done ? "Uncheck" : "Check"}
              </button>
              <button
                onClick={() => setEdit(!edit)}
                className={styles.editButton}
              >
                Edit
              </button>
              <button onClick={delete_Task} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
