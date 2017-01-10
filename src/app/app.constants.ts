/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Configuration {
  public testServer = (environment.production) ?  
    'http://145.97.16.183:39081/api/' : 'http://localhost:1337/api/';
  
  public weatherApiUrl = (environment.production) ?
    'http://api.openweathermap.org/data/2.5/weather' : 'http://localhost:1337/api/weather';

  public googleMapsApiKey = 'AIzaSyDArtIeaIwOBi-9UtMlrP36h2kGGwkyS6A';
  public weatherApiKey = 'e4ef7b235ad1d0566245bead6453368c';
}
