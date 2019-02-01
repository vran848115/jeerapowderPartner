import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/upcomingBookingPages/home/home';
import { ChefLoginPage } from '../pages/loginPages/chef-login/chef-login';
import { BookingDetailsPage } from '../pages/upcomingBookingPages/booking-details/booking-details';
import { OngoingBookingPage } from '../pages/ongoingBookingPages/ongoing-booking/ongoing-booking';
import { ChefProfilePage } from '../pages/profilePages/chef-profile/chef-profile';
import { ChefAccountsPage } from '../pages/AccountsPages/chef-accounts/chef-accounts';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ChefProfilePage,
    ChefAccountsPage,
    ChefLoginPage,
    BookingDetailsPage,
    OngoingBookingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChefProfilePage,
    HomePage,
    TabsPage,
    ChefAccountsPage,
    ChefLoginPage,
    BookingDetailsPage,
    OngoingBookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
