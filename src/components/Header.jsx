import React, { useState, useEffect, useRef } from "react";
import projectIcon from "../images/projecticon.png";
import inviteIcon from "../images/invite.png";
import profileImage from "../images/profileName.png";
import iconsImage from "../images/3icons.png";
import iconsImage2 from "../images/2icon.png";
import iconsImage4 from "../images/4icon.png";
import arrowdown from "../images/arrow-down.png";
import filter from "../images/filter.png";
import calender from "../images/calendar.png";
import profile from "../images/profile-2user.png";

const Header = ({ selectedProjectName, tasks, onFilterTasks }) => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    filterTasksByDate(filter);
    setDropdownOpen(false);
  };

  const filterTasksByDate = (filter) => {
    const today = new Date();
    let filteredTasks = [];

    switch (filter) {
      case "Today":
        filteredTasks = tasks.filter((task) => {
          const taskDate = new Date(task.date);
          return taskDate.toDateString() === today.toDateString();
        });
        break;
      case "Yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        filteredTasks = tasks.filter((task) => {
          const taskDate = new Date(task.date);
          return taskDate.toDateString() === yesterday.toDateString();
        });
        break;
      case "This Week":
        const startOfWeek = new Date(
          today.setDate(today.getDate() - today.getDay())
        );
        filteredTasks = tasks.filter((task) => {
          const taskDate = new Date(task.date);
          return taskDate >= startOfWeek && taskDate <= today;
        });
        break;
      default:
        filteredTasks = tasks;
        break;
    }

    onFilterTasks(filteredTasks);
  };

  return (
    <div className="bg-white mt-3">
      <header className="flex justify-between items-center px-12 py-0">
        <div className="flex items-center w-1/2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for anything..."
              className="rounded-lg px-12 py-4 text-sm w-full bg-gray-50 placeholder-gray-500"
              style={{ height: "30px", backgroundColor: "#F5F5F5" }}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 4a6 6 0 014.473 10.193l5.525 5.524a1 1 0 11-1.414 1.414l-5.525-5.524A6 6 0 118 4z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-20">
          <img src={iconsImage} alt="icons" className="h-5" />

          <div className="flex items-center space-x-5">
            <div className="text-xs text-gray-700">
              <p className="font-semibold">Palak Jain</p>
              <p className="text-gray-500">Rajasthan, India</p>
            </div>
            <img
              className="w-7 h-7 rounded-full"
              src={profileImage}
              alt="Profile"
            />
            <img src={arrowdown} alt="Arrow down" />
          </div>
        </div>
      </header>

      <hr className="mt-4" />

      <div className="flex justify-between items-center py-4 px-12">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedProjectName}
          </h1>
          <div className="flex items-center space-x-5">
            <img
              src={projectIcon}
              alt="Project Icon"
              className="ml-4 mt-2 h-6 w-12"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img src={inviteIcon} alt="Invite Icon" className="h-8" />
        </div>
      </div>

      <div className="flex justify-between items-center py-3 px-12">
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center border rounded-md px-4 py-2 text-sm"
            style={{
              color: "#787486",
              borderColor: "#787486",
              borderWidth: "1px",
            }}
          >
            <img src={filter} alt="Filter Icon" className="mr-2 h-4 w-4" />
            <span>Filter</span>
            <img src={arrowdown} alt="Arrow Down" className="ml-2 h-3 w-3" />
          </button>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center border rounded-md px-4 py-2 text-sm"
              style={{
                color: "#787486",
                borderColor: "#787486",
                borderWidth: "1px",
              }}
            >
              <img
                src={calender}
                alt="Calendar Icon"
                className="mr-2 h-4 w-4"
              />
              <span>{selectedFilter}</span>
              <img src={arrowdown} alt="Arrow Down" className="ml-2 h-3 w-3" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2">
                <ul className="py-1">
                  <li
                    onClick={() => handleFilterChange("Today")}
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    Today
                  </li>
                  <li
                    onClick={() => handleFilterChange("Yesterday")}
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    Yesterday
                  </li>
                  <li
                    onClick={() => handleFilterChange("This Week")}
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    This Week
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="flex items-center border rounded-md px-4 py-2 text-sm"
            style={{
              color: "#787486",
              borderColor: "#787486",
              borderWidth: "1px",
            }}
          >
            <img src={profile} alt="Profile Icon" className="mr-2 h-4 w-4" />
            <span>Share</span>
          </button>
          <div className="w-[1px] h-[28px] bg-[#787486] mx-2"></div>
          <button className="flex items-center rounded-md p-1">
            <span className="h-8 w-8 block">
              <img src={iconsImage2} alt="Action Menu 1" />
            </span>
          </button>
          <button className="flex items-center rounded-md p-1">
            <span className="h-6 w-8 block">
              <img src={iconsImage4} alt="Action Menu 2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
