import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { NxWelcomeComponent } from './nx-welcome.component';
import { TaskListComponent } from './components/ListTasks/list-tasks.component';

@Component({
  imports: [TaskListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
}
