import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../hotels.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../../models/user";
import {BookHotelService} from "./book-hotel-service";
import {Hotel} from "../../../models/hotel";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-hotel',
  templateUrl: 'book-hotel.component.html',
  styleUrls: ['book-hotel.component.css'],
  providers: [BookHotelService]
})

export class BookHotelComponent implements OnInit {

  hotel: Hotel;
  addTravelerForm: FormGroup;

  startDate: Date = new Date();
  endDate: Date = new Date((new Date()).valueOf() + 1000 * 3600 * 24);

  travelers: User[];

  constructor(private route: ActivatedRoute,
              private service: HotelsService,
              private bookHotelservice: BookHotelService) {

    this.travelers = <Array<User>> new Array();


    this.addTravelerForm = new FormGroup({
      email: new FormControl(null, [
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
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        return this.service.getHotel(+params['id']);
      })
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }

  private createBooking() {
    let startDateFormatted = this.startDate.getFullYear()
      + '-' + (this.startDate.getMonth() + 1)
      + '-' + this.startDate.getDate()

    let endDateFormatted = this.endDate.getFullYear()
      + '-' + (this.endDate.getMonth() + 1)
      + '-' + this.endDate.getDate()

    this.bookHotelservice.postBookHotel(this.hotel, this.travelers,
      startDateFormatted, endDateFormatted);
  }

  private pushTraveler() {
    this.travelers.push(this.addTravelerForm.value);
    this.addTravelerForm.reset();
  }
}
