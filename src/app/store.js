import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";
import { testSlice } from "../features/tasks/testSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    test: testSlice.reducer,
  },
});
