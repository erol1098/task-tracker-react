import React, { useContext } from "react";
import Task from "../Task/Task";
import TaskTracker from "../../util/task-tracker";
const Tasks = () => {
  const { userTasks } = useContext(TaskTracker);
  return (
    <section>
      <ul>
        {userTasks.map((item) => {
          const { id, ...data } = item;
          return <Task key={id} data={data} />;
        }) || <li>No Item Found</li>}
      </ul>
    </section>
  );
};

export default Tasks;
