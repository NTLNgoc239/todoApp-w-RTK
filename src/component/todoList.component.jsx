import React from 'react';
import TodoItem from './todoItem.component';
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;