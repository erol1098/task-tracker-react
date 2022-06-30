import React, { useContext } from "react";
import TaskTracker from "../../util/task-tracker";
import styles from "./Task.module.scss";
const Task = (props) => {
  const { setUserTasks, done, setDone } = useContext(TaskTracker);
  const { id, task, time, isDone } = props.data;

  const deleteHandler = (e) => {
    setUserTasks((prevState) => {
      return prevState.filter((item) => item.id !== e.target.closest("li").id);
    });
  };

  const doneHandler = (e) => {
    setDone((prevState) => !prevState);
    setUserTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === e.target.closest("li").id) {
          task.isDone = done;
          return task;
        } else return task;
      })
    );
  };

  return (
    <li
      className="d-flex justify-content-end align-items-center bg-dark"
      id={id}
    >
      <div style={isDone ? { width: "97%" } : { width: "100%" }}>
        <p
          className={`d-flex flex-column ${isDone ? styles.done : ""}`}
          onClick={doneHandler}
        >
          <span className="fw-bold mb-2">{task}</span>
          <span className="text-secondary">{time}</span>
        </p>
        <span className="text-danger fw-bold p-1" onClick={deleteHandler}>
          x
        </span>
      </div>
    </li>
  );
};

export default React.memo(Task);
