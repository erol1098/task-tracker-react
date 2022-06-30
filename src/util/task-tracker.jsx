import { createContext, useEffect, useState } from "react";

const TaskTracker = createContext();
export const TaskTrackerProvider = (props) => {
  const [userTasks, setUserTasks] = useState(
    JSON.parse(localStorage.getItem("task-tracker")) || []
  );
  const [done, setDone] = useState(true);
  const values = { userTasks, setUserTasks, done, setDone };

  useEffect(() => {
    localStorage.setItem("task-tracker", JSON.stringify(userTasks));
  }, [userTasks]);

  return (
    <TaskTracker.Provider value={values}>{props.children}</TaskTracker.Provider>
  );
};
export default TaskTracker;
