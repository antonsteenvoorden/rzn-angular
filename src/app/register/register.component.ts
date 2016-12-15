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

  // two-way binding birth day fields
  userBDay: String;
  userBMonth: String;
  userBYear: String;

  constructor(private registerService: RegisterService) {
  }

  register(user: User) {
    // fix the birthday correctly
    user.birthDate = this.userBDay
      + '-' + this.userBMonth
      + '-' + this.userBYear;

    this.registerService.postRegisterUser(user);
  }

  ngOnInit() {
  }
}
