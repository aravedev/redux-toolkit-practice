import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },

  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    // state es initialState, action la actualizacion que vamos a mandar
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },

    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const updateTask = state.find((task) => task.id === id);
      if (updateTask) {
        updateTask.title = title;
        updateTask.description = description;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
