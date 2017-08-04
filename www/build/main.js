webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colo_pic_colo_pic__ = __webpack_require__(200);
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
    function HomePage(navCtrl, navParams, bluetooth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bluetooth = bluetooth;
        this.color = "#127bdc";
    }
    HomePage.prototype.discoverUnpairedDevices = function () {
        var _this = this;
        console.log('Buscando...');
        this.bluetooth.discoverUnpaired().then(function (resp) {
            _this.unpaireds = resp;
            console.log(_this.unpaireds);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.connectToDevice = function (id) {
        var _this = this;
        this.bluetooth.connect(id).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__colo_pic_colo_pic__["a" /* ColorpPage */]);
            _this.bluetooth.write('CONECTADO');
            console.log('ID: ' + id);
            console.log('resp ' + resp);
            //LOS SUBSCRIBE ,.... hay dos tipos de variables 
        });
    };
    ///nuevo
    HomePage.prototype.sendData = function () {
        var _this = this;
        console.log(this.data);
        this.bluetooth.write(this.data).then(function (resp) {
            console.log('SD_r: ' + resp);
            _this.data = "";
        }, function (error) {
            console.log('SD_e: ' + error);
        });
        //de aqui mando el device al que me quiero conectar
    };
    HomePage.prototype.onItemChange = function (selectedValue) {
        console.log(selectedValue.slice(4, -1));
        this.colorToSet = selectedValue.slice(4, -1);
    };
    HomePage.prototype.setColor = function () {
        if (this.colorToSet) {
            this.bluetooth.write(this.colorToSet).then(function (resp) {
            }, function (error) {
                alert(error);
            });
            console.log(this.colorToSet);
            console.log("set color: " + this.colorToSet);
        }
    };
    ///nuevooo aqui termina
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bluetooth.list().then(function (success) {
            console.log(success);
            _this.devices = success;
        }, function (error) {
            console.log(error);
        }); //trae la lista d elos que ya
        console.log('ionViewDidLoad BleSerialPage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-toolbar>\n    <ion-navbar>\n      <ion-title>Bluetooth Serial</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="discoverUnpairedDevices()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-item-group>\n    <ion-item-divider color="light">Dispositivos vinculados</ion-item-divider>\n    <button ion-item *ngFor="let PairDevice of devices" (click)="connectToDevice(PairDevice.address)">\n        <h2>{{PairDevice.name}}</h2>\n        <p>{{PairDevice.address}}</p>\n      </button>\n  </ion-item-group>\n  <ion-item-group *ngIf="unpaireds">\n    <ion-item-divider color="light">Dispositivos econtrados</ion-item-divider>\n    <button ion-item *ngFor="let UnpairDevice of unpaireds" (click)="connectToDevice(UnpairDevice.address)">\n      <h2>{{UnpairDevice.name}}</h2>\n      <p>{{UnpairDevice.address}}</p>\n    </button>\n  </ion-item-group>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorpPage = (function () {
    function ColorpPage(navCtrl, navParams, bluetooth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bluetooth = bluetooth;
        this.color = "#127bdc";
    }
    ColorpPage.prototype.onItemChange = function (selectedValue) {
        console.log(selectedValue.slice(4, -1));
        this.colorToSet = selectedValue.slice(4, -1);
    };
    ColorpPage.prototype.setColor = function () {
        if (this.colorToSet) {
            this.bluetooth.write(this.colorToSet).then(function (resp) {
            }, function (error) {
                alert(error);
            });
            console.log(this.colorToSet);
            console.log("set color: " + this.colorToSet);
        }
    };
    ColorpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColorpPage');
    };
    return ColorpPage;
}());
ColorpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-colorp',
        templateUrl: 'colorp.html',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
], ColorpPage);

//# sourceMappingURL=colo-pic.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_interfaz_interfaz__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_colo_pic_colo_pic__ = __webpack_require__(200);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_interfaz_interfaz__["a" /* InterfazPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_colo_pic_colo_pic__["a" /* ColorpPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_interfaz_interfaz__["a" /* InterfazPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_colo_pic_colo_pic__["a" /* ColorpPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfazPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(197);
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
            //---------------------------
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-interfaz',template:/*ion-inline-start:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\interfaz\interfaz.html"*/'<!--\n  Generated template for the InterfazPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>INDICACIONES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button color="danger" (click)="PrenderLeds()">Microfono</button>\n  <br/>\n  <br/>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\espem\Desktop\Universidad\Desarrollo de Apps\ProyectBLE\ProyectBLE\src\pages\interfaz\interfaz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], InterfazPage);

//# sourceMappingURL=interfaz.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map