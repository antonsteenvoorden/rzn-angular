import {Component, OnInit} from '@angular/core';
import {DatepickerModule} from '../../../angular2-material-datepicker/datepicker.module';
import {Hotel, HotelsService} from "../../hotels.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Http} from "@angular/http";
import {Configuration} from "../../../app.constants";
import {User} from "../../../models/user";
import {BookHotelService} from "./book-hotel-service";

@Component({
  selector: 'app-book-hotel',
  templateUrl: 'book-hotel.component.html',
  styleUrls: ['book-hotel.component.css'],
  providers: [DatepickerModule, BookHotelService]
})

export class BookHotelComponent implements OnInit {

  hotel: Hotel;
  country: string;

  // two-way binding
  tempTraveler: User;
  newTravelerBDay: string;
  newTravelerBMonth: string;
  newTravelerBYear: string;
  startDate: Date;
  endDate: Date;

  // startDate and endDate converted to string
  startDateConverted: string;
  endDateConverted: string;

  // array with newly added travelers
  AllTravelers: User[];

  constructor(private route: ActivatedRoute,
              private service: HotelsService,
              private bookHotelservice: BookHotelService) {

    this.tempTraveler = new User();
    this.AllTravelers = <Array<User>> new Array();
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        this.country = params['country'];
        return this.service.getHotel(+params['id']);
      })
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }

  private createBooking() {
    // fix the start day correctly
    this.startDateConverted = this.startDate.getDay() +
      '-' + this.startDate.getMonth()
      + '-' + this.startDate.getFullYear();
    // fix the end day correctly
    this.endDateConverted = this.endDate.getDay()
      + '-' + this.endDate.getMonth()
      + '-' + this.endDate.getFullYear();

    // this.bookHotelservice.postBookHotel(this.tempTraveler, this.hotel, this.AllTravelers);
  }

  private addNewTraveler() {
    // fix the birthday correctly
    this.tempTraveler.birthDate = this.newTravelerBDay
      + '-' + this.newTravelerBMonth
      + '-' + this.newTravelerBYear;

    // add the new traveler to an array
    this.AllTravelers.push(this.tempTraveler);

    this.tempTraveler = new User();
  }
}
