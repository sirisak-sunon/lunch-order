import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OderDetailPage } from '../oder-detail/oder-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goOrderDetailPage(){
    this.navCtrl.push(OderDetailPage)
  }
}
