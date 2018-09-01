import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible, PollWithMenu, RequestResponse, Menu } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-oder-detail',
  templateUrl: 'oder-detail.html',
})
export class OderDetailPage {

  Model: PollWithMenu;
  SelectedMenuId: string;

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<PollWithMenu>(GlobalVarible.host + "/api/Poll/Get/0?showCurrent=current")
      .subscribe(data => {
        this.Model = data;
      });
  }

  GetColor(id: string) {
    // console.log(this.Model.orders);
    // console.log(GlobalVarible.username);
    // console.log(this.Model.orders.filter(x => x.userId == GlobalVarible.username && x.menuId == id));
    return this.Model.orders.filter(x => x.userId == GlobalVarible.User.id && x.menuId == id).length > 0 ? "secondary" : "";
  }

  ChangeChoice(id: string) {
    this.SelectedMenuId = id;
  }

  GetOrderCount(id: string) {
    return this.Model.orders.filter(x => x.menuId == id).length;
  }

  Vote() {
    this.http.post<RequestResponse>(GlobalVarible.host + "/api/Poll/Vote/" + GlobalVarible.User.username + "/" + this.Model.id + "/" + this.SelectedMenuId, {}, GlobalVarible.httpOptions)
      .subscribe(data => {
        this.ionViewDidEnter();
      });
  }
}
