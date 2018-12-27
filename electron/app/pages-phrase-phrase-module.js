(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-phrase-phrase-module"],{

/***/ "./src/app/pages/phrase/phrase.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/phrase/phrase.module.ts ***!
  \***********************************************/
/*! exports provided: PhrasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasePageModule", function() { return PhrasePageModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _phrase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phrase.page */ "./src/app/pages/phrase/phrase.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PhrasePageModule = /** @class */ (function () {
    function PhrasePageModule() {
    }
    PhrasePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{ path: '', component: _phrase_page__WEBPACK_IMPORTED_MODULE_3__["PhrasePage"] }])
            ],
            declarations: [_phrase_page__WEBPACK_IMPORTED_MODULE_3__["PhrasePage"]]
        })
    ], PhrasePageModule);
    return PhrasePageModule;
}());



/***/ }),

/***/ "./src/app/pages/phrase/phrase.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/phrase/phrase.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title text-center>\n      <app-logo></app-logo>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid full-height no-padding>\n    <ion-row full-height no-padding>\n      <ion-col height-30 size=\"12\" text-center align-items-start>\n        <div margin-vertical>\n          <h3 title no-margin>Store Recovery Phrase</h3>\n          <p>Please write it down on a paper and keep it in a safe place as you would with paper money\n          </p>\n          <p>\n            <ion-label color=\"danger\">*If you lose your recovery phase, your wallet cannot be recovered.\n            </ion-label>\n          </p>\n        </div>\n      </ion-col>\n      <ion-col class=\"phrase-content\" text-center height-30 size=\"12\" align-items-stretch padding-end>\n        {{mnemonic}}\n      </ion-col>\n      <ion-col height-40 size=\"12\" align-items-end no-padding>\n        <ion-row align-items-end full-height no-padding>\n          <ion-col padding-bottom>\n            <div [class]=\"isConfirmed?'primary':'medium'\">\n              <ion-button (click)=\"confirmStoredPhrase()\" no-background-btn expand=\"block\" fill=\"outline\" margin-bottom>\n                <ion-checkbox [checked]=\"isConfirmed\"></ion-checkbox>\n                &nbsp;&nbsp; <small><i>I have safely stored recovery phrase</i></small>\n              </ion-button>\n            </div>\n            <ion-button [disabled]=\"!isConfirmed\" (click)=\"continue()\" align-items-end shadow expand=\"block\">Continue</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/phrase/phrase.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/phrase/phrase.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".phrase-content {\n  font-size: 120%;\n  color: var(--ion-color-primary);\n  word-spacing: 15px;\n  line-height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9QUk9KRUNUUy9CaWdMYWIvbW96by13YWxsZXQvc3JjL2FwcC9wYWdlcy9waHJhc2UvcGhyYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waHJhc2UvcGhyYXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waHJhc2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHdvcmQtc3BhY2luZzogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/phrase/phrase.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/phrase/phrase.page.ts ***!
  \*********************************************/
/*! exports provided: PhrasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasePage", function() { return PhrasePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/app/utils/index.ts");
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




var PhrasePage = /** @class */ (function () {
    function PhrasePage(nav, appGlobals) {
        this.nav = nav;
        this.appGlobals = appGlobals;
        this.mnemonic = '';
        this.isConfirmed = false;
        this.mnemonic = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].wallet.generateMnemonic();
        console.log("mnemonic", this.mnemonic);
    }
    PhrasePage.prototype.confirmStoredPhrase = function () {
        this.isConfirmed = !this.isConfirmed;
    };
    PhrasePage.prototype.continue = function () {
        this.appGlobals.seedWord = this.mnemonic;
        this.appGlobals.encryptSeedWord = null;
        this.nav.navigateForward("/pin");
    };
    PhrasePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phrase',
            template: __webpack_require__(/*! ./phrase.page.html */ "./src/app/pages/phrase/phrase.page.html"),
            styles: [__webpack_require__(/*! ./phrase.page.scss */ "./src/app/pages/phrase/phrase.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _app_globals__WEBPACK_IMPORTED_MODULE_3__["AppGlobals"]])
    ], PhrasePage);
    return PhrasePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-phrase-phrase-module.js.map