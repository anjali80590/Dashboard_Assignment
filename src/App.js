

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Header from "./components/Header";
// import AddProjectModal from "./components/AddProjectModal";
// import { addTask, moveTask } from "./features/tasksSlice";
// import { addProject } from "./features/projectsSlice";

// const App = () => {
//   const projects = useSelector((state) => state.projects.projects); // Accessing the projects from the Redux store
//   const tasks = useSelector((state) => state.tasks.tasks); // Accessing the tasks from the Redux store
//   const dispatch = useDispatch();

//   const [showProjectModal, setShowProjectModal] = useState(false); // Modal for adding project
//   const [selectedProject, setSelectedProject] = useState(null); // State for selected project
//   const [filteredTasks, setFilteredTasks] = useState(tasks); // State for filtered tasks

//   // Load the first project by default if not selected
//   useEffect(() => {
//     if (projects.length > 0 && !selectedProject) {
//       setSelectedProject(projects[0].id);
//     }
//   }, [projects, selectedProject]);

//   // Function to handle project selection
//   const handleSelectProject = (projectId) => {
//     setSelectedProject(projectId);
//   };

//   // Function to handle adding a project
//   const handleAddProject = (name, color) => {
//     const newProject = { id: Date.now(), name, color };
//     dispatch(addProject(newProject)); // Dispatching new project to Redux
//     setSelectedProject(newProject.id); // Automatically select the new project
//   };

//   // Function to handle adding a task
//   const handleAddTask = (newTask) => {
//     newTask.projectId = selectedProject; // Assign selected project ID to new task
//     dispatch(addTask(newTask)); // Dispatching the new task to Redux
//   };

//   // Function to handle moving tasks
//   const handleMoveTask = (taskId, newStatus) => {
//     dispatch(moveTask({ taskId, status: newStatus })); // Dispatch moveTask action to Redux
//   };

//   // Function to filter tasks based on the selected filter in the Header
//   const handleFilterTasks = (filteredTasks) => {
//     setFilteredTasks(filteredTasks); // Update the state with the filtered tasks
//   };

//   // Filter tasks based on the selected project
//   const selectedProjectTasks = selectedProject
//     ? tasks.filter((task) => task.projectId === selectedProject)
//     : [];

//   return (
//     <div className="flex h-screen">
//       <Sidebar
//         projects={projects}
//         onSelectProject={handleSelectProject}
//         onAddProject={() => setShowProjectModal(true)} // Open project modal
//       />

//       <div className="flex-grow flex flex-col border-l border-gray-300">
//         <Header
//           selectedProjectName={
//             projects.find((proj) => proj.id === selectedProject)?.name || ""
//           }
//           tasks={selectedProjectTasks} // Pass tasks as a prop to Header
//           onFilterTasks={handleFilterTasks} // Pass filter function to Header
//         />

//         <div className="flex-grow p-4">
//           <Dashboard
//             tasks={filteredTasks} // Use filteredTasks here instead of selectedProjectTasks
//             onAddTask={handleAddTask}
//             onMoveTask={handleMoveTask}
//           />
//         </div>
//       </div>

//       {/* Add Project Modal */}
//       <AddProjectModal
//         show={showProjectModal}
//         onClose={() => setShowProjectModal(false)}
//         onAddProject={handleAddProject}
//       />
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AddProjectModal from "./components/AddProjectModal";
import { addTask, moveTask } from "./features/tasksSlice";
import { addProject } from "./features/projectsSlice";

const App = () => {
  const projects = useSelector((state) => state.projects.projects); // Accessing the projects from Redux store
  const tasks = useSelector((state) => state.tasks.tasks); // Accessing the tasks from Redux store
  const dispatch = useDispatch();

  const [showProjectModal, setShowProjectModal] = useState(false); // Modal for adding project
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project
  const [filteredTasks, setFilteredTasks] = useState([]); // State for storing filtered tasks

  // Load the first project by default if none selected
  useEffect(() => {
    if (projects.length > 0 && !selectedProject) {
      setSelectedProject(projects[0].id);
    }
  }, [projects, selectedProject]);

  // Update tasks whenever the selected project or tasks list changes
  useEffect(() => {
    if (selectedProject) {
      setFilteredTasks(
        tasks.filter((task) => task.projectId === selectedProject)
      );
    }
  }, [tasks, selectedProject]);

  // Function to handle project selection
  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
  };

  // Function to handle adding a new project
  const handleAddProject = (name, color) => {
    const newProject = { id: Date.now(), name, color };
    dispatch(addProject(newProject)); // Dispatch new project to Redux
    setSelectedProject(newProject.id); // Automatically select the new project
  };

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    newTask.projectId = selectedProject; // Assign selected project ID to the new task
    dispatch(addTask(newTask)); // Dispatch new task to Redux
  };

  // Function to handle moving tasks between statuses (To Do, Progress, Done)
  const handleMoveTask = (taskId, newStatus) => {
    dispatch(moveTask({ taskId, status: newStatus })); // Dispatch moveTask action to Redux
  };

  // Filter tasks based on selected filter in Header (e.g., Today, Yesterday, This Week)

    // Function to filter tasks based on the selected filter in the Header
    const handleFilterTasks = (filteredTasks) => {
      setFilteredTasks(filteredTasks); // Update the state with the filtered tasks
    };

    // Filter tasks based on the selected project
    const selectedProjectTasks = selectedProject
      ? tasks.filter((task) => task.projectId === selectedProject)
      : [];

  // const filterTasksByDate = (filterType) => {
  //   const today = new Date();
  //   let filtered = tasks;

  //   if (filterType === "Today") {
  //     filtered = tasks.filter((task) => {
  //       const taskDate = new Date(task.date); // Assuming task.date exists
  //       return taskDate.toDateString() === today.toDateString();
  //     });
  //   } else if (filterType === "Yesterday") {
  //     const yesterday = new Date(today);
  //     yesterday.setDate(today.getDate() - 1);
  //     filtered = tasks.filter((task) => {
  //       const taskDate = new Date(task.date);
  //       return taskDate.toDateString() === yesterday.toDateString();
  //     });
  //   } else if (filterType === "This Week") {
  //     const startOfWeek = new Date(
  //       today.setDate(today.getDate() - today.getDay())
  //     );
  //     filtered = tasks.filter((task) => {
  //       const taskDate = new Date(task.date);
  //       return taskDate >= startOfWeek && taskDate <= today;
  //     });
  //   }

  //   setFilteredTasks(filtered);
  // };

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projects}
        onSelectProject={handleSelectProject}
        onAddProject={() => setShowProjectModal(true)} // Open modal to add a new project
      />

      <div className="flex-grow flex flex-col border-l border-gray-300">
        {/* <Header
          selectedProjectName={
            projects.find((proj) => proj.id === selectedProject)?.name || ""
          }
          onFilterTasks={filterTasksByDate} // Pass the filter function to Header
        /> */} 
        <Header
          selectedProjectName={
            projects.find((proj) => proj.id === selectedProject)?.name || ""
          }
          tasks={selectedProjectTasks} // Pass tasks as a prop to Header
          onFilterTasks={handleFilterTasks} // Pass filter function to Header
        />

        <div className="flex-grow p-4">
          <Dashboard
            tasks={filteredTasks} // Pass the filtered tasks to Dashboard
            onAddTask={handleAddTask}
            onMoveTask={handleMoveTask}
          />
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        show={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
};

export default App;