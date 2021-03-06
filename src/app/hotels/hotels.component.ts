import {Component, OnInit} from '@angular/core';
import {HotelsService} from './hotels.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {
  hotels:Observable<Hotel[]>;
  private selectedCountry:string;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:HotelsService) {
  }

  ngOnInit() {
    this.hotels = this.route.params
      .switchMap((params:Params) => {
        /*
         All route/query parameters are strings.
         The (+) in front of the params['id'] expression is a JavaScript trick to convert the string to an integer.
         */
        if (params['country']) {
          this.selectedCountry = params['country'];
          return this.service.getHotelsByQuery(this.selectedCountry);
        }
        return this.service.getHotels();
      });

  }

  onSelect(hotel:Hotel) {
    if (this.selectedCountry != "undefined") {
      this.router.navigate(['/hotels', hotel.id, {country: this.selectedCountry}]);
    } else {
      this.router.navigate(['/hotels']);
    }
  }
}
