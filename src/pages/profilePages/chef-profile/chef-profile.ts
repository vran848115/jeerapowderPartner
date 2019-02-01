import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefAccountsPage } from '../../AccountsPages/chef-accounts/chef-accounts';


@IonicPage()
@Component({
  selector: 'page-chef-profile',
  templateUrl: 'chef-profile.html',
})
export class ChefProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefProfilePage');
  }

  navigateToAccounts(){
    this.navCtrl.push(ChefAccountsPage);
  }

}
