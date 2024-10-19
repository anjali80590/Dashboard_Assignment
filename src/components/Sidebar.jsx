import React, { useState } from "react";
import projectMIcon from "../images/icon.png";
import homeIcon from "../images/category.png";
import messageIcon from "../images/message.png";
import tasksIcon from "../images/task-square.png";
import membersIcon from "../images/Group 615.png";
import settingsIcon from "../images/setting-2.png";
import plusIcon from "../images/add-square.png";
import collapseIcon from "../images/Group 639 (1).png";
import backgroundImage from "../images/Union.png";

const Sidebar = ({ projects, onSelectProject, onAddProject }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
    onSelectProject(projectId);
  };

  return (
    <div className="w-56 bg-white h-screen shadow-md">
      <div className="flex items-center space-x-5 mt-4 px-3">
        <img src={projectMIcon} alt="Project M Icon" className="w-6 h-6" />
        <h1 className="text-lg font-bold ">Project M</h1>
        <img
          src={collapseIcon}
          alt="Collapse Sidebar"
          className="ml-auto w-5 h-5 cursor-pointer"
        />
      </div>

      <hr className="w-full mt-4" />

      <ul className="space-y-5 mt-4 px-4">
        <li
          className="flex items-center space-x-4 text-gray-500 cursor-pointer hover:text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.36px",
          }}
        >
          <img src={homeIcon} alt="Home" className="h-5 w-5" />
          <span>Home</span>
        </li>
        <li
          className="flex items-center space-x-4 text-gray-500 cursor-pointer hover:text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.36px",
          }}
        >
          <img src={messageIcon} alt="Messages" className="h-5 w-5" />
          <span>Messages</span>
        </li>
        <li
          className="flex items-center space-x-4 text-gray-500 cursor-pointer hover:text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.36px",
          }}
        >
          <img src={tasksIcon} alt="Tasks" className="h-5 w-5" />
          <span>Tasks</span>
        </li>
        <li
          className="flex items-center space-x-4 text-gray-500 cursor-pointer hover:text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.36px",
          }}
        >
          <img src={membersIcon} alt="Members" className="h-5 w-5" />
          <span>Members</span>
        </li>
        <li
          className="flex items-center space-x-4 text-gray-500 cursor-pointer hover:text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.36px",
          }}
        >
          <img src={settingsIcon} alt="Settings" className="h-5 w-5" />
          <span>Settings</span>
        </li>
      </ul>
      <hr className="w-full mt-4" />

      <div className="mt-7 px-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-500 font-semibold text-xs">MY PROJECTS</h2>
          <button onClick={onAddProject}>
            <img src={plusIcon} alt="Add Project" className="w-4 h-4" />
          </button>
        </div>

        <ul className="h-40 overflow-y-auto">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`cursor-pointer flex items-center justify-between px-2 py-2 rounded-md mb-2 ${
                project.id === selectedProject
                  ? "bg-purple-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSelectProject(project.id)}
            >
              <div className="flex items-center space-x-1">
                <span
                  className={`h-2 w-2 rounded-full mr-2 ${project.color}`}
                ></span>
                <span
                  className={`text-sm  ${
                    project.id === selectedProject
                      ? "font-bold text-black"
                      : "font-normal text-gray-600"
                  }`}
                >
                  {project.name}
                </span>
              </div>
              {project.id === selectedProject && (
                <span className="text-lg h-5 mb-4 w-8 text-black font-bold">
                  ...
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex flex-col items-center mt-5">
        <div className="relative">
          <img
            src={backgroundImage}
            alt="Thoughts Time Background"
            style={{ width: "200px", height: "200px" }}
          />

          <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 bg-yellow-100 p-2 rounded-full shadow-md">
            <span className="text-yellow-500 text-3xl">💡</span>
          </div>
        </div>

        <div className="absolute top-14 text-center px-4">
          <h3 className="text-sm font-semibold">Thoughts Time</h3>
          <p className="text-[10px] text-gray-600 mt-2">
            We don’t have any notice for you <br /> Till then, you can share{" "}
            <br /> your thoughts with your <br /> peers.
          </p>

          <button className="bg-white text-gray-800 font-semibold text-sm py-2 px-4 rounded-md shadow mt-3">
            Write a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
