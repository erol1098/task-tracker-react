import React from "react";

const Task = (props) => {
  const { task, time, isDone } = props.data;
  // console.log(props.data);

  const taskClass = isDone
    ? "d-flex flex-column gap-1 text-alert"
    : "d-flex flex-column gap-1 border border-primary";

  return (
    <li className={taskClass}>
      <span>{task}</span>
      <span>{time}</span>
    </li>
  );
};

export default Task;
