import { useTask } from "../context/TaskProvider";


export const TaskCards = ({ task }) => {
 
  const { deleteTask } = useTask();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span> {task.done === 1 ? "✔️" : "❌"}</span>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};
