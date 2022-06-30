import React, { useState } from "react";

const Button = ({ getToggle }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    setToggle((prevToggle) => !prevToggle);
    getToggle(toggle);
  };
  return (
    <>
      {toggle && (
        <button className="btn btn-warning" onClick={toggleHandler}>
          Close Add Task Bar
        </button>
      )}
      {!toggle && (
        <button className="btn btn-success" onClick={toggleHandler}>
          Show Add Task Bar
        </button>
      )}
    </>
  );
};

export default Button;
