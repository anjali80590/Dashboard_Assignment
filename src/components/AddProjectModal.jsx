import React, { useState } from "react";
import Modal from "./Modal";

// Define the 7 color options
const colorOptions = [
  { name: "Green", value: "bg-green-500" },
  { name: "Yellow", value: "bg-yellow-500" },
  { name: "Orange", value: "bg-orange-500" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Purple", value: "bg-purple-500" },
  { name: "Pink", value: "bg-pink-500" },
  { name: "Gray", value: "bg-gray-500" },
];

const AddProjectModal = ({ show, onClose, onAddProject }) => {
  const [projectName, setProjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);

  const handleAddProject = () => {
    if (projectName.trim()) {
      onAddProject(projectName, selectedColor);
      setProjectName("");
      onClose();
    }
  };

  return (
    <Modal className="h-5 w-5" show={show} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>

      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        className="w-full p-2 border rounded mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">Choose a color:</h3>
      <div className="flex space-x-2 mb-4">
        {colorOptions.map((color) => (
          <button
            key={color.name}
            className={`h-5 w-5 rounded-full border-2 focus:outline-none ${
              color.value
            } ${
              selectedColor === color.value
                ? "ring-2 ring-offset-2 ring-blue-500"
                : ""
            }`}
            onClick={() => setSelectedColor(color.value)}
          />
        ))}
      </div>

      <button
        onClick={handleAddProject}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Project
      </button>
    </Modal>
  );
};

export default AddProjectModal;
