(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"] }])
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title  text-center><app-logo></app-logo></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        })
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.module.ts ***!
  \*****************************************************/
/*! exports provided: MyWalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageModule", function() { return MyWalletPageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-wallet.page */ "./src/app/pages/my-wallet/my-wallet.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { SendConfirmPage } from '../send-confirm/send-confirm.page';
var MyWalletPageModule = /** @class */ (function () {
    function MyWalletPageModule() {
    }
    MyWalletPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _my_wallet_page__WEBPACK_IMPORTED_MODULE_3__["MyWalletPage"] }])
            ],
            declarations: [
                _my_wallet_page__WEBPACK_IMPORTED_MODULE_3__["MyWalletPage"],
            ],
            entryComponents: [
            //SendConfirmPage
            ]
        })
    ], MyWalletPageModule);
    return MyWalletPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      <app-logo></app-logo>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-label>Total Mozo Coin</ion-label>\n      <ion-item mode=\"md\" lines=\"none\" no-padding>\n        <ion-icon no-stroke src=\"assets/svg/mozo-offchain.svg\"></ion-icon>&nbsp;\n        <ion-card-title>{{balance | number}}</ion-card-title>\n      </ion-item>\n      <ion-card-subtitle>₩102.230</ion-card-subtitle>\n      <p>\n        <ion-label>Wallet Address</ion-label><br />\n        <small>{{address}}</small>\n      </p>\n    </ion-card-header>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding-top padding-start>\n        <ion-button (click)=\"send()\" margin-end-xs large-radius expand=\"block\">Send</ion-button>\n      </ion-col>\n      <ion-col no-padding-top padding-end>\n        <ion-button margin-start-xs large-radius expand=\"block\">Payment Request</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list padding-bottom padding-horizontal margin-h-xs>\n    <h6>Transaction History</h6>\n    <ion-item mode=\"md\" no-inner-end no-padding lines=\"full\">\n      <ion-icon size=\"large\" slot=\"start\" src=\"assets/svg/send.svg\"></ion-icon>\n      <ion-label color=\"medium\" text-wrap>\n        <h3>Received</h3>\n        <small><i>From Store - 3:00 Aug 08, 2018</i></small>\n      </ion-label>\n      <label slot=\"end\">\n        <ion-text color=\"primary\">+300</ion-text><br />\n        <!-- <small><i>300</i></small> -->\n      </label>\n    </ion-item>\n    <ion-item mode=\"md\" no-inner-end no-padding lines=\"full\">\n      <ion-icon size=\"large\" slot=\"start\" src=\"assets/svg/receive.svg\"></ion-icon>\n      <ion-label color=\"medium\" text-wrap>\n        <h3>Received</h3>\n        <small><i>From Store - 3:00 Aug 08, 2018</i></small>\n      </ion-label>\n      <label slot=\"end\">\n        <ion-text color=\"primary\">+300</ion-text><br />\n        <!-- <small><i>300</i></small> -->\n      </label>\n    </ion-item>\n    <ion-item mode=\"md\" no-inner-end no-padding lines=\"full\">\n      <ion-icon size=\"large\" slot=\"start\" src=\"assets/svg/send.svg\"></ion-icon>\n      <ion-label color=\"medium\" text-wrap>\n        <h3>Received</h3>\n        <small><i>From Store - 3:00 Aug 08, 2018</i></small>\n      </ion-label>\n      <label slot=\"end\">\n        <ion-text color=\"primary\">+300</ion-text><br />\n        <!-- <small><i>300</i></small> -->\n      </label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9QUk9KRUNUUy9CaWdMYWIvbW96by13YWxsZXQvc3JjL2FwcC9wYWdlcy9teS13YWxsZXQvbXktd2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXdhbGxldC9teS13YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.page.ts ***!
  \***************************************************/
