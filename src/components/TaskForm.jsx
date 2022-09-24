import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
// useDispatch llama a una funcion y useSelector llama un dato
// Se deben importar las funciones que creamos en el reducer
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();

  // Form

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const description = event.target.value;

    setTask({
      ...task,
      [name]: description,
      id: nanoid(5),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch llama a la funcion del reducer
    // addTask, recibe (state, action). Nuestra action sería la info recolectada del form
    //dispatch(addTask("mi parametro"));
    dispatch(addTask(task));
  };

  //

  return (
    <div className="border rounded-lg flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="border rounded-md my-2 px-2">
          <input
            onChange={handleChange}
            type="text"
            placeholder="title"
            name="title"
          />
        </div>
        <div onChange={handleChange} className="border rounded-md my-2 px-2">
          <textarea
            name="description"
            id=""
            placeholder="description"
          ></textarea>
        </div>

        <button className="w-full text-center border rounded-md font-semibold bg-blue-500 text-white">
          Save
        </button>
      </form>
    </div>
  );
};
