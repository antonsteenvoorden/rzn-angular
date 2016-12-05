/**
 * Created by Zairon on 04-Dec-16.
 */

import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service'
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public register;

  constructor() {
  }


  createAccount() {
  }

  ngOnInit() {
  }

}