/*! exports provided: MyWalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPage", function() { return MyWalletPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _send_confirm_send_confirm_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-confirm/send-confirm.page */ "./src/app/pages/send-confirm/send-confirm.page.ts");
/* harmony import */ var _services_mozo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mozo.service */ "./src/app/services/mozo.service.ts");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.globals */ "./src/app/app.globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MyWalletPage = /** @class */ (function () {
    function MyWalletPage(nav, mozoService, appGlobals, modalController) {
        this.nav = nav;
        this.mozoService = mozoService;
        this.appGlobals = appGlobals;
        this.modalController = modalController;
        this.address = null;
        this.balance = 0;
        console.log("my wallet 3");
    }
    MyWalletPage.prototype.openSendConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _send_confirm_send_confirm_page__WEBPACK_IMPORTED_MODULE_2__["SendConfirmPage"],
                            componentProps: { params: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyWalletPage.prototype.send = function () {
        this.nav.navigateForward("/send");
    };
    MyWalletPage.prototype.ngAfterViewInit = function () {
        console.log("my wallet 2");
    };
    MyWalletPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("my wallet");
        this.address = this.appGlobals.address;
        this.mozoService.getBalance(this.address).subscribe(function (res) {
            var data = res.body;
            if (data) {
                _this.balance = data['balance'] / 100;
            }
            console.log("data balance ", data);
        }, function (error) {
        });
    };
    MyWalletPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-wallet',
            template: __webpack_require__(/*! ./my-wallet.page.html */ "./src/app/pages/my-wallet/my-wallet.page.html"),
            styles: [__webpack_require__(/*! ./my-wallet.page.scss */ "./src/app/pages/my-wallet/my-wallet.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_mozo_service__WEBPACK_IMPORTED_MODULE_3__["MozoService"],
            _app_globals__WEBPACK_IMPORTED_MODULE_4__["AppGlobals"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], MyWalletPage);
    return MyWalletPage;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"] }])
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center><app-logo></app-logo></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button *ngIf=\"true\" (click)=\"onLogout()\">Logout</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = /** @class */ (function () {
    function SettingPage(keycloakService, appService) {
        this.keycloakService = keycloakService;
        this.appService = appService;
    }
    SettingPage.prototype.onLogout = function () {
        var _this = this;
        this.appService.deleteSetting(['token', 'refreshToken', 'Address']).then(function (data) {
            console.log(data);
            _this.keycloakService.logout(window.location.origin);
        }, function (error) {
            console.log(error);
            _this.keycloakService.logout(window.location.origin);
        });
    };
    SettingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/pages/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")]
        }),
        __metadata("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_1__["KeycloakService"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction/transaction.module */ "./src/app/pages/transaction/transaction.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _my_wallet_my_wallet_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../my-wallet/my-wallet.module */ "./src/app/pages/my-wallet/my-wallet.module.ts");
