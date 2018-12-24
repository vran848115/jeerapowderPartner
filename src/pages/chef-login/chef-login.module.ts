import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefLoginPage } from './chef-login';

@NgModule({
  declarations: [
    ChefLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefLoginPage),
  ],
})
export class ChefLoginPageModule {}
