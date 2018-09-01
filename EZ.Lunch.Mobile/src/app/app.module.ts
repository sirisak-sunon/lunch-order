import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OderDetailPage } from '../pages/oder-detail/oder-detail';
import { OrderCreatePage } from '../pages/order-create/order-create';
import { OrderHistoryPage } from '../pages/order-history/order-history';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OderDetailPage,
    OrderCreatePage,
    OrderHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OderDetailPage,
    OrderCreatePage,
    OrderHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
