import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css',
  imports: [FormsModule],
})
export class TaskFilterComponent {
  searchTitle: string = '';
  searchSummary: string = '';
  searchCompleted: boolean = false;

  @Output() filtersChanged = new EventEmitter<{
    title: string;
    summary: string;
    completed: boolean;
  }>();

  setSearchQuery() {
    this.filtersChanged.emit({
      title: this.searchTitle,
      summary: this.searchSummary,
      completed: this.searchCompleted,
    });
  }
}
