import { useSelector } from "react-redux";

export const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  // const test = useSelector((state) => state.test);
  //console.log(test);
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border mb-5 p-4">
          <h2 className="text-lg font-bold font-mono">{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
