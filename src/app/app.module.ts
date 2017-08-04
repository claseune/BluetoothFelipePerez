import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BLE } from '@ionic-native/ble';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ColorPickerModule } from 'ngx-color-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InterfazPage } from '../pages/interfaz/interfaz';
import { ColorpPage } from '../pages/colo-pic/colo-pic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InterfazPage,
    ColorpPage
  ],
  imports: [
    ColorPickerModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InterfazPage,
    ColorpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    LocalNotifications,
    SpeechRecognition,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
