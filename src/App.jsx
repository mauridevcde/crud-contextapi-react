import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NotFound";
import TaskForm  from "./pages/TaskForm";
import { TaskPages } from "./pages/TaskPages";
import { TaskContextProvider } from "./context/TaskProvider";

export const App = () => {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPages />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
};
