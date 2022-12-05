import { useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest } from "../api/task.api";
import { TaskContext } from "./TaskContext";

//custom hook para usar el contexto de tareas.
export const useTask = () => {
  const contex = useContext(TaskContext);
  if (!contex) {
    throw new Error("useTask debe estar dentro de TaskProvider");
  }
  return contex;
};

// el taskContext es un objeto que contiene los valores que queremos compartir.
export const TaskContextProvider = ({ children }) => {
  //estado para las tareas
  const [tasks, setTasks] = useState([]);

  //funcion para obtener las tareas
  const getTasks = async () => {
    const response = await getTaskRequest();
    //console.log(response);
    setTasks(response.data);
  };

  //funcion para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);

      const newTaks = tasks.filter((task) => task.id !== id);
      setTasks(newTaks);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para crear una tarea
  const createTask = async (values) => {
    try {
      const response = await createTaskRequest(values);
      console.log(response);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, getTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
