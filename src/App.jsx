import React from "react";
import { useSelector } from "react-redux";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

export const App = () => {
  return (
    <div className="container w-full border rounded-xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-xl ">App</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
};
