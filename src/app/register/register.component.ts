/**
 * Created by Zairon on 04-Dec-16.
 */

import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private registerService: RegisterService) {

    this.registerForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      password: new FormControl('', [
        Validators.required]),
      repeatPassword: new FormControl('', [
        Validators.required]),
      firstName: new FormControl('', [
        Validators.required]),
      lastName: new FormControl('', [
        Validators.required]),
      postalCode: new FormControl('', [
        Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      address: new FormControl('', [
        Validators.required]),
      city: new FormControl('', [
        Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]+')]),
      birthDate: new FormControl('', [
        Validators.required]),
    });
  }

  register() {
    console.log(this.registerForm.value);
    this.registerService.postRegisterUser(this.registerForm.value);
  }

  ngOnInit() {
  }
}
