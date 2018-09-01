import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCreatePage } from './shop-create';

@NgModule({
  declarations: [
    ShopCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShopCreatePage),
  ],
})
export class ShopCreatePageModule {}
