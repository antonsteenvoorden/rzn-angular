/**
 * Created by Anton on 16/11/2016.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HotelsComponent }    from './hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelsRoutingModule } from './hotels-routing.module';

import { HotelsService } from './hotels.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelsRoutingModule
  ],
  declarations: [
    HotelsComponent,
    HotelDetailComponent
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule {}
