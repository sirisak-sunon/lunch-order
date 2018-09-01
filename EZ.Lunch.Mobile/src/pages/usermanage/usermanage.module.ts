import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsermanagePage } from './usermanage';

@NgModule({
  declarations: [
    UsermanagePage,
  ],
  imports: [
    IonicPageModule.forChild(UsermanagePage),
  ],
})
export class UsermanagePageModule {}
