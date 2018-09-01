import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { User, GlobalVarible } from '../../app/models';
import { List } from 'ionic-angular/umd';
import { HttpClient } from '@angular/common/http';
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

  Users:User[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private http: HttpClient) {
    
  }

  ionViewDidEnter() {
    this.GetUser();
  }

  GetUser()
  {
    this.http.get<User[]>(GlobalVarible.host + "/api/User/List")
      .subscribe(data => {
        this.Users = data;
      });
  }

  DeleteUsermanage(id:string){
    this.http.post(GlobalVarible.host + "/api/User/Delete/"+id, GlobalVarible.httpOptions)
    .subscribe(data => {
      this.GetUser();
    });
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
            let model =  { Displayname: data.name, Username : data.name} ;
            this.http.post(GlobalVarible.host + "/api/User/Create", JSON.stringify(model), GlobalVarible.httpOptions)
            .subscribe(data => {
              this.GetUser();
            });
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


