/**
 * Created by Anton on 05/12/2016.
 */
import {Pipe, PipeTransform } from '@angular/core';
import {Hotel} from "./hotels.service";

@Pipe({
  name:'HotelPipe'
}) export class HotelPipe {
  transform(hotels: Hotel[], query = "") {
      return hotels.filter(hotel => {
        return hotel.name.includes(query) || hotel.description.includes(query);
      });
  };
}
