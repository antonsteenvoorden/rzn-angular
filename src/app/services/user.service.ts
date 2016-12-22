/**
 * Created by Zairon on 04-Dec-16.
 */

// https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.643asy5wp
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private api: ApiService, private router:Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(user) {
    let authToken = btoa(user.email + ":" + user.password);
    localStorage.setItem('auth_token', authToken);
    return this.api.get('account/validate')
      .subscribe(res=>{
        localStorage.setItem('user', JSON.stringify(res.user));
        this.loggedIn = true;
        this.router.navigate(['/my-profile']);
      }, err =>{
        alert('Login failed');
        localStorage.removeItem('auth_token');
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
