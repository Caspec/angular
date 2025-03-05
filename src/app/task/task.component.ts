import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../user/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() user: User | null = null;

  getUserAvatar(avatar: string): string {
    return `assets/users/${avatar}`;
  }
}
