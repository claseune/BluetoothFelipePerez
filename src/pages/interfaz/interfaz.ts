import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition';


/**
 * Generated class for the InterfazPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-interfaz',
  templateUrl: 'interfaz.html',
})
export class InterfazPage {

  texto = "Prueba Voz";
  estado = "Incierto";
  contador = 0;
  Board;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ble: BLE, public speechRecognition: SpeechRecognition,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterfazPage');
  }

  PrenderLeds() {
    this.Recognition();
  }

  Recognition() {
    let Opciones: SpeechRecognitionListeningOptions = {
    }
    this.speechRecognition.startListening(Opciones).subscribe(
      (matches: Array<string>) => {
        this.texto = matches[0];
        //---------------------------
          this.ble.connect(this.navParams.get('ID')).subscribe(peripheralData => {
            console.log(peripheralData);
          }, peripheralData => {
            console.log('disconnected');
          });
        this.Alerta();
        var data = new Uint8Array(1);
        if (this.texto == "izquierda" || this.texto == "left") {
          data[0] = 1;
        }
        if (this.texto == "derecha" || this.texto == "right") {
          data[0] = 0;
        }
        this.ble.write(this.navParams.get('ID'), 'FF10', 'FF11', data.buffer);
      },
      (onerror) => console.log('error:', onerror));
  }

  Alerta() {
    let alert = this.alertCtrl.create({
      title: this.estado + ' ' + this.navParams.get('ID'),
      subTitle: this.texto,
      buttons: ['OK']
    });
    alert.present();
  }
}
