import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OrderCreatePage } from '../pages/order-create/order-create';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ShopManagePage } from '../pages/shop-manage/shop-manage';
import { UsermanagePage } from '../pages/usermanage/usermanage'
import { OderDetailPage } from '../pages/oder-detail/oder-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'สร้างรายการ', component: OrderCreatePage },
      { title: 'ประวัติ', component: OrderHistoryPage },
      { title: 'ปิดโพลปัจจุบัน', component: OderDetailPage },
      { title: 'จัดการร้าน', component: ShopManagePage },
      { title: 'จัดการคน', component: UsermanagePage },
      { title: 'Logout', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
