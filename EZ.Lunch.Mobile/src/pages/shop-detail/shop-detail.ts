import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible, Shop } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {

  Model: Shop;

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<Shop>(GlobalVarible.host + "/api/Shop/Get/" + this.navParams.data.id)
      .subscribe(data => {
        this.Model = data;
      });
  }
}
