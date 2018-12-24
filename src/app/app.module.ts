import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChefBookingsHistoryPage } from '../pages/chef-bookings-history/chef-bookings-history';
import { ChefProfilePage } from '../pages/chef-profile/chef-profile';
import { ChefHelpAndSupportPage } from '../pages/chef-help-and-support/chef-help-and-support';
import { ChefAccountsPage } from '../pages/chef-accounts/chef-accounts';
import { ChefLoginPage } from '../pages/chef-login/chef-login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ChefBookingsHistoryPage,
    ChefProfilePage,
    ChefHelpAndSupportPage,
    ChefAccountsPage,
    ChefLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChefBookingsHistoryPage,
    ChefProfilePage,
    ChefHelpAndSupportPage,
    HomePage,
    TabsPage,
    ChefAccountsPage,
    ChefLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
