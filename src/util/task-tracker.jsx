import { createContext, useEffect, useState } from "react";

const TaskTracker = createContext();
export const TaskTrackerProvider = (props) => {
  const [userTasks, setUserTasks] = useState();
  const values = { userTasks, setUserTasks };

  useEffect(() => {
    localStorage.setItem("task-tracker", JSON.stringify(userTasks));
  }, [userTasks]);

  return (
    <TaskTracker.Provider value={values}>{props.children}</TaskTracker.Provider>
  );
};
export default TaskTracker;
