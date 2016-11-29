/**
 * Created by Anton on 16/11/2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent }  from './bookings/bookings.component';
import { HotelsComponent }    from './hotels/hotels.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: '', component: PageNotFoundComponent }, 
  { path: 'bookings', component: BookingsComponent },
  { path: 'hotels', component: HotelsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