/* harmony import */ var _setting_setting_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../setting/setting.module */ "./src/app/pages/setting/setting.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _my_wallet_my_wallet_module__WEBPACK_IMPORTED_MODULE_8__["MyWalletPageModule"],
                _setting_setting_module__WEBPACK_IMPORTED_MODULE_9__["SettingPageModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageModule"],
                _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_6__["TransactionPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab tab=\"my-wallet\">\n    <ion-router-outlet name=\"my-wallet\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"about\">\n    <ion-router-outlet name=\"about\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"transaction\">\n    <ion-router-outlet name=\"transaction\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"setting\">\n    <ion-router-outlet name=\"setting\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"my-wallet\" href=\"/app/tabs/(my-wallet:my-wallet)\">\n      <ion-icon is-server=\"true\" src=\"assets/svg/wallet-icon.svg\"></ion-icon>\n      <ion-label>My Wallet</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\" href=\"/app/tabs/(about:about)\">\n      <ion-icon img-icon-tab src=\"assets/svg/address-book.svg\"></ion-icon>\n      <ion-label>Address Book</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"transaction\" href=\"/app/tabs/(transaction:transaction)\">\n      <ion-icon img-icon-tab src=\"assets/svg/paper-icon.svg\"></ion-icon>\n      <ion-label>Transaction</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"setting\" href=\"/app/tabs/(setting:setting)\">\n      <ion-icon img-icon-tab src=\"assets/svg/setting.svg\"></ion-icon>\n      <ion-label>Setting</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _my_wallet_my_wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-wallet/my-wallet.page */ "./src/app/pages/my-wallet/my-wallet.page.ts");
/* harmony import */ var _about_about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.page */ "./src/app/pages/about/about.page.ts");
/* harmony import */ var _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transaction/transaction.page */ "./src/app/pages/transaction/transaction.page.ts");
/* harmony import */ var _setting_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setting/setting.page */ "./src/app/pages/setting/setting.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: 'my-wallet',
                outlet: 'my-wallet',
                component: _my_wallet_my_wallet_page__WEBPACK_IMPORTED_MODULE_3__["MyWalletPage"]
            },
            {
                path: 'about',
                outlet: 'about',
                component: _about_about_page__WEBPACK_IMPORTED_MODULE_4__["AboutPage"]
            },
            {
                path: 'transaction',
                outlet: 'transaction',
                component: _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_5__["TransactionPage"]
            },
            {
                path: 'setting',
                outlet: 'setting',
                component: _setting_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.module.ts ***!
  \*********************************************************/
/*! exports provided: TransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction.page */ "./src/app/pages/transaction/transaction.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _transaction_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPage"] }])
            ],
            declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPage"]]
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      <app-logo></app-logo>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <loading top=\"35%\" *ngIf=\"loading; else loadingComplate\"></loading>\n  <ng-template #loadingComplate>\n    <ion-grid class=\"fixed-container\" no-padding slot=\"fixed\">\n      <ion-row no-padding>\n        <ion-col no-padding>\n          <ion-button size=\"small\" margin-end-xs large-radius expand=\"block\">All</ion-button>\n        </ion-col>\n        <ion-col no-padding>\n          <ion-button color=\"light\" size=\"small\" margin-end-xs large-radius expand=\"block\">Received</ion-button>\n        </ion-col>\n        <ion-col no-padding>\n          <ion-button color=\"light\" size=\"small\" margin-end-xs large-radius expand=\"block\">Sent</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list class=\"transaction-list\">\n      <ng-container *ngFor=\"let item of data\">\n        <ion-item mode=\"md\" *ngIf=\"item.addressTo.toLowerCase() != address.toLowerCase(); else elseBlock\" no-inner-end\n          no-padding lines=\"full\">\n          <ion-icon size=\"large\" slot=\"start\" src=\"assets/svg/send.svg\"></ion-icon>\n          <ion-label color=\"dark\" text-wrap>\n            <h3>Sent</h3>\n            <small><i>\n                <ion-text color=\"medium\">To Store - {{item.time * 1000 | date:'hh:mm MMM d, y'}}</ion-text>\n              </i></small>\n          </ion-label>\n          <label slot=\"end\">\n            <ion-text>-{{item.amount / 100 | number}}</ion-text><br />\n            <!-- <small><i>300</i></small> -->\n          </label>\n        </ion-item>\n        <ng-template #elseBlock>\n          <ion-item mode=\"md\" *ngIf=\"item; else elseBlock\" no-inner-end no-padding lines=\"full\">\n            <ion-icon size=\"large\" slot=\"start\" src=\"assets/svg/receive.svg\"></ion-icon>\n            <ion-label color=\"dark\" text-wrap>\n              <h3>Received</h3>\n              <small><i>\n                  <ion-text color=\"medium\">From Store - {{item.time * 1000 | date:'hh:mm MMM d, y'}}</ion-text>\n                </i></small>\n            </ion-label>\n            <label slot=\"end\">\n              <ion-text color=\"primary\">+{{item.amount / 100 | number}}</ion-text><br />\n              <!-- <small><i>300</i></small> -->\n            </label>\n          </ion-item>\n        </ng-template>\n      </ng-container>\n\n      <!-- <ion-item *ngFor=\"let item of data\">\n      <span slot=\"start\" class=\"dot\"></span>\n      <ion-label>{{item.contractAddress}}</ion-label>\n    </ion-item> -->\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getTransactions($event)\">\n      <ion-infinite-scroll-content class=\"custom-spinner\" loadingSpinner=\"dots\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/transaction/transaction.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-container {\n  height: 70px;\n  padding: 0 15px;\n  margin-left: -5px;\n  margin-right: 0; }\n  .fixed-container ion-col {\n    background-color: #fff;\n    padding: 15px 5px; }\n  .transaction-list {\n  padding-top: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9QUk9KRUNUUy9CaWdMYWIvbW96by13YWxsZXQvc3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWUsRUFPbEI7RUFYRDtJQU9RLHVCQUFzQjtJQUN0QixrQkFBaUIsRUFDcEI7RUFJTDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1jb250YWluZXIge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICAgIH1cbiAgICBcbn1cblxuLnRyYW5zYWN0aW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/transaction/transaction.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.ts ***!
  \*******************************************************/
