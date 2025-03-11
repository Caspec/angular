import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task | null = null;
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<{
    id: string;
    title: string;
    summary: string;
    completed: boolean;
  }>();
  editTaskId: string | null = null;

  deleteTask(taskId: string) {
    this.taskDeleted.emit(taskId);
  }

  toggleEdit(taskId: string) {
    this.editTaskId = this.editTaskId === taskId ? null : taskId;
  }

  saveTask(
    taskId: string,
    newTitle: string,
    newSummary: string,
    newCompleted: boolean
  ) {
    if (!newTitle.trim()) return;
    this.editTask.emit({
      id: taskId,
      title: newTitle,
      summary: newSummary,
      completed: newCompleted,
    });
    this.editTaskId = null;
  }
}
