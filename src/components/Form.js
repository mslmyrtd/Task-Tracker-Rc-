import React, { useState } from "react";
import { FormInput, TaskBar } from "./CardStyled";

export const Form = () => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };
  return (
    <TaskBar>
      <FormInput onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="AddTask"
          onChange={(e) => setTask(e.target.value)}
        />

        <label htmlFor="day">Day & Time</label>
        <input type="text" id="day" placeholder="Add Day & Time" />
        <button>Save Task</button>
      </FormInput>
    </TaskBar>
  );
};
