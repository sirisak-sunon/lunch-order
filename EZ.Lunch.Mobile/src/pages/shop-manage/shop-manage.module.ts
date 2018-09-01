import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopManagePage } from './shop-manage';

@NgModule({
  declarations: [
    ShopManagePage,
  ],
  imports: [
    IonicPageModule.forChild(ShopManagePage),
  ],
})
export class ShopManagePageModule {}
