import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ShopManagePage } from '../shop-manage/shop-manage';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private http: HttpClient) {
    this.Model = new Shop();
  }
  Model: Shop;

  Camera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  goShopMangePage(){
    this.navCtrl.popTo(ShopManagePage)
  }
  
  Create() {
    this.Model.imageUrl = "https://cdn-asset-mel-1.airsquare.com/www/library/image/blog/shop.png?201609230250";
    this.http.post(GlobalVarible.host + "/api/Shop/Create", JSON.stringify(this.Model), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.popToRoot();
      });
  }
}
