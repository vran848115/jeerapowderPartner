import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ChefAccountsPage } from '../chef-accounts/chef-accounts';

/**
 * Generated class for the ChefBookingsHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chef-bookings-history',
  templateUrl: 'chef-bookings-history.html',
})
export class ChefBookingsHistoryPage {
  public completedBookings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.getData();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefBookingsHistoryPage');
  }

  getData(){
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/completedBookings.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.completedBookings=result;
      console.log(result);
    }); 
  }
  navigateToAccounts(){
    this.navCtrl.push(ChefAccountsPage);
  }


}
