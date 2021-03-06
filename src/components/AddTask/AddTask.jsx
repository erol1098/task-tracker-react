import React, { useContext, useState } from "react";
import TaskTracker from "../../util/task-tracker";

const AddTask = () => {
  const [alert, setAlert] = useState(false);
  const { setUserTasks, toggle } = useContext(TaskTracker);
  const [input, setInput] = useState({
    id: "",
    task: "",
    time: "",
    isDone: 0,
  });
  const { task, time } = input;

  const inputHandler = (e) => {
    setAlert(false);
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
    if (!task || !time) {
      console.log("alerted");
      setAlert(true);
    }
    task && time && setUserTasks((prevList) => [...prevList, input]);
    setInput({
      id: "",
      task: "",
      time: "",
      isDone: 0,
    });
  };

  const formClass = toggle
    ? "d-flex flex-column w-100"
    : "d-flex flex-column d-none w-100";

  return (
    <form className={formClass} onSubmit={saveTaskHandler}>
      <div
        className={`alert alert-danger text-center ${!alert ? "d-none" : ""}`}
        role="alert"
      >
        Please fill the entire fields!
      </div>
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
          type="datetime-local"
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
