import {Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TravelPlanner';
  isDarkTheme: boolean = false;

  constructor(private userService: UserService){}
  
  navItems = [
    {icon: 'home', name: 'Home', route: 'home'},
    {icon: 'book', name: 'Bookings', route: 'bookings'},
    {icon: 'hotel', name: 'Hotels', route: 'hotels'},
  ];

}
