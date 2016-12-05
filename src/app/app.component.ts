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
    {icon: '<i class="material-icons">home</i>', name: 'Home', route: 'home'},
    {icon: '<i class="material-icons">book</i>', name: 'Bookings', route: 'bookings'},
    {icon: '<i class="material-icons">hotel</i>', name: 'Hotels', route: 'hotels'},
  ];

}
