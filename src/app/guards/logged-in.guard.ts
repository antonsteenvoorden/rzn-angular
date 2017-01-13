/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  public localStorage;

  constructor(private router: Router,
              private userService: UserService) {
    this.localStorage = localStorage;
  }

  canActivate() {
    if (this.localStorage.getItem('auth_token') && this.userService.isLoggedIn()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
