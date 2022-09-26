import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

export const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />}></Route>
            <Route path="/create-task" element={<TaskForm />}></Route>
            <Route path="/edit-task/:id" element={<TaskForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
