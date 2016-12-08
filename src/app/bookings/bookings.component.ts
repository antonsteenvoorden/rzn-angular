import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings = [
    {name: 'ABC', id: '123', info: 'Info', adres: 'adres'},
    {name: 'DEF', id: '456', info: 'Info', adres: 'adres'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
