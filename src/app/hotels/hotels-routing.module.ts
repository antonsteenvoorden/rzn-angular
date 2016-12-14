/**
 * Created by Anton on 16/11/2016.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HotelsComponent}    from './hotels.component';
import {HotelDetailComponent}  from './hotel-detail/hotel-detail.component';
import {BookHotelComponent} from "./hotel-detail/book-hotel/book-hotel.component";

const hotelsRoutes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotels/:id', component: HotelDetailComponent},
  {path: 'hotels/:id/book', component: BookHotelComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(hotelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelsRoutingModule {
}
