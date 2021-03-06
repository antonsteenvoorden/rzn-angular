/**
 * Created by Anton on 16/11/2016.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';

import {BookingsComponent} from './bookings/bookings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {EditMyProfileComponent} from './my-profile/edit-my-profile/edit-my-profile.component'
import {EditMyPasswordComponent} from './my-profile/edit-my-password/edit-my-password.component'

import {LoggedInGuard} from './guards/logged-in.guard';
import {MyProfileComponent} from './my-profile/my-profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bookings', component: BookingsComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'edit-my-profile', component: EditMyProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'edit-my-password', component: EditMyPasswordComponent, canActivate: [LoggedInGuard]},
  {path: '*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
}
