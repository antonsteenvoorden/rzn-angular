/**
 * Created by Zairon on 04-Dec-16.
 */

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login(user){
    console.log(user, 'is the user we obtained from login form');
    this.userService.login(user);
  }

}
