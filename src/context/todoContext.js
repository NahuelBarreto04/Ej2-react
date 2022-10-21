import React, { createContext, useState } from "react";
export const TaskContext = createContext();
export const TodoContext = ({ children }) => {
  const $tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState($tasks);
  console.log(tasks);
  const updateLocal = (element) => {
    return localStorage.setItem("tasks", JSON.stringify(element));
  };
  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateLocal }}>
      {children}
    </TaskContext.Provider>
  );
};
