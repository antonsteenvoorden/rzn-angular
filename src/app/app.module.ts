import {BrowserModule} from '@angular/platform-browser';
import {NgModule, HostBinding, Input, Directive} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HotelsModule} from './hotels/hotels.module';
import {HotelsRoutingModule} from './hotels/hotels-routing.module';
import {AppRoutingModule} from './app-routing.module';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {Ng2PaginationModule} from 'ng2-pagination';
import {DatepickerModule} from './angular2-material-datepicker/datepicker.module';
// MODULES HIERBOVEN

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BookingsComponent} from './bookings/bookings.component';
import {MaterialModule} from '@angular/material';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {EditMyProfileComponent} from './my-profile/edit-my-profile/edit-my-profile.component';
import {EditMyPasswordComponent} from './my-profile/edit-my-password/edit-my-password.component';
import {BookHotelComponent} from './hotels/hotel-detail/book-hotel/book-hotel.component';
// COMPONENTS HIERBOVEN

import {LoggedInGuard} from './guards/logged-in.guard';
import {UserService} from './services/user.service';
import {Configuration} from './app.constants';
import {RegisterService} from './register/register.service';
import {WeatherService} from './weather/weather.service';
import {BookingService} from './bookings/bookings.service';
import {ApiService} from './services/api.service';
// SERVICES HIERBOVEN

import {User} from './models/user';


// https://github.com/angular/material2/blob/master/GETTING_STARTED.md
// https://angular.io/docs/ts/latest/guide/router.html

// TODO: checkout example https://angular.io/resources/live-examples/router/ts/plnkr.html


@Directive({
  selector: '[layout]'
})
export class LayoutDirective {
  @Input()
  layout: string;
  @HostBinding('style.display')
  display = 'flex';

  @HostBinding('style.flex-direction')
  get direction() {
    return (this.layout === 'column') ? 'column' : 'row';
  }
}
@Directive({
  selector: '[flex]'
})
export class FlexDirective {
  @Input()
  shrink: number = 1;
  @Input()
  grow: number = 1;
  @Input()
  flex: string;

  @HostBinding('style.flex')
  get style() {
    return `${this.grow} ${this.shrink} ${this.flex === '' ? '0' : this.flex}%`;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BookingsComponent,
    FlexDirective,
    LayoutDirective,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MyProfileComponent,
    EditMyProfileComponent,
    EditMyPasswordComponent,
    BookHotelComponent
  ],
  imports: [
    DatepickerModule,
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HotelsModule,
    HotelsRoutingModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDArtIeaIwOBi-9UtMlrP36h2kGGwkyS6A'
    })
  ],
  providers: [
    UserService,
    LoggedInGuard,
    Configuration,
    RegisterService,
    WeatherService,
    BookingService,
    ApiService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