/*! exports provided: TransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPage", function() { return TransactionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_mozo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mozo.service */ "./src/app/services/mozo.service.ts");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.globals */ "./src/app/app.globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionPage = /** @class */ (function () {
    function TransactionPage(mozoService, appGlobals) {
        this.mozoService = mozoService;
        this.appGlobals = appGlobals;
        this.loading = true;
        this.address = '';
        this.data = [];
        this.page = 1;
        this.perPage = 20;
        this.address = this.appGlobals.address;
        this.getTransactions();
    }
    TransactionPage.prototype.getTransactions = function (event) {
        var _this = this;
        this.mozoService.getTransactions(this.appGlobals.address, { page: this.page, size: this.perPage }).subscribe(function (res) {
            var dataRes = res.body;
            _this.loading = false;
            _this.data = _this.data.concat(res.body);
            _this.page += 1;
            event && event.target.complete();
            if (dataRes.length < _this.perPage && event) {
                event.target.disabled = true;
            }
            // let txhistory = JSON.parse(body);
            //     txhistory = R.map(x => {
            //       if (x.decimal) {
            //         x.amount /= Math.pow(10, x.decimal);
            //       }
            //       x.exchange_rates = R.map(y => {
            //         let exchange_rate_data = userReference.get(network + "_" + y);
            //         if (exchange_rate_data) {
            //           return {
            //             currency : exchange_rate_data.currency,
            //             value: x.amount * exchange_rate_data.rate
            //           };
            //         }
            //       }, CONSTANTS.CURRENCY_EXCHANGE_RATE);
            //       x.address_book_name = null;
            //       x.addressFrom = x.addressFrom.toLowerCase();
            //       x.addressTo = x.addressTo.toLowerCase();
            //       let address_book_data = address_book.get();
            //       let temp_address_book_data = null;
            //       if (address_book_data) {
            //         for (var index = 0; index < address_book_data.length; ++index) {
            //           temp_address_book_data =
            //             address_book_data[index].soloAddress.toLowerCase();
            //           if (x.addressFrom == temp_address_book_data ||
            //               x.addressTo == temp_address_book_data) {
            //             x.address_book_name = address_book_data[index].name;
            //             break;
            //           }
            //         }
            //       }
            //       return x;
            //     }, txhistory);
            //     resolve(txhistory);
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["InfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["InfiniteScroll"])
    ], TransactionPage.prototype, "infiniteScroll", void 0);
    TransactionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transaction-page',
            template: __webpack_require__(/*! ./transaction.page.html */ "./src/app/pages/transaction/transaction.page.html"),
            styles: [__webpack_require__(/*! ./transaction.page.scss */ "./src/app/pages/transaction/transaction.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_mozo_service__WEBPACK_IMPORTED_MODULE_2__["MozoService"],
            _app_globals__WEBPACK_IMPORTED_MODULE_3__["AppGlobals"]])
    ], TransactionPage);
    return TransactionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map