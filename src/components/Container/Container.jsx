import React from "react";
import AddTask from "../AddTask/AddTask";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import head from "../../assets/head.png";
import styles from "./Container.module.scss";
const Container = () => {
  return (
    <div className={styles.main}>
      <div>
        <img src={head} alt="head" />
      </div>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default Container;
