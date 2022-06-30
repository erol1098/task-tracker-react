import React, { useEffect } from "react";
import Container from "./components/Container/Container";
import { TaskTrackerProvider } from "./util/task-tracker";

const App = () => {
  // useEffect(() => {
  //   localStorage.getItem("task-tracker") ||
  //     localStorage.setItem("task-tracker", JSON.stringify([]));
  // }, []);
  localStorage.setItem("task-tracker", JSON.stringify([]));
  return (
    <TaskTrackerProvider>
      <Container />
    </TaskTrackerProvider>
  );
};

export default App;
