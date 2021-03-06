import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Http} from '@angular/http';
// import { Observable } from 'rxjs/Observable';

import {HotelsService} from '../hotels.service';
import {Configuration} from '../../app.constants';
import {WeatherComponent} from '../../weather/weather.component';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  providers: [WeatherComponent]
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel;
  selectedCountry:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HotelsService) {
    this.selectedCountry = null;
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        if (params['country']) {
          this.selectedCountry = params['country'];
        }
        let id = params['id'];
        return this.service.getHotel(id);
      })
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }

  goToHotels() {
    let hotelId = this.hotel ? this.hotel.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    if(this.selectedCountry != "undefined"){
      if(this.hotel){
        this.router.navigate(['/hotels', {id: hotelId, country:this.hotel.country}]);
      } else {
        this.router.navigate(['/hotels']);
      }
    }
    else {
      this.router.navigate(['/hotels']);
    }
  }

  private goToBook() {
    this.router.navigate(['/hotels/' + this.hotel.id + '/book']);
  }

}
