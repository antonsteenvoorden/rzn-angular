import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TravelPlanner';
  isDarkTheme: boolean = false;

  navItems = [
    {icon: '<md-icon>home</md-icon>', name: 'Home', route: 'home'},
    {icon: '<md-icon>book</md-icon>', name: 'Bookings', route: 'bookings'},
    {icon: '<md-icon>hotel</md-icon>', name: 'Hotels', route: 'hotels'},
  ];

}
