import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-chef-accounts',
  templateUrl: 'chef-accounts.html',
})
export class ChefAccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefAccountsPage');
  }
  transferFunds(){
    console.log("Transfer Funds");
  }

}
