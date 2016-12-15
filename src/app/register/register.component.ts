/**
 * Created by Zairon on 04-Dec-16.
 */

import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {User} from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  // two-way binding
  user: User;
  userBDay: String;
  userBMonth: String;
  userBYear: String;

  constructor(private registerService: RegisterService) {
    this.user = new User();
  }

  register() {
    // fix the birthday correctly
    this.user.birthDate = this.userBDay
      + '-' + this.userBMonth
      + '-' + this.userBYear;

    this.registerService.postRegisterUser(this.user);

  }

  ngOnInit() {
  }
}
