import React, { useState } from "react";
import menu from "../../images/menu.svg";
import plus from "../../images/plus.svg";
import NameModal from "../assests/NameModal";
import "./leftbar.css";

export default function Leftbar({ onSelectProject }) {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggleNameModal = () => {
    setIsNameModalOpen(!isNameModalOpen);
  };

  const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const handleAddProject = (newName) => {
    const newProject = {
      id: Date.now(),
      name: newName,
      tasks: [],
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
  };

  const handleSelectProject = (project) => {
    onSelectProject(project);
  };
  return (
    <div>
      <div className="leftBar">
        <div className="leftBarTop">
          <img src={menu} alt="menu" className="leftBarTopLogo" />
          <h1 className="leftBarTopLogoText">To Do App</h1>
        </div>
        <hr />
        <div className="leftBarModdile">
          {projects.map((project) => (
            <h1
              key={project.id}
              className="leftBarModdileTitle"
              onClick={() => handleSelectProject(project)}
            >
              {project.name}
            </h1>
          ))}
        </div>
        <hr />
        <div className="leftBarBottom">
          <img
            src={plus}
            alt="plus"
            className="leftBarBottomImg"
            onClick={toggleNameModal}
          />
          <h1 className="leftBarBottomText">Add new Project</h1>
        </div>
        <NameModal
          isOpen={isNameModalOpen}
          onClose={() => setIsNameModalOpen(false)}
          onSubmit={handleAddProject}
        />
      </div>
    </div>
  );
}
