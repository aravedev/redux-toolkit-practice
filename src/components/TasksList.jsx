import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  // console.log(tasks);
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Total Tasks: {tasks.length}</h1>
        <nav className="my-2">
          <Link
            to="/create-task"
            className=" px-4 py-2 border rounded-xl bg-gray-500 hover:bg-slate-700 text-white font-semibold"
          >
            Create Task
          </Link>
        </nav>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border mb-5 p-4 rounded-md bg-neutral-800"
          >
            <header className="flex justify-between items-center">
              <h2 className="text-lg font-bold font-mono">{task.title}</h2>
              <div className="flex justify-between items-center space-x-3">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-4 py-2.5 text-xs font-mono font-semibold border rounded-xl"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 w-full px-2 py-1.5 self-center font-mono font-semibold text-white border rounded-xl hover:bg-red-300"
                >
                  Delete
                </button>
              </div>
            </header>

            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
