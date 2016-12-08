import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings = [
    {
      name: 'Henann Resort',
      id: '123',
      checkIn: '08-Dec-2016',
      checkOut: '10-Dec-2016',
      rooms: '2',
      city: 'Cebu',
      travelers: '4'
    },
    {
      name: 'Hilton',
      id: '456',
      checkIn: '15-Dec-2016',
      checkOut: '24-Dec-2016',
      rooms: '1',
      city: 'Rotterdam',
      travelers: '2'
    }


  ];

  constructor() {
  }

  ngOnInit() {
  }

}
