/**
 * Created by Zairon on 04-Dec-16.
 */

// https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.643asy5wp

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Configuration } from '../app.constants';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http, private configuration: Configuration) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(user) {
    console.log('user service obtained user', user);
    let email = user.email;
    let password = user.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post(this.configuration.ServerWithApiUrl+
        'login',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .subscribe((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', JSON.stringify(res.auth_token));
          this.loggedIn = true;
        }

        return res;
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
