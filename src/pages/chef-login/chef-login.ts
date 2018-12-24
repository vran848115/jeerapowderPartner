import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-chef-login',
  templateUrl: 'chef-login.html',
})
export class ChefLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefLoginPage');
  }

  navigateToChefHome(){
    this.navCtrl.setRoot(TabsPage);
  }

}
