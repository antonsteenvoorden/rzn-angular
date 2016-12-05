/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public Server: string = "http://145.97.16.183:39081/";
  public ApiUrl: string = "api/";
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
