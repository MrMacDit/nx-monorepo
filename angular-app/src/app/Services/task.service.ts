import { Injectable } from '@angular/core';
import { taskService } from '@angular-react-project/shared-lib';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getAllTasks(): Observable<any[]> {
    return from(taskService.getAllTasks());
  }

  deleteTask(id: number): Observable<any> {
    return from(taskService.deleteTask(id));
  }

  addNewTask(task: {
    title: string;
    description: string;
    is_completed: boolean;
  }): Observable<any> {
    return from(taskService.addTask(task));
  }
}
