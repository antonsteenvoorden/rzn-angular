import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

import { Hotel, HotelsService} from '../hotels.service';
import { Configuration } from '../../app.constants';
import { WeatherComponent } from "../../weather/weather.component";

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  providers: [ WeatherComponent ]
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HotelsService,
    private http: Http,
    private configuration: Configuration
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getHotel(+params['id']))
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      });
  }
  gotoHotels() {
    let hotelId = this.hotel ? this.hotel.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/hotels', { id: hotelId }]);
  }

}
