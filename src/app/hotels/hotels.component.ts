import { Component, OnInit } from '@angular/core';
import { Hotel, HotelsService} from "./hotels.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-hotels',
  // templateUrl: './hotels.component.html',
  templateUrl: './test-hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Observable<Hotel[]>;
  private selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HotelsService
  ) {}

  ngOnInit() {
    this.hotels = this.route.params
      .switchMap((params: Params) => {
        /*
         All route/query parameters are strings.
         The (+) in front of the params['id'] expression is a JavaScript trick to convert the string to an integer.
         */
        this.selectedId = +params['id'];
        return this.service.getHotels();
      });

  }

  onSelect(hotel: Hotel) {
    this.router.navigate(['/hotels', hotel.id]);
  }
}
