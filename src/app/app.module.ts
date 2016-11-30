import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HotelsModule } from './hotels/hotels.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingsComponent } from './bookings/bookings.component.ts';
import { MaterialModule } from '@angular/material';

// https://github.com/angular/material2/blob/master/GETTING_STARTED.md
// https://angular.io/docs/ts/latest/guide/router.html

// TODO: checkout example https://angular.io/resources/live-examples/router/ts/plnkr.html

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HotelsModule,
    MaterialModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
