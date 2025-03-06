import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() users: User[] = [];
  @Output() select = new EventEmitter<User>();

  getUserAvatar(avatar: string): string {
    return `assets/users/${avatar}`;
  }

  onSelectUser(user: User) {
    this.select.emit(user);
  }
}
