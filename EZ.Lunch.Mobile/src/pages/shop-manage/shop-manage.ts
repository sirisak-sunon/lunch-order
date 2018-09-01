import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { ShopCreatePage } from '../shop-create/shop-create';
import { Shop, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-shop-manage',
  templateUrl: 'shop-manage.html',
})
export class ShopManagePage {

  Model: Shop[];

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<Shop[]>(GlobalVarible.host + "/api/Shop/List")
      .subscribe(data => {
        this.Model = data;
      });
  }

  goShopDetailPage(id: string) {
    this.navCtrl.push(ShopDetailPage, { id : id })
  }

  goShopCreatePage() {
    this.navCtrl.push(ShopCreatePage)
  }
}
