/**
 * Created by Zairon on 04-Dec-16.
 */

// https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.643asy5wp

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Configuration} from '../app.constants';
import {ApiService} from './api.service';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private api: ApiService, private configuration: Configuration) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(user) {
    console.log('user service obtained user', user);
    let email = user.email;
    let password = user.password;

    return this.api.post('auth/token', user)
    .subscribe((res)=>{
      console.log(res);
      localStorage.setItem('auth_token', JSON.stringify(res.accessToken));
      this.loggedIn = true;
    });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
