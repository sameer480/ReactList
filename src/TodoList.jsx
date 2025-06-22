import React, { useState } from 'react';

const TodoList = ({ todos = [] }) => {
  const [filterPriority, setFilterPriority] = useState('all');

  const handleFilterChange = (e) => {
    setFilterPriority(e.target.value);
  };

  // Filter todos based on selected priority
  const filteredTodos =
    filterPriority === 'all'
      ? todos
      : todos.filter(todo => todo.priority === filterPriority);

  return (
    <div>
      <h2>Todo List</h2>

      <label htmlFor="priorityFilter">Filter by priority: </label>
      <select id="priorityFilter" value={filterPriority} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <ul>
        {filteredTodos.length === 0 ? (
          <li>No todos found for selected priority.</li>
        ) : (
          filteredTodos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.task}</strong> — <em>{todo.priority}</em>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
//Create a functional component TodoList that accepts a todos prop (array of objects with id, task, priority). Include a dropdown to filter todos by priority ("high", "medium", "low"). Use filter and map to render only todos matching the selected priority.