import React, { useState } from 'react';
import '../styles/TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('work');
  const [urgency, setUrgency] = useState('notUrgent');
  const [importance, setImportance] = useState('notImportant');

  // Add new task
  const addTask = () => {
    const newTask = { name: taskName, priority, category, urgency, importance, id: Date.now() };
    setTasks([...tasks, newTask]);
    setTaskName('');  // Clear input field
  };

  // Delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Filter tasks by quadrant
  const filterTasks = (urgency, importance) => {
    return tasks.filter(task => task.urgency === urgency && task.importance === importance);
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
        <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value="urgent">Urgent</option>
          <option value="notUrgent">Not Urgent</option>
        </select>
        <select value={importance} onChange={(e) => setImportance(e.target.value)}>
          <option value="important">Important</option>
          <option value="notImportant">Not Important</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="quadrants">
        <div className="quadrant">
          <h3>Urgent & Important</h3>
          {filterTasks('urgent', 'important').map(task => (
            <div key={task.id} className="task-item">
              <p>{task.name}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="quadrant">
          <h3>Not Urgent & Not Important</h3>
          {filterTasks('notUrgent', 'notImportant').map(task => (
            <div key={task.id} className="task-item">
              <p>{task.name}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="quadrant">
          <h3>Not Urgent but Important</h3>
          {filterTasks('notUrgent', 'important').map(task => (
            <div key={task.id} className="task-item">
              <p>{task.name}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="quadrant">
          <h3>Urgent but Not Important</h3>
          {filterTasks('urgent', 'notImportant').map(task => (
            <div key={task.id} className="task-item">
              <p>{task.name}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
