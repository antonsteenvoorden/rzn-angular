import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Router} from'@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!this.user) {
      this.userService.logout();
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
