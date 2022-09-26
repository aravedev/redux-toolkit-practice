import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
// useDispatch llama a una funcion y useSelector llama un dato
// Se deben importar las funciones que creamos en el reducer
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";

// Importing react router dom
//useParams sirve para saber si estamos en un item editandolo o leyendo info especifica
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const [cancel, setCancel] = useState(false);
  // Form

  const [taskLocalForm, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const description = event.target.value;

    setTask({
      ...taskLocalForm,
      [name]: description,
      id: nanoid(5),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // revisando si params.id existe para editar la tarea

    if (params.id) {
      console.log(params.id);
      const newObj = {
        ...taskLocalForm,
        id: params.id,
      };
      dispatch(editTask(newObj));
    } else if (cancel) {
      navigate("/");
    } else {
      // si no existe params.id entonces crea la nueva tarea
      // dispatch llama a la funcion del reducer
      // addTask, recibe (state, action). Nuestra action sería la info recolectada del form
      //dispatch(addTask("mi parametro"));

      //console.log(params.id);

      dispatch(addTask(taskLocalForm));
    }

    // dispatch(addTask(taskLocalForm));
    navigate("/");
  };

  // Revisando si el formulario es para editar
  useEffect(() => {
    if (params.id) {
      // Aqui buscamos si la tarea existe dentro del estado global tasks y lo asignamos al useState local
      const editTask = tasks.find((task) => task.id === params.id);
      setTask(editTask);
    }
  }, []);

  //console.log(taskLocalForm);
  //

  return (
    <div className="border rounded-lg flex flex-col">
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <div className=" my-2 px-2">
          <label htmlFor="title" className="text-sm font-mono font-bold ">
            Task:
          </label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="title"
            name="title"
            defaultValue={taskLocalForm.title}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          />
        </div>
        <div onChange={handleChange} className=" my-2 px-2">
          <label
            htmlFor="description"
            className="block text-sm font-mono font-bold"
          >
            Description:
          </label>
          <textarea
            name="description"
            id=""
            placeholder="description"
            defaultValue={taskLocalForm.description}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          ></textarea>
        </div>

        <button className="mb-4 w-full text-center border rounded-md font-semibold bg-blue-500 hover:bg-blue-800 text-white py-2">
          Save
        </button>
        <button
          className="mb-4 w-full text-center border rounded-md font-semibold bg-red-500 hover:bg-red-800 text-white py-2"
          onClick={() => setCancel(true)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
