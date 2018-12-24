import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ChefBookingsHistoryPage } from '../chef-bookings-history/chef-bookings-history';
import { ChefProfilePage } from '../chef-profile/chef-profile';
import { ChefHelpAndSupportPage } from '../chef-help-and-support/chef-help-and-support';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChefBookingsHistoryPage;
  tab3Root = ChefProfilePage;
  tab4Root = ChefHelpAndSupportPage;

  constructor() {

  }
}
