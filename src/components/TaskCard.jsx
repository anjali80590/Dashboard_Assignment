import React from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../features/tasksSlice";
import { ChatBubbleLeftIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import avatarIcon from "../images/Group 633.png";

const TaskCard = ({ task, onMoveTask }) => {
  const dispatch = useDispatch();

  const priorityStyles = {
    low: "bg-orange-100 text-orange-600",
    high: "bg-pink-100 text-pink-600",
    completed: "bg-green-100 text-green-600",
  };

  const handleMoveTask = (status) => {
    dispatch(moveTask({ taskId: task.id, newStatus: status }));
    onMoveTask(task.id, status);
  };

  return (
    <div className="p-2 px-4 bg-white rounded-lg shadow-md mb-4 w-full max-w-sm">
      <div
        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
          priorityStyles[task.priority]
        }`}
      >
        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </div>

      <h3 className="text-md font-semibold mt-1">{task.name}</h3>

      <p className="text-xs text-gray-600 mt-1">{task.description}</p>

      <div className="flex justify-between items-center mt-3">
        <div className="flex -space-x-2">
          <img
            src={avatarIcon}
            alt="Avatars"
            className="w-18 h-6 rounded-full border-2 border-white"
          />
        </div>

        <div className="flex items-center space-x-4 text-gray-500 text-xs">
          <div className="flex items-center space-x-1">
            <ChatBubbleLeftIcon className="h-4 w-4" />
            <span>{task.comments} comments</span>
          </div>

          <div className="flex items-center space-x-1">
            <PaperClipIcon className="h-4 w-4" />
            <span>{task.files} files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
