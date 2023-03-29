//Imports from react
import React, { useState } from "react";

//Imports from react-redux
import { useDispatch, useSelector } from "react-redux";

//Import actions from redux - tasks reducer
import { addTask } from "../../redux/tasksReducer/actions";

//Import styles
import styles from "./styles.module.css";

//Import task component
import Task from "../Task/Task";

function Home() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = (e) => {
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>My Todo</div>
      <input
        type="text"
        placeholder="Enter task to add.."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className={styles.taskInputBox}
      />
      <button
        onClick={() => handleAddTask(taskName)}
        className={styles.taskInputButton}
      >
        Add
      </button>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Home;
