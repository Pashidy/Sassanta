import React, { useState } from 'react';
import '../styles/PriorityTaskPage.css';

const PriorityTaskPage = ({ priorityName }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [taskTimers, setTaskTimers] = useState({});

  console.log('PriorityTaskPage rendering for:', priorityName);

  // Handle adding a new task
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      timer: 0, // Timer starts at 0
      running: false, // Timer starts in a paused state
    };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  };

  // Handle starting or stopping the timer
  const toggleTimer = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        task.running = !task.running;
      }
      return task;
    }));

    if (!taskTimers[taskId]) {
      const intervalId = setInterval(() => {
        setTasks(tasks => tasks.map(task => {
          if (task.id === taskId && task.running) {
            return { ...task, timer: task.timer + 1 };
          }
          return task;
        }));
      }, 1000);
      setTaskTimers({ ...taskTimers, [taskId]: intervalId });
    } else if (taskTimers[taskId]) {
      clearInterval(taskTimers[taskId]);
      setTaskTimers({ ...taskTimers, [taskId]: null });
    }
  };

  return (
    <div className="priority-page">
      <h2>{priorityName}</h2>

      <div className="task-input">
        <input 
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <p>{task.name}</p>
            <p>Time Spent: {Math.floor(task.timer / 60)}:{('0' + task.timer % 60).slice(-2)}</p>
            <button onClick={() => toggleTimer(task.id)}>
              {task.running ? 'Pause' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityTaskPage;
