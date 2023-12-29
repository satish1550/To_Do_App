import './rightbar.css'
import React, { useState } from "react";
import sidebar from "../../images/sidebar.svg";
import ToDo from "../assests/ToDo";
import InProgress from "../assests/InProgress";
import InReview from "../assests/InReview";
import Completed from "../assests/Completed";
import TaskModal from "../assests/TaskModal";

export default function Rightbar({ project, tasks, onTasksUpdate }) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = (newTask) => {
    const updatedTasks = [
      ...project.tasks,
      { ...newTask, id: Date.now(), status: newTask.status || "ToDo" },
    ];
    onTasksUpdate(project.id, updatedTasks);
  };
  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    onTasksUpdate(project.id, updatedTasks);
  };

  const openTaskModalToAdd = (status) => {
    setCurrentTask({ status: status });
    setIsTaskModalOpen(true);
  };

  const openTaskModalToEdit = (task) => {
    setCurrentTask(task);
    setIsTaskModalOpen(true);
  };

  return (
    <div className="rightBar">
      <div className="rightBarTop">
        <h1 className="rightBarTopText">{project.name}</h1>
      </div>
      <hr />
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onSubmit={
          currentTask && currentTask.id ? handleEditTask : handleAddTask
        }
        initialTask={currentTask}
      />
      <div className="rightBarMiddle">
        <ToDo
          tasks={tasks.filter((task) => task.status === "ToDo")}
          onAddTask={() => openTaskModalToAdd("ToDo")}
          onEdit={openTaskModalToEdit}
        />
        <img src={sidebar} alt="sidebar" className="sidebarImage" />
        <InProgress
          tasks={tasks.filter((task) => task.status === "InProgress")}
          onAddTask={() => openTaskModalToAdd("InProgress")}
          onEdit={openTaskModalToEdit}
        />
        <img src={sidebar} alt="sidebar" className="sidebarImage" />
        <InReview
          tasks={tasks.filter((task) => task.status === "InReview")}
          onAddTask={() => openTaskModalToAdd("InReview")}
          onEdit={openTaskModalToEdit}
        />
        <img src={sidebar} alt="sidebar" className="sidebarImage" />
        <Completed
          tasks={tasks.filter((task) => task.status === "Completed")}
          onAddTask={() => openTaskModalToAdd("Completed")}
          onEdit={openTaskModalToEdit}
        />
      </div>
    </div>
  );
}

