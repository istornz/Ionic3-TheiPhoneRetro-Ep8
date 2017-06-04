import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NativeStoragePage } from '../pages/native-storage/native-storage';
import { SQLitePage } from '../pages/sqlite/sqlite';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Native components
import { NativeStorage }  from '@ionic-native/native-storage';
import { SQLite }         from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    NativeStoragePage,
    SQLitePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NativeStoragePage,
    SQLitePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
