/**
 * Created by Zairon on 04-Dec-16.
 */

import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required]), //, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      password: new FormControl('', [
        Validators.required])
    });
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.loginForm.value);
  }

}
