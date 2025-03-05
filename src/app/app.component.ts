import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummy';
import { User } from './user/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
