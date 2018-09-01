import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GlobalVarible, Shop, RequestResponse, Menu } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {

  Model: Shop;
  MenuModel: Menu;
  defaultChoice: string;

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController) {
    this.MenuModel = new Menu();
  }
  SetDefault(){
    this.http.post(GlobalVarible.host + "/api/Shop/SetDefaultMenu/"+this.Model.id+"/"+this.defaultChoice, GlobalVarible.httpOptions)
    .subscribe(data => {
    });
    
  }
  Camera() {
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

  Edit() {
    let alert = this.alertCtrl.create({
      title: 'แก้ไขชื่อร้าน',
      inputs: [
        {
          name: 'shopname',
          value: this.Model.name,
          placeholder: 'ชื่อร้าน'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'แก้ไข',
          handler: data => {
            this.Model.name = data.shopname;
            this.http.post<RequestResponse>(GlobalVarible.host + "/api/Shop/Edit", JSON.stringify(this.Model), GlobalVarible.httpOptions)
              .subscribe(data => { });
          }
        }
      ]
    });
    alert.present();
  }

  AddMenu() {
    let alert = this.alertCtrl.create({
      title: 'เพิ่มเมนู',
      inputs: [
        {
          name: 'name',
          placeholder: 'ชื่อเมนู'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'เพิ่ม',
          handler: data => {
            this.MenuModel.name = data.name;
            this.http.post<RequestResponse>(GlobalVarible.host + "/api/Shop/AddMenu/" + this.Model.id, JSON.stringify(this.MenuModel), GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ionViewDidEnter();
              });
          }
        }
      ]
    });
    alert.present();
  }

  EditMenu(id: string, name: string) {
    let alert = this.alertCtrl.create({
      title: 'แก้ไขเมนู',
      inputs: [
        {
          name: 'name',
          value: name,
          placeholder: 'ชื่อเมนู'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'แก้ไข',
          handler: data => {
            this.MenuModel.id = id;
            this.MenuModel.name = data.name;
            this.http.post<RequestResponse>(GlobalVarible.host + "/api/Shop/EditMenu/" + this.Model.id, JSON.stringify(this.MenuModel), GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ionViewDidEnter();
              });
          }
        }
      ]
    });
    alert.present();
  }

  DeleteMenu(id: string) {
    let alert = this.alertCtrl.create({
      title: 'Confirm ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.http.post<RequestResponse>(GlobalVarible.host + "/api/Shop/DeleteMenu/" + id + "/" + this.Model.id, {}, GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ionViewDidEnter();
              });
          }
        }
      ]
    });
    alert.present();
  }

  SetDefaultMenu(id: string) {
    this.http.post<RequestResponse>(GlobalVarible.host + "/api/Shop/SetDefaultMenu" + this.Model.id + "/" + id, {}, GlobalVarible.httpOptions)
      .subscribe(data => { });
  }

  ionViewDidEnter() {
    this.http.get<Shop>(GlobalVarible.host + "/api/Shop/Get/" + this.navParams.data.id)
      .subscribe(data => {
        this.Model = data;
      });
  }
}