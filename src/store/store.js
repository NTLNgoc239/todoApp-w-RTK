import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todo/todo.reducer";

export default configureStore({
  reducer: {
    tasks: taskReducer,

  }
});