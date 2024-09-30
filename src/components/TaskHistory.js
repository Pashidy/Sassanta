import React from 'react';
import '../styles/TaskHistory.css';

const TaskHistory = ({ tasks }) => {
  return (
    <div className="task-history">
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>{task.name}</div>
            <div>{task.completedAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskHistory;
