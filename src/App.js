import "./App.css";
import React, { useState, useEffect } from "react";
import Leftbar from "./components/leftbar/LeftBar";
import Rightbar from "./components/rightbar/RightBar";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log("Saved to local storage:", localStorage.getItem("projects"));
  };

  const onTasksUpdate = (projectId, updatedTasks) => {
    console.log("Before update:", projects);

    const updatedProjects = projects.map((project) =>
      project.id === projectId ? { ...project, tasks: updatedTasks } : project
    );

    console.log("After update:", updatedProjects);

    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);

    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject({ ...selectedProject, tasks: updatedTasks });
    }
  };

  return (
    <div className="App">
      <Leftbar
        onSelectProject={setSelectedProject}
        projects={projects}
        saveProjectsToLocalStorage={saveProjectsToLocalStorage}
      />
      {selectedProject && (
        <Rightbar
          project={selectedProject}
          tasks={selectedProject.tasks}
          onTasksUpdate={onTasksUpdate}
        />
      )}
    </div>
  );
}
