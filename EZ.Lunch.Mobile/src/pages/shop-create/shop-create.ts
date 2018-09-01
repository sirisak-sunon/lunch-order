import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GlobalVarible, Shop } from '../../app/models';

/**
 * Generated class for the ShopCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-create',
  templateUrl: 'shop-create.html',
})
export class ShopCreatePage {

  Model: Shop;

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
    this.Model = new Shop();
  }

  Create() {
    this.Model.imageUrl = "https://cdn-asset-mel-1.airsquare.com/www/library/image/blog/shop.png?201609230250";
    this.http.post(GlobalVarible.host + "/api/Shop/Create", JSON.stringify(this.Model), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.popToRoot();
      });
  }
}
