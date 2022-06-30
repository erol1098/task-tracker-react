import React, { useState } from "react";
import Button from "./Button/Button";

const Header = ({ getToggle }) => {
  const [toggle, setToggle] = useState("false");
  const toggleHandler = (t) => {
    setToggle((prevToggle) => t);
    getToggle(toggle);
  };
  return (
    <header className="d-flex flex-column gap-2 py-3">
      <h1>Task Tracker</h1>
      <Button getToggle={toggleHandler} />
    </header>
  );
};

export default Header;
