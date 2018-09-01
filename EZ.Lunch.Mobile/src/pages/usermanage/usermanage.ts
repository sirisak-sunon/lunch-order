import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the UsermanagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usermanage',
  templateUrl: 'usermanage.html',
})
export class UsermanagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsermanagePage');
  }
Usermanage()
{

}
DeleteUsermanage(){
  alert("ยืนยัน");
}
AddUsermanage(){
  alert("เพิ่ม")
 }
 presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'เพิ่มสมาชิก',
    inputs: [
      {
        name: 'name',
        placeholder: 'Username'
      }
    ],
    buttons: [
      {
        text: 'เพิ่ม',
        handler: data => {
          console.log(data.name);
        }
      },
      {
        text: 'ยกเลิก',
        role: 'cancel',
      },
      
    ]
  });
  alert.present();
}
}


