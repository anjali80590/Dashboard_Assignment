import { createSlice } from "@reduxjs/toolkit";
const initialProjects = JSON.parse(localStorage.getItem("projects")) || [];

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: initialProjects,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
      localStorage.setItem("projects", JSON.stringify(state.projects));
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
      localStorage.setItem("projects", JSON.stringify(state.projects));
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
