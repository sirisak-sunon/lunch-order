import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OderDetailPage } from '../oder-detail/oder-detail';

/**
 * Generated class for the OrderCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-create',
  templateUrl: 'order-create.html',
})
export class OrderCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderCreatePage');
  }
  goorderdetail(){
    this.navCtrl.push(OderDetailPage);
  }

}
