import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import styles from "./Container.module.scss";
const Container = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div className={styles.main}>
      <Header getToggle={toggleHandler} />
      <AddTask toggle={toggle} />
      <Tasks />
    </div>
  );
};

export default Container;
