import React, { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const Dashboard = ({ tasks, onAddTask, onMoveTask }) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleAddTaskClick = (section) => {
    setCurrentSection(section);
    setShowModal(true);
  };

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const progressTasks = filteredTasks.filter(
    (task) => task.status === "progress"
  );
  const doneTasks = filteredTasks.filter((task) => task.status === "done");

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 px-5">
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#5030E5]">●</span>{" "}
            <h2 className="text-md font-bold">To Do</h2>
            <span className="bg-gray-200 text-gray-600 rounded-full px-2 py-0.5 text-xs">
              {todoTasks.length}
            </span>
          </div>
          <button
            onClick={() => handleAddTaskClick("todo")}
            className="bg-[#EDEFF2] text-[#5030E5] p-0 rounded-half border border-[#5030E5]"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="border-b-4 border-[#5030E5] mb-4"></div>
        {todoTasks.map((task) => (
          <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#FFA500]">●</span>{" "}
            <h2 className="text-md font-bold">In Progress</h2>
            <span className="bg-gray-200 text-gray-600 rounded-full px-2 py-0.5 text-xs">
              {progressTasks.length}
            </span>
          </div>
          <button
            onClick={() => handleAddTaskClick("progress")}
            className="bg-[#EDEFF2] text-[#FFA500] p-0 rounded-half border border-[#FFA500]"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="border-b-4 border-[#FFA500] mb-4"></div>
        {progressTasks.map((task) => (
          <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#8BC48A]">●</span>
            <h2 className="text-md font-bold">Done</h2>
            <span className="bg-gray-200 text-gray-600 rounded-full px-2 py-0.5 text-xs">
              {doneTasks.length}
            </span>
          </div>
          <button
            onClick={() => handleAddTaskClick("done")}
            className="bg-[#EDEFF2] text-[#8BC48A] p-0 rounded-half border border-[#8BC48A]"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="border-b-4 border-[#8BC48A] mb-4"></div>
        {doneTasks.map((task) => (
          <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
        ))}
      </div>

      {showModal && (
        <AddTaskModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onAddTask={onAddTask}
          section={currentSection}
          l
        />
      )}
    </div>
  );
};

export default Dashboard;
