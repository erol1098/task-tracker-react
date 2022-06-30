import React, { useContext } from "react";
import Task from "../Task/Task";
import styles from "./Tasks.module.scss";
import TaskTracker from "../../util/task-tracker";
const Tasks = () => {
  const { userTasks } = useContext(TaskTracker);

  return (
    <section className={styles.list}>
      <ul>
        {userTasks.map((item) => {
          const { id } = item;
          return <Task key={id} data={item} />;
        })}
        {userTasks.length < 1 && (
          <li className="text-center fw-bold p-3">No Tasks To Show!</li>
        )}
      </ul>
    </section>
  );
};

export default Tasks;
