import React from "react";
import { FormInput, TaskBar } from "./CardStyled";

export const Form = () => {
  return (
    <TaskBar>
      <FormInput>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" placeholder="AddTask" />

        <label htmlFor="day">Day & Time</label>
        <input type="text" id="day" placeholder="Add Day & Time" />
      </FormInput>
      <button>Save Task</button>
    </TaskBar>
  );
};
