import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { addProject, setProjects } = portfolioSlice.actions;

export default portfolioSlice.reducer;
