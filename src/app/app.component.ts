import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'TravelPlanner';
  isDarkTheme: boolean = false;

  navItems = [
    {icon: 'home', name: 'Home', route: 'home'},
    {icon: 'book', name: 'Bookings', route: 'bookings'},
    {icon: 'hotel', name: 'Hotels', route: 'hotels'},
  ];

}
