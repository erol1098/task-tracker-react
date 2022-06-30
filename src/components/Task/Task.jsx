import React, { useContext, useEffect, useState } from "react";
import TaskTracker from "../../util/task-tracker";

const Task = (props) => {
  const { userTasks, setUserTasks } = useContext(TaskTracker);
  const { id, task, time, isDone } = props.data;
  const [done, setDone] = useState(false);
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

  const doneClass = isDone
    ? "d-flex flex-column text-decoration-line-through"
    : "d-flex flex-column";

  return (
    <li className="d-flex justify-content-between align-items-center " id={id}>
      <p className={doneClass} onClick={doneHandler}>
        <span>{task}</span>
        <span>{time}</span>
      </p>
      <span className="text-danger fw-bold p-0" onClick={deleteHandler}>
        x
      </span>
    </li>
  );
};

export default React.memo(Task);
