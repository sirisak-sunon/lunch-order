import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OderDetailPage } from '../pages/oder-detail/oder-detail';
import { OrderCreatePage } from '../pages/order-create/order-create';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ShopCreatePage } from '../pages/shop-create/shop-create';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';
import { ShopManagePage } from '../pages/shop-manage/shop-manage';
import { UsermanagePage } from '../pages/usermanage/usermanage';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OderDetailPage,
    OrderCreatePage,
    OrderHistoryPage,
    ShopCreatePage,
    ShopDetailPage,
    ShopManagePage,
    UsermanagePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OderDetailPage,
    OrderCreatePage,
    OrderHistoryPage,
    ShopCreatePage,
    ShopDetailPage,
    ShopManagePage,
    UsermanagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
