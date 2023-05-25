import React from 'react';
import AddTodo from './component/addTodo.component';
import TodoList from './component/todoList.component';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">My Tasks</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;