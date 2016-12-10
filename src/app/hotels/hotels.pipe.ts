/**
 * Created by Anton on 05/12/2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {Hotel} from './hotels.service';

@Pipe({
  name: 'hotelPipe'
})
export class HotelPipe {
  transform(hotels: Hotel[], query = '') {
    if (!hotels) {
      return;
    }
    query = query.toLowerCase();

    return hotels.filter(hotel => {
      return hotel.name.toLowerCase().includes(query)
        || hotel.description.toLowerCase().includes(query)
        || hotel.city.toLowerCase().includes(query);
    });
  };
}
