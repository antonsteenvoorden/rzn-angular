import {BrowserModule} from '@angular/platform-browser';
import {NgModule, HostBinding, Input, Directive} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {HotelsModule} from './hotels/hotels.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BookingsComponent} from './bookings/bookings.component';
import {MaterialModule} from '@angular/material';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

import {LoggedInGuard} from './logged-in.guard';
import {UserService} from './user.service';

// https://github.com/angular/material2/blob/master/GETTING_STARTED.md
// https://angular.io/docs/ts/latest/guide/router.html

// TODO: checkout example https://angular.io/resources/live-examples/router/ts/plnkr.html


@Directive({
  selector: '[layout]'
})
export class LayoutDirective {
  @Input() layout: string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction() {
    return (this.layout === 'column') ? 'column' : 'row';
  }
}
@Directive({
  selector: '[flex]'
})
export class FlexDirective {
  @Input() shrink: number = 1;
  @Input() grow: number = 1;
  @Input() flex: string;

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HotelsModule,

    MaterialModule.forRoot()
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
