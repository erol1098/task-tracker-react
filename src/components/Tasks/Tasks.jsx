import React, { useContext } from "react";
import Task from "../Task/Task";
import styles from "./Tasks.module.scss";
import TaskTracker from "../../util/task-tracker";
const Tasks = () => {
  const { userTasks } = useContext(TaskTracker);

  return (
    <section className={`${styles.list} w-50`}>
      <ul>
        {userTasks.map((item) => {
          const { id } = item;
          return <Task key={id} data={item} />;
        })}
        {userTasks.length < 1 && (
          <li className="text-center py-2">No Item Found</li>
        )}
      </ul>
    </section>
  );
};

export default Tasks;
