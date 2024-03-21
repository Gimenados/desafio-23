// TaskList.js
import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
