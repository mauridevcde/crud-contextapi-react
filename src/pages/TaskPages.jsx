import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.api";
import { TaskCards } from "../components/TaskCards";
import { useTask  } from "../context/TaskProvider";

export const TaskPages = () => {
  
  const {tasks, getTasks} = useTask()

  useEffect(() => {
    getTasks();
  }, []);
  console.log("soy el estado: ", tasks);
  return (
    <>
      <h1></h1>
      <ul>
        {tasks.map((task) => (
         <TaskCards key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};
