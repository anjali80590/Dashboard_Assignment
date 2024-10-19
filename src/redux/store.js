import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projectsSlice";
// import tasksReducer from "..features/tasksSlice";
import tasksReducer from '../features/tasksSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer, // Ensure projects reducer is added here
    tasks: tasksReducer,
  },
});
