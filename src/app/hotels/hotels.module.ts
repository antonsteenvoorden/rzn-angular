/**
 * Created by Anton on 16/11/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {HotelsComponent}    from './hotels.component';
import {HotelDetailComponent} from './hotel-detail/hotel-detail.component';
import {HotelsRoutingModule} from './hotels-routing.module';
import {HotelPipe} from './hotels.pipe';

import {HotelsService} from './hotels.service';
import {MaterialModule} from '@angular/material';
import {AgmCoreModule} from 'angular2-google-maps/core/core-module';
import {WeatherComponent} from '../weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelsRoutingModule,
    MaterialModule.forRoot(),
    AgmCoreModule
  ],
  declarations: [
    HotelsComponent,
    HotelDetailComponent,
    WeatherComponent,
    HotelPipe
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule {
}
