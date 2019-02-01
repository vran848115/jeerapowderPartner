import { Component } from '@angular/core';
import { OngoingBookingPage } from '../ongoingBookingPages/ongoing-booking/ongoing-booking';
import { HomePage } from '../upcomingBookingPages/home/home';
import { ChefProfilePage } from '../profilePages/chef-profile/chef-profile';
import { ChefAccountsPage } from '../AccountsPages/chef-accounts/chef-accounts';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OngoingBookingPage;
  tab2Root = HomePage;
  tab3Root = ChefProfilePage;
  tab4Root = ChefAccountsPage;


  constructor() {

  }
}

