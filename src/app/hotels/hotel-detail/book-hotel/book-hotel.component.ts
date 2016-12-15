import {Component, OnInit} from '@angular/core';
import {DatepickerModule} from '../../../angular2-material-datepicker/datepicker.module';
import {HotelsService} from "../../hotels.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Http} from "@angular/http";
import {Configuration} from "../../../app.constants";
import {User} from "../../../models/user";
import {BookHotelService} from "./book-hotel-service";
import {Hotel} from "../../../models/hotel";

@Component({
  selector: 'app-book-hotel',
  templateUrl: 'book-hotel.component.html',
  styleUrls: ['book-hotel.component.css'],
  providers: [DatepickerModule, BookHotelService]
})

export class BookHotelComponent implements OnInit {

  hotel: Hotel;

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
  accompanying_travelers: User[];

  constructor(private route: ActivatedRoute,
              private service: HotelsService,
              private bookHotelservice: BookHotelService) {

    this.tempTraveler = new User();
    this.accompanying_travelers = <Array<User>> new Array();
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        return this.service.getHotel(+params['id']);
      })
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }

  private createBooking() {
    this.setTravelDays();

    // TOBEDELETED
    let contactPrsn: User;
    contactPrsn = new User();
    contactPrsn.setID = 5;

    this.bookHotelservice.postBookHotel(contactPrsn, this.hotel, this.accompanying_travelers,
      this.startDateConverted, this.endDateConverted);
  }

  private addNewTraveler() {
    this.setTravelerBDay();

    // add the new traveler to the array with all travelers
    this.accompanying_travelers.push(this.tempTraveler);

    this.newUser();
  }

  private setTravelerBDay() {
    this.tempTraveler.birthDate = this.newTravelerBDay
      + '-' + this.newTravelerBMonth
      + '-' + this.newTravelerBYear;
  }

  private newUser() {
    // new empty user for the two-way binding
    this.tempTraveler = new User();
    this.newTravelerBDay = '';
    this.newTravelerBMonth = '';
    this.newTravelerBYear = '';
  }

  private setTravelDays() {
    this.startDateConverted = this.startDate.getDate() +
      '-' + (this.startDate.getMonth() + 1)
      + '-' + this.startDate.getFullYear();

    this.endDateConverted = this.endDate.getDate()
      + '-' + (this.endDate.getMonth() + 1)
      + '-' + this.endDate.getFullYear();
  }

}
