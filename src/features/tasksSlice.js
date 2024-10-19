// import { createSlice } from "@reduxjs/toolkit";

// // Load tasks from localStorage
// const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: initialTasks,
//   },
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//     },
//     moveTask: (state, action) => {
//       const { taskId, newStatus } = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       if (task) {
//         task.status = newStatus;
//         localStorage.setItem("tasks", JSON.stringify(state.tasks));
//       }
//     },
//   },
// });

// export const { addTask, moveTask } = tasksSlice.actions;
// export default tasksSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = newStatus;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
