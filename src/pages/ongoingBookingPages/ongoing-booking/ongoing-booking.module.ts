import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OngoingBookingPage } from './ongoing-booking';

@NgModule({
  declarations: [
    OngoingBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(OngoingBookingPage),
  ],
})
export class OngoingBookingPageModule {}
