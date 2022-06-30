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
    console.log(done);
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
    ? "text-decoration-line-through w-100 py-2 m-0 "
    : "w-100 py-2 m-0";

  return (
    <li
      className="d-flex justify-content-between align-items-center border border-primary"
      id={id}
    >
      <p className={doneClass} onClick={doneHandler}>
        {task}
      </p>
      <span className="text-danger fw-bold" onClick={deleteHandler}>
        x
      </span>
    </li>
  );
};

export default React.memo(Task);
