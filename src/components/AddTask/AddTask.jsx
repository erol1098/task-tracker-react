import React, { useContext, useState } from "react";
import TaskTracker from "../../util/task-tracker";

const AddTask = ({ toggle }) => {
  const { setUserTasks } = useContext(TaskTracker);
  const [input, setInput] = useState({
    id: "",
    task: "",
    time: "",
    isDone: 0,
  });
  const { task, time } = input;

  const inputHandler = (e) => {
    return setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
        id: `${Math.random()}`,
      };
    });
  };

  const saveTaskHandler = (e) => {
    e.preventDefault();
    task && time && setUserTasks((prevList) => [...prevList, input]);
    setInput({
      id: "",
      task: "",
      time: "",
      isDone: 0,
    });
  };

  const formClass = toggle
    ? "d-flex flex-column w-50"
    : "d-flex flex-column w-50 d-none";

  return (
    <form className={formClass} onSubmit={saveTaskHandler}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          name="task"
          value={task}
          onChange={inputHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Date & Time
        </label>
        <input
          type="text"
          className="form-control"
          id="time"
          name="time"
          value={time}
          onChange={inputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
