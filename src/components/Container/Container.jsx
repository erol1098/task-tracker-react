import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";

const Container = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center shadow mx-auto p-4"
      style={{ width: "30rem" }}
    >
      <Header getToggle={toggleHandler} />
      <AddTask toggle={toggle} />
      <Tasks />
    </div>
  );
};

export default Container;
