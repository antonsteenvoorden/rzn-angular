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

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

}
