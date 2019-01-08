(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pin-confirm-pin-confirm-module"],{

/***/ "./src/app/pages/pin-confirm/pin-confirm.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pin-confirm/pin-confirm.module.ts ***!
  \*********************************************************/
/*! exports provided: PinConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinConfirmPageModule", function() { return PinConfirmPageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pin_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin-confirm.page */ "./src/app/pages/pin-confirm/pin-confirm.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PinConfirmPageModule = /** @class */ (function () {
    function PinConfirmPageModule() {
    }
    PinConfirmPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _pin_confirm_page__WEBPACK_IMPORTED_MODULE_3__["PinConfirmPage"] }])
            ],
            declarations: [_pin_confirm_page__WEBPACK_IMPORTED_MODULE_3__["PinConfirmPage"]]
        })
    ], PinConfirmPageModule);
    return PinConfirmPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pin-confirm/pin-confirm.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/pin-confirm/pin-confirm.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center>\n            <app-logo></app-logo>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <loading top=\"35%\" *ngIf=\"loading; else confirmPin\"></loading>\n    <ng-template #confirmPin>\n        <ion-grid full-height no-padding>\n            <ion-row full-height no-padding>\n                <ion-col height-20 size=\"12\" text-center align-items-start>\n                    <div margin-vertical *ngIf=\"isPinConfirm; else pinCode\">\n                        <h3 title no-margin>CONFIRM SECURITY PIN</h3>\n                        <p>Re-enter your PIN</p>\n                    </div>\n                    <ng-template #pinCode>\n                        <div margin-vertical>\n                            <h3 title no-margin>ENTER YOUR SECURITY PIN</h3>\n                            <p>Security PIN should be 6 di-git numbers</p>\n                        </div>\n                    </ng-template>\n                    <div *ngIf=\"pinError\" item-center-small-icon>\n                        <ion-icon margin-top custom-icon size=\"small\" src=\"assets/svg/failed.svg\"></ion-icon>\n                        <ion-label color=\"medium\"><small size-md> &nbsp;<ion-text color=\"danger\">Incorrect PIN</ion-text></small></ion-label>\n                    </div>\n                </ion-col>\n                <ion-col height-65 size=\"12\" align-items-stretch>\n                    <pin-code (change)=\"onChange($event)\"></pin-code>\n                </ion-col>\n                <ion-col height-15 size=\"12\" align-items-end no-padding>\n                    <ion-row align-items-end full-height no-padding>\n                        <ion-col padding-bottom>\n                            <ion-button [disabled]=\"pin.length <= 5\" (click)=\"continue()\" align-items-end shadow expand=\"block\">Continue</ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/pin-confirm/pin-confirm.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/pin-confirm/pin-confirm.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bpbi1jb25maXJtL3Bpbi1jb25maXJtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pin-confirm/pin-confirm.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pin-confirm/pin-confirm.page.ts ***!
  \*******************************************************/
/*! exports provided: PinConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinConfirmPage", function() { return PinConfirmPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.globals */ "./src/app/app.globals.ts");
/* harmony import */ var _services_mozo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mozo.service */ "./src/app/services/mozo.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/app/utils/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpResponse } from "@angular/common/http";
// import { KeycloakService } from 'keycloak-angular';




var PinConfirmPage = /** @class */ (function () {
    function PinConfirmPage(appGlobals, nav, mozoService, appService) {
        this.appGlobals = appGlobals;
        this.nav = nav;
        this.mozoService = mozoService;
        this.appService = appService;
        this.loading = false;
        this.pinError = false;
        this.isPinConfirm = true;
        this.pin = "";
        if (this.appGlobals.encryptSeedWord) {
            this.isPinConfirm = false;
        }
    }
    PinConfirmPage.prototype.onChange = function (pin) {
        this.pinError = false;
        this.pin = pin;
    };
    PinConfirmPage.prototype.continue = function () {
        var _this = this;
        var mnemonic = this.appGlobals.seedWord;
        if (this.appGlobals.encryptSeedWord) {
            mnemonic = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].encryption.decrypt(this.appGlobals.encryptSeedWord, this.pin);
        }
        if (mnemonic) {
            this.loading = true;
            var wallet = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].wallet.generateWallets(mnemonic);
            var address_1 = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].wallet.generateAddressAtIndex(wallet, 0);
            if (address_1) {
                address_1['privkey'] = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].encryption.encrypt(address_1['privkey'], this.pin);
                console.log("address", address_1);
                var saveAddress_1 = function () {
                    _this.appGlobals.address = address_1.address;
                    _this.appService.addSetting({
                        "Address": address_1
                    }).then(function (data) {
                        console.log(data);
                    }, function (error) {
                        console.log(error);
                    });
                };
                if (this.appGlobals.seedWord) {
                    var repData = {
                        encryptSeedPhrase: _utils__WEBPACK_IMPORTED_MODULE_5__["default"].encryption.encrypt(mnemonic, this.pin),
                        offchainAddress: address_1.address
                    };
                    this.mozoService.updateWalletInfo(repData).subscribe(function (res) {
                        var data = res.body;
                        console.log("user", data);
                        saveAddress_1();
                        _this.nav.navigateRoot('/app/tabs/(my-wallet:my-wallet)');
                    }, function (error) {
                        console.log("error", error);
                    });
                }
                else {
                    saveAddress_1();
                    this.nav.navigateRoot('/app/tabs/(my-wallet:my-wallet)');
                }
            }
        }
        else {
            this.pinError = true;
        }
    };
    PinConfirmPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pin-confirm',
            template: __webpack_require__(/*! ./pin-confirm.page.html */ "./src/app/pages/pin-confirm/pin-confirm.page.html"),
            styles: [__webpack_require__(/*! ./pin-confirm.page.scss */ "./src/app/pages/pin-confirm/pin-confirm.page.scss")]
        }),
        __metadata("design:paramtypes", [_app_globals__WEBPACK_IMPORTED_MODULE_2__["AppGlobals"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_mozo_service__WEBPACK_IMPORTED_MODULE_3__["MozoService"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], PinConfirmPage);
    return PinConfirmPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pin-confirm-pin-confirm-module.js.map