import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressModalPage } from './address-modal';

@NgModule({
  declarations: [
    AddressModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressModalPage),
  ],
  exports: [
    AddressModalPage
  ]
})
export class AddressModalPageModule {}
