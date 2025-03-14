import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { DUMMY_TASK } from '../tasks';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, TaskFilterComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() user: User | null = null;
  task: Task[] = DUMMY_TASK;
  editTaskId: string | null = null;
  searchTitle: string = '';
  searchSummary: string = '';
  searchCompleted: boolean | null = null;

  get filteredTasks(): Task[] {
    return this.task.filter((task) => {
      const matchesTitle = this.searchTitle
        ? task.title.toLowerCase().includes(this.searchTitle.toLowerCase())
        : true;

      const matchesSummary = this.searchSummary
        ? task.summary.toLowerCase().includes(this.searchSummary.toLowerCase())
        : true;

      const matchesCompleted = this.searchCompleted
        ? task.completed === this.searchCompleted
        : true;

      return matchesTitle && matchesSummary && matchesCompleted;
    });
  }

  updateFilters(filters: {
    title: string;
    summary: string;
    completed: boolean | null;
  }) {
    this.searchTitle = filters.title;
    this.searchSummary = filters.summary;
    this.searchCompleted = filters.completed;
  }

  getUserAvatar(avatar: string): string {
    return `assets/users/${avatar}`;
  }

  addTask(title: string, summary: string, completed: boolean) {
    if (!title.trim()) return;
    const newTask = {
      id: (this.task.length + 1).toString(),
      title,
      time: '12:00',
      summary: summary,
      completed: completed,
    };
    this.task.push(newTask);
  }

  deleteTask(taskId: string) {
    this.task = this.task.filter((task) => task.id !== taskId);
  }

  updateTask(updatedTask: {
    id: string;
    title: string;
    summary: string;
    completed: boolean;
  }) {
    this.task = this.task.map((task) =>
      task.id === updatedTask.id
        ? {
            ...task,
            title: updatedTask.title,
            summary: updatedTask.summary,
            completed: updatedTask.completed,
          }
        : task
    );
  }
}
