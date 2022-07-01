import React, { useContext } from "react";
import TaskTracker from "../../../util/task-tracker";

const Button = () => {
  const { toggle, setToggle } = useContext(TaskTracker);
  const toggleHandler = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <>
      {toggle && (
        <button className="btn btn-warning" onClick={toggleHandler}>
          Close Add Task Bar
        </button>
      )}
      {!toggle && (
        <button className="btn btn-success" onClick={toggleHandler}>
          Show Add Task Bar
        </button>
      )}
    </>
  );
};

export default Button;
