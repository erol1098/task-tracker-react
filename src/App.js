import React, { useEffect } from "react";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import { TaskTrackerProvider } from "./util/task-tracker";

const App = () => {
  useEffect(() => {
    localStorage.getItem("task-tracker") ||
      localStorage.setItem("task-tracker", JSON.stringify([]));
  }, []);
  return (
    <TaskTrackerProvider>
      <Card>
        <Container />
      </Card>
    </TaskTrackerProvider>
  );
};

export default App;
