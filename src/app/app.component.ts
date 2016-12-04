import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'TravelPlanner';
  isDarkTheme: boolean = false;

  navItems = [
    {name: 'Home', route: 'home'},
    {name: 'Bookings', route: 'bookings'},
    {name: 'Hotels', route: 'hotels'},
  ];

}
