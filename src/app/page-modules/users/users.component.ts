import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserData} from "../../../models/auth.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] | undefined;

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    console.log(this.users);
  }

}
