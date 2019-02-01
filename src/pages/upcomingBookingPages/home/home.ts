import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BookingDetailsPage } from '../booking-details/booking-details';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bookings:any;

  constructor(public navCtrl: NavController,public http: HttpClient) {
    this.getData();
  }
  navigateToBookingDetails(){
    this.navCtrl.push(BookingDetailsPage);
  }

  getData(){
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/upcomingBookings.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.bookings=result;
      console.log(result);
    }); 
  }

  chefCancelledBooking(){
    console.log("Call chefCancelledBooking service")
  }

}
