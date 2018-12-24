import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefAccountsPage } from './chef-accounts';

@NgModule({
  declarations: [
    ChefAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefAccountsPage),
  ],
})
export class ChefAccountsPageModule {}
