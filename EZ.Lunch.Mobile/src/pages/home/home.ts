import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OderDetailPage } from '../oder-detail/oder-detail';
import { HttpClient } from '@angular/common/http';
import { User, GlobalVarible } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Users:User[];
  selectedUser:User;

  constructor(public navCtrl: NavController, private http: HttpClient) {

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

  goOrderDetailPage(){
    GlobalVarible.username = this.selectedUser.username;
    this.selectedUser = null;
    this.navCtrl.push(OderDetailPage)
  }
}
