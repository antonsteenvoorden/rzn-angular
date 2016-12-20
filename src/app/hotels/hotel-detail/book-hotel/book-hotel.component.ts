import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Hotel} from "../../../models/hotel";
import {HotelsService} from "../../hotels.service";
import {User} from "../../../models/user";
import {BookHotelService} from "./book-hotel-service";

@Component({
  selector: 'app-book-hotel',
  templateUrl: 'book-hotel.component.html',
  styleUrls: ['book-hotel.component.css'],
  providers: [BookHotelService]
})

export class BookHotelComponent implements OnInit {
  private hotel: Hotel;
  private user: User;
  private addTravelerForm: FormGroup;
  private startDate: Date = new Date();
  private endDate: Date = new Date((new Date()).valueOf() + 1000 * 3600 * 24);
  range: Date = new Date();
  travelers: any[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService: HotelsService,
              private bookHotelService: BookHotelService) {

    this.travelers = <Array<User>> new Array();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.setRange();

    this.addTravelerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      firstName: new FormControl('', [
        Validators.required]),
      lastName: new FormControl('', [
        Validators.required]),
      postalCode: new FormControl('', [
        Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      address: new FormControl('', [
        Validators.required]),
      city: new FormControl('', [
        Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]+')]),
      birthDate: new FormControl('', [
        Validators.required]),
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.hotelService.getHotel(+params['id']);
      })
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }

  createBooking() {
    let startDateFormatted = this.startDate.getFullYear()
      + '-' + (this.startDate.getMonth() + 1)
      + '-' + this.startDate.getDate();

    let endDateFormatted = this.endDate.getFullYear()
      + '-' + (this.endDate.getMonth() + 1)
      + '-' + this.endDate.getDate();

    this.bookHotelService.postBookHotel(this.hotel, this.travelers,
      startDateFormatted, endDateFormatted);
  }

  pushTraveler() {
    this.travelers.push(this.addTravelerForm.value);
    this.addTravelerForm.reset();
  }

  setRange() {
    // set range to the previous month, and eventually the year of that month
    // the range is set to prevent the user going to the previous month
    let newMonth = this.range.getMonth() - 1;
    if (newMonth < 0) {
      newMonth += 12;
      this.range.setFullYear(this.range.getFullYear() - 1);
    }
    this.range.setMonth(newMonth);
  }

  removeTraveler(traveler: any) {
    let index = this.travelers.indexOf(traveler);
    this.travelers.splice(index, 1);
  }
}
