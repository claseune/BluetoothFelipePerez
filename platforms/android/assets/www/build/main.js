webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaz_interfaz__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, ble, toastCtrl, localNotifications, modalCtrl) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.localNotifications = localNotifications;
        this.modalCtrl = modalCtrl;
        this.notificaciones = [];
        this.notificaciones2 = [];
        this.disp = [];
    }
    HomePage.prototype.ScanBLE = function () {
        var _this = this;
        if (this.scan == true) {
            this.MessageShow();
        }
        else {
            this.MessageShow();
            this.scan = true;
            this.disp.length = 0;
            this.ble.startScan([]).subscribe(function (device) {
                console.log(JSON.stringify(device));
                _this.disp.push(device);
            });
            setTimeout(function () {
                _this.ble.stopScan();
            }, 5000);
            this.scan = false;
        }
    };
    HomePage.prototype.MessageShow = function () {
        var Message = this.toastCtrl.create({
            position: 'bot',
            message: 'Inicio el scaner',
            showCloseButton: true,
            closeButtonText: 'HAI'
        });
    };
    HomePage.prototype.Interfaz = function (Id) {
        var info = {
            ID: Id
        };
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__interfaz_interfaz__["a" /* InterfazPage */], info).present();
    };
    HomePage.prototype.Noti = function () {
        var _this = this;
        var Noti1 = new Date();
        Noti1.setHours(19);
        Noti1.setMinutes(30);
        var Noti2 = new Date();
        Noti2.setHours(20);
        Noti2.setMinutes(30);
        var Noti001 = {
            id: 1,
            title: 'Tarea',
            text: 'Esta es la tarea que encargo',
            add: Noti1
        };
        var Noti002 = {
            id: 2,
            title: 'Tarea2',
            text: 'Esta es la tarea que encargo 2',
            add: Noti1
        };
        this.notificaciones.push(Noti001);
        this.notificaciones2.push(Noti002);
        console.log("Notificaciones: ", this.notificaciones);
        console.log("Notificaciones: ", this.notificaciones2);
        this.localNotifications.cancelAll().then(function () {
            _this.localNotifications.schedule(_this.notificaciones);
            _this.localNotifications.schedule(_this.notificaciones2);
            _this.notificaciones.length = 0;
            _this.notificaciones2.length = 0;
            var teast = _this.toastCtrl.create({
                position: 'top',
                message: 'Ya se hizo la notificacion',
                showCloseButton: true,
                closeButtonText: 'HAI'
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> \n      Chaleco\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="danger" (click)="Noti()">Notificacion</button>\n  <button ion-button color="green" (click)="ScanBLE()">Scanear Dispositivos</button>\n  <br/>\n  <br/>\n  <ion-list id="Dispositivos">\n    <ion-item *ngFor=" let dev of disp">\n    <button ion-item (click)="Interfaz(dev.id)">\n      <ion-avatar item-start>\n        <img src="http://findicons.com/files/icons/1580/devine_icons_part_2/512/device_and_hardware.png">\n      </ion-avatar>\n      <h1>{{dev.name}}</h1>\n      <h2>{{dev.id}}</h2>\n      <h3>{{dev.rssi}}</h3>\n    </button>\n    </ion-item>\n   </ion-list> \n</ion-content>\n'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfazPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InterfazPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InterfazPage = (function () {
    function InterfazPage(navCtrl, navParams, ble, speechRecognition, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.speechRecognition = speechRecognition;
        this.alertCtrl = alertCtrl;
        this.texto = "Prueba Voz";
        this.estado = "Incierto";
        this.contador = 0;
    }
    InterfazPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterfazPage');
    };
    InterfazPage.prototype.PrenderLeds = function () {
        this.Recognition();
    };
    InterfazPage.prototype.Recognition = function () {
        var _this = this;
        var Opciones = {};
        this.speechRecognition.startListening(Opciones).subscribe(function (matches) {
            _this.texto = matches[0];
            _this.ble.connect(_this.navParams.get('ID')).subscribe(function (peripheralData) {
                console.log(peripheralData);
            }, function (peripheralData) {
                console.log('disconnected');
            });
            _this.Alerta();
            var data = new Uint8Array(1);
            if (_this.texto == "izquierda" || _this.texto == "left") {
                data[0] = 1;
            }
            if (_this.texto == "derecha" || _this.texto == "right") {
                data[0] = 0;
            }
            _this.ble.write(_this.navParams.get('ID'), 'FF10', 'FF11', data.buffer);
        }, function (onerror) { return console.log('error:', onerror); });
    };
    InterfazPage.prototype.Alerta = function () {
        var alert = this.alertCtrl.create({
            title: this.estado + ' ' + this.navParams.get('ID'),
            subTitle: this.texto,
            buttons: ['OK']
        });
        alert.present();
    };
    return InterfazPage;
}());
InterfazPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-interfaz',template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\interfaz\interfaz.html"*/'<!--\n  Generated template for the InterfazPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>INDICACIONES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button color="danger" (click)="PrenderLeds()">Microfono</button>\n  <br/>\n  <br/>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\interfaz\interfaz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], InterfazPage);

//# sourceMappingURL=interfaz.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_interfaz_interfaz__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_interfaz_interfaz__["a" /* InterfazPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_interfaz_interfaz__["a" /* InterfazPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map