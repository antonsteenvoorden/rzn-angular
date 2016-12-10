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
  getData: String;
  postData: String;

  constructor(private registerService: RegisterService, private user: User) {

  }

  testUser() {
    console.log(this.user.email);
  }

  testGet() {
    this.registerService.getSomething().subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished.')
    );
  }

  testPost() {
    this.registerService.postSomething().subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished.')
    );
  }

  ngOnInit() {
  }
}
