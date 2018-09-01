import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { ShopCreatePage } from '../shop-create/shop-create';

/**
 * Generated class for the ShopManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-manage',
  templateUrl: 'shop-manage.html',
})
export class ShopManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopManagePage');
  }

  goShopDetailPage(){
    this.navCtrl.push(ShopDetailPage)
  }

  goShopCreatePage(){
    this.navCtrl.push(ShopCreatePage)
  }
}
