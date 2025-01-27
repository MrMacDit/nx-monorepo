import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  template: `
    <div class="task-list-container">
      <div class="task-list">
        <h2>Task List</h2>
        <ul>
          <li *ngFor="let task of tasks">
            <div class="task-details">
              <strong>{{ task.title }}</strong> - {{ task.description }}
            </div>
            <button (click)="deleteTask(task.id)" class="delete-button">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask = { title: '', description: '', is_completed: false };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      },
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks(); // Reload tasks after deleting
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      },
    });
  }
}
