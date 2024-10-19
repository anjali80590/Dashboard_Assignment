import React, { useState } from "react";

const AddTaskModal = ({ show, onClose, onAddTask, section }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("low"); //
  const [taskDate, setTaskDate] = useState("");

  const saveToLocalStorage = (task) => {
    let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
  };

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      status: section,
      priority: taskPriority,
      comments: 0,
      files: 0,
      date: taskDate,
    };

    saveToLocalStorage(newTask);

    onAddTask(newTask);

    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add New Task</h2>

        <input
          type="text"
          placeholder="Task Name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <div className="mb-4">
          <label className="block font-bold mb-2">Choose Date:</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Priority:</label>
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
