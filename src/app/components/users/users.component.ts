import { Component } from '@angular/core';
import * as data from './users.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = (data as any).default;
  colNames = Object.keys(this.users[0]);
}
