import React, { useState, useEffect } from 'react';
import { taskService } from '@angular-react-project/shared-lib';

// Define the type for a task
interface Task {
  title: string;
  description: string;
  is_completed: boolean;
}

const useApiServices = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const data = await taskService.getAllTasks();
      setTasks(data as Task[]);
    })();
  }, []);

  const addNewTask = async (task: Task) => {
    await taskService.addTask(task);
    const updatedTasks = await taskService.getAllTasks();
    setTasks(updatedTasks as Task[]);
  };

  const deleteExistingTask = async (id: number) => {
    await taskService.deleteTask(id);
    const updatedTasks = await taskService.getAllTasks();
    setTasks(updatedTasks as Task[]);
  };

  return { tasks, addNewTask, deleteExistingTask };
};

export default useApiServices;
