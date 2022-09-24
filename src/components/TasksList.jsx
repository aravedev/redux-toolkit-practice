import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

export const TasksList = () => {
  // useSelector(state = is the initialState => state.tasks , tasks is how we called the reducer in store.js)
  const tasks = useSelector((state) => state.tasks);
  // const test = useSelector((state) => state.test);
  //console.log(test);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border mb-5 p-4">
          <h2 className="text-lg font-bold font-mono">{task.title}</h2>
          <p>{task.description}</p>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-red-500 w-full py-1.5 font-mono font-semibold text-white border rounded-xl hover:bg-red-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
