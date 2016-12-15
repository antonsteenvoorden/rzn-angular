/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  // public Server: string = "http://145.97.16.183:39081/";
  public Server: string = 'http://localhost:39081/';
  public ApiUrl: string = 'api/';
  public testApiUrl: string = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
  public testServer = 'http://localhost:1337';
  public testServerWithApiUrl = this.testServer + this.testApiUrl;
  public googleMapsApiKey = 'AIzaSyDArtIeaIwOBi-9UtMlrP36h2kGGwkyS6A';
  public weatherApiKey = 'e4ef7b235ad1d0566245bead6453368c';
}
