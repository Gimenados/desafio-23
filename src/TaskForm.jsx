// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim()
      };
      onAddTask(newTask);
      setNewTaskText('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Enter task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        autoCorrect="off" 
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
