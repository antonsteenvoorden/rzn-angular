import {Component, OnInit} from '@angular/core';
import {BookingService} from './bookings.service'
import {Booking} from '../models/booking';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings:Observable<Booking[]>;

  bookingsDummy = [
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
    },
    {
      name: 'Hotel ibis',
      id: '789',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '7334343',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '656544454545',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '222278786789',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '878865656565',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '67485656348',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '46564894838',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },
    {
      name: 'Hotel ibis',
      id: '12143535',
      checkIn: '20-Jan-2017',
      checkOut: '29-Jan-2017',
      rooms: '1',
      city: 'Leiden',
      travelers: '1'
    },


  ];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

}
