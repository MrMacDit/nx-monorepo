// // Simulate backend data
// let tasks = [
//   {
//     id: 1,
//     title: 'Task 1',
//     description: 'Complete the integration',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Task 2',
//     description: 'Fix bugs in Angular components',
//     completed: true,
//   },
//   {
//     id: 3,
//     title: 'Task 3',
//     description: 'Fully test implementation',
//     completed: true,
//   },
//   {
//     id: 4,
//     title: 'Task 4',
//     description: 'Set up a demo',
//     completed: false,
//   },
// ];

// //   Simulate api calls to the backend

// // Get all tasks
// export const getTasks = () => {
//   return tasks;
// };

// // Add a new task
// export const addTask = (task: { title: string; description: string }) => {
//   const newTask = { id: tasks.length + 1, ...task, completed: false };
//   tasks.push(newTask);
//   return newTask;
// };

// // Update a task
// export const updateTask = (
//   id: number,
//   updatedTask: { title?: string; description?: string; completed?: boolean }
// ) => {
//   const taskIndex = tasks.findIndex((task) => task.id === id);

//   if (taskIndex === -1) {
//     throw new Error(`Task with ID ${id} not found`);
//   }

//   tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
//   return tasks[taskIndex];
// };

// // Delete a task
// export const deleteTask = (id: number) => {
//   const updatedTasks = tasks.filter((task) => task.id !== id);

//   if (tasks.length === updatedTasks.length) {
//     throw new Error(`Task with ID ${id} not found`);
//   }

//   tasks = updatedTasks;
//   return { message: `Task with ID ${id} deleted successfully` };
// };
