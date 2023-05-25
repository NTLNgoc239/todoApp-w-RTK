import { createSelector } from "@reduxjs/toolkit";

export const todoList = createSelector(state => state.tasks)