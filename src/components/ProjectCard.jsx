import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h3 className="font-bold text-gray-800">{project.name}</h3>
      <div className={`w-4 h-4 ${project.color} rounded-full`} />
    </div>
  );
};

export default ProjectCard;
