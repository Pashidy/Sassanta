import React, { useState } from 'react';
import '../styles/TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('work');

  // Add new task
  const addTask = () => {
    const newTask = { name: taskName, priority, category, id: Date.now() };
    setTasks([...tasks, newTask]);
    setTaskName('');  // Clear input field
  };

  // Delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="task-input">
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          placeholder="Enter task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
	<button onClick={addTask}>Add Task</button>
    </div>
    <div className="task-list">
      {tasks.map(task => (
	<div key={task.id} className="task-item">
	  <p>{task.name} - {task.priority} - {task.category}</p>
	  <button onClick={() => deleteTask(task.id)}>Delete</button>
	</div>
      ))}
    </div>
  </div>
  );
};

export default TaskManager;
