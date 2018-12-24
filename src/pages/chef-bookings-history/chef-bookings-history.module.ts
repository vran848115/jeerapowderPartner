import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefBookingsHistoryPage } from './chef-bookings-history';

@NgModule({
  declarations: [
    ChefBookingsHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefBookingsHistoryPage),
  ],
})
export class ChefBookingsHistoryPageModule {}
