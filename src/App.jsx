import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

export const App = () => {
  return (
    <div className="container w-full border rounded-xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-xl ">App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/create-task" element={<TaskForm />}></Route>
          <Route path="/edit-task/:id" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
