import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { DUMMY_TASK } from '../tasks';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() user: User | null = null;
  task: Task[] = DUMMY_TASK;

  getUserAvatar(avatar: string): string {
    return `assets/users/${avatar}`;
  }

  addTask(title: string) {
    if (!title.trim()) return;
    const newTask = {
      id: (this.task.length + 1).toString(),
      title,
      time: '12:00',
      summary: 'This is a summary',
      completed: false,
    };
    this.task.push(newTask);
  }
}
