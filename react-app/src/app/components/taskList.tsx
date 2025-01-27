import React, { useState } from 'react';
import useApiServices from 'react-app/src/hooks/useApiServices';
import './TaskList.css';

const TaskList = () => {
  const { addNewTask } = useApiServices();
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    is_completed: false,
  });

  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      addNewTask(newTask);
      setNewTask({ title: '', description: '', is_completed: false }); // Reset form
    }
  };

  return (
    <div className="task-container">
      <h2 className="task-header">Task List</h2>
      <div className="task-form">
        <input
          className="task-input"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="task-input"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          placeholder="Description"
        />
        <button className="task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
