(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">TFE</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"/consensus-builder/datasets\">Consensus Builder</a>\n        <ng-container [ngSwitch]=\"memberService.isLoggedIn()\">\n          <a *ngSwitchCase=\"true\" mat-list-item routerLink=\"/profile\">Profile</a>\n          <a *ngSwitchCase=\"false\" mat-list-item routerLink=\"/login\">Login</a>\n        </ng-container>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\nmat-sidenav-content {\n  overflow-x: hidden;\n  padding: 1rem; }\n\nmat-sidenav-content p {\n    padding: 1rem 1rem 0;\n    margin: 0; }\n\nmat-sidenav-content p:last-child {\n      padding-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/app/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, memberService) {
        this.memberService = memberService;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        console.log('isLoggedIn', memberService.isLoggedIn());
    }
    AppComponent.prototype.ngOnInit = function () {
        gapi.load('auth2', function () {
            gapi.auth2.init({});
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tfe-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"],
            _common__WEBPACK_IMPORTED_MODULE_2__["MemberService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _consensus_builder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consensus-builder */ "./src/app/consensus-builder/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _consensus_builder__WEBPACK_IMPORTED_MODULE_10__["ConsensusBuilderComponent"],
                _consensus_builder__WEBPACK_IMPORTED_MODULE_10__["DatasetSelectorComponent"],
                _consensus_builder__WEBPACK_IMPORTED_MODULE_10__["ParticipantPromptComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            ],
            entryComponents: [
                _consensus_builder__WEBPACK_IMPORTED_MODULE_10__["ParticipantPromptComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _consensus_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consensus-builder */ "./src/app/consensus-builder/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");



var ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/consensus-builder/datasets',
    },
    {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'profile',
        component: _profile__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
    },
    {
        path: 'consensus-builder/datasets',
        component: _consensus_builder__WEBPACK_IMPORTED_MODULE_0__["DatasetSelectorComponent"],
    },
    {
        path: 'consensus-builder/datasets/:id',
        component: _consensus_builder__WEBPACK_IMPORTED_MODULE_0__["ConsensusBuilderComponent"],
    },
];


/***/ }),

/***/ "./src/app/common/dataset.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common/dataset.service.ts ***!
  \*******************************************/
/*! exports provided: DatasetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return DatasetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatasetService = /** @class */ (function () {
    function DatasetService(http) {
        this.http = http;
    }
    DatasetService.prototype.all = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + "/datasets");
    };
    DatasetService.prototype.get = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + "/datasets/" + id);
    };
    DatasetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DatasetService);
    return DatasetService;
}());



/***/ }),

/***/ "./src/app/common/index.ts":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! exports provided: DatasetService, MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataset_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataset.service */ "./src/app/common/dataset.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return _dataset_service__WEBPACK_IMPORTED_MODULE_0__["DatasetService"]; });

/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member.service */ "./src/app/common/member.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return _member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]; });





/***/ }),

/***/ "./src/app/common/member.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/member.service.ts ***!
  \******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
        this.token = null;
    }
    MemberService.prototype.login = function (googleUser) {
        var _this = this;
        var user = {};
        // ((u, p) => {
        //   u.id = p.getId();
        //   u.name = p.getName();
        //   u.email = p.getEmail();
        //   u.imageUrl = p.getImageUrl();
        //   u.givenName = p.getGivenName();
        //   u.familyName = p.getFamilyName();
        // })(user, googleUser.getBasicProfile());
        (function (u, r) {
            u.token = r.id_token;
        })(user, googleUser.getAuthResponse());
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/members/token-login", {
            token: user.token,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.token = res.id; }));
    };
    ;
    MemberService.prototype.logout = function () {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/members/logout?access_token=" + this.token, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.token = null;
            gapi.auth2.getAuthInstance().signOut();
        }));
    };
    MemberService.prototype.profile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/members/me?access_token=" + this.token);
    };
    MemberService.prototype.isLoggedIn = function () {
        return !!(this.token && gapi.auth2 && gapi.auth2.getAuthInstance().isSignedIn.get());
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/consensus-builder/consensus-builder/consensus-builder.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"header\">\n    <h1>Consensus Builder</h1>\n    <span>\n      <button mat-button color=\"warn\" (click)=\"reset()\">Reset</button>\n    </span>\n  </div>\n  <div *ngIf=\"!allSelectionsMade\">\n    <h2>Make Selections</h2>\n    <h3>Player {{ participantIndex + 1 }}</h3>\n    <p>Item {{ itemIndex + 1 }}/{{ items.length }}</p>\n    <mat-progress-bar\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"itemIndex / items.length * 100\">\n    </mat-progress-bar>\n    <div class=\"items\" [style.height]=\"maxCardHeight\">\n      <mat-card #itemCard class=\"item-card\" *ngFor=\"let item of items; index as i\"\n          [class.active]=\"i == itemIndex\"\n          [class.previous]=\"i < itemIndex\"\n          [class.next]=\"i > itemIndex\">\n        <mat-card-header>\n          <mat-card-title>{{ item.data.title }}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div class=\"content\">\n            <img [src]=\"item.data.thumbnail\">\n            <div class=\"description\">\n              <p>{{ item.data.description }}</p>\n              <a mat-button rel=\"noopener\" target=\"blank\" [href]=\"item.data.externalLink\">\n                Link <mat-icon>open_in_new</mat-icon>\n              </a>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions *ngIf=\"i == itemIndex\">\n          <button mat-button color=\"primary\" (click)=\"makeSelection(item, true)\">\n            <mat-icon>thumb_up</mat-icon>\n          </button>\n          <button mat-button color=\"warn\" (click)=\"makeSelection(item, false)\">\n            <mat-icon>thumb_down</mat-icon>\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"attribution\" *ngIf=\"selectedDataset\">\n      <p>{{ selectedDataset.attribution.text }}</p>\n      <img [src]=\"selectedDataset.attribution.logo\">\n    </div>\n  </div>\n  <div *ngIf=\"allSelectionsMade\">\n    <h2>Selection Report</h2>\n    <!-- TODO better to show the percent matched between participants? -->\n    <h3>Selection Rate: {{ matches.length / items.length * 100 }}%</h3>\n    <button mat-button (click)=\"continue()\" [disabled]=\"!canContinue()\">Continue</button>\n    <div class=\"matches\">\n      <mat-card class=\"item-card\" *ngFor=\"let match of matches\">\n        <mat-card-header>\n          <mat-card-title>{{ match.data.title }}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div class=\"content\">\n            <img [src]=\"match.data.thumbnail\">\n            <p>{{ match.data.description }}</p>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/consensus-builder/consensus-builder/consensus-builder.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  align-items: center;\n  display: flex;\n  justify-content: space-between; }\n\nmat-progress-bar {\n  margin-bottom: 2rem; }\n\n.item-card .description {\n  width: 300px; }\n\n.item-card .description mat-icon {\n    margin-left: 1rem; }\n\n.item-card .content {\n  display: flex; }\n\n.item-card .content img {\n    margin-right: 1rem; }\n\n.matches .item-card {\n  margin-bottom: 2rem;\n  margin-right: 2rem; }\n\n.matches {\n  display: flex;\n  flex-flow: wrap; }\n\n.items {\n  position: relative; }\n\n.items .item-card {\n    position: absolute;\n    transition: all linear 300ms;\n    top: 0; }\n\n.items .item-card.active {\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n.items .item-card.previous {\n      left: -110%;\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n\n.items .item-card.next {\n      left: 110%;\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%); }\n\n.attribution {\n  display: flex;\n  justify-content: space-around;\n  margin: 1rem 0; }\n\n.attribution img {\n    height: 40px; }\n"

/***/ }),

/***/ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/consensus-builder/consensus-builder/consensus-builder.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConsensusBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsensusBuilderComponent", function() { return ConsensusBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _participant_prompt_participant_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../participant-prompt/participant-prompt.component */ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NUM_PARTICIPANTS = 2;
var ConsensusBuilderComponent = /** @class */ (function () {
    function ConsensusBuilderComponent(dialog, datasetService, activatedRoute) {
        var _this = this;
        this.dialog = dialog;
        this.datasetService = datasetService;
        this.activatedRoute = activatedRoute;
        this.selectedDataset = null;
        this.participantIndex = 0;
        this.itemIndex = 0;
        this.allSelectionsMade = false;
        this.roundIndex = 0;
        this.items = [];
        this.maxCardHeight = 'auto';
        this.openDialog();
        this.datasetService.get(this.activatedRoute.snapshot.params.id).subscribe(function (dataset) {
            _this.selectedDataset = dataset;
            _this.reset();
        });
    }
    Object.defineProperty(ConsensusBuilderComponent.prototype, "matches", {
        get: function () {
            return this.items.filter(function (item) {
                return item.selections.every(function (selection) { return selection === true; });
            });
        },
        enumerable: true,
        configurable: true
    });
    ConsensusBuilderComponent.prototype.ngOnInit = function () {
    };
    ConsensusBuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.itemCards.changes.subscribe(function (queryList) {
            _this.calculateMaxCardHeight();
        });
    };
    ConsensusBuilderComponent.prototype.calculateMaxCardHeight = function () {
        var _this = this;
        setTimeout(function () {
            _this.maxCardHeight = _this.itemCards.map(function (itemCard) {
                return itemCard.nativeElement.clientHeight;
            }).reduce(function (height, prevMaxHeight) {
                return Math.max(height, prevMaxHeight);
            }, 0) + 'px';
        }, 0);
    };
    ConsensusBuilderComponent.prototype.reset = function () {
        this.participantIndex = 0;
        this.itemIndex = 0;
        this.allSelectionsMade = false;
        this.roundIndex = 0;
        this.items = this.selectedDataset.items.map(function (item) {
            return {
                data: item,
                selections: [],
            };
        });
    };
    ConsensusBuilderComponent.prototype.continue = function () {
        this.participantIndex = 0;
        this.itemIndex = 0;
        this.allSelectionsMade = false;
        this.roundIndex++;
        this.items = this.matches.slice();
    };
    ConsensusBuilderComponent.prototype.canContinue = function () {
        return this.matches.length > 1;
    };
    ConsensusBuilderComponent.prototype.makeSelection = function (item, value) {
        item.selections.push(value);
        this.itemIndex++;
        if (this.itemIndex >= this.items.length) {
            this.participantIndex++;
            this.itemIndex = 0;
            if (this.participantIndex >= NUM_PARTICIPANTS) {
                this.allSelectionsMade = true;
            }
            else {
                this.openDialog();
            }
        }
    };
    ConsensusBuilderComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_participant_prompt_participant_prompt_component__WEBPACK_IMPORTED_MODULE_2__["ParticipantPromptComponent"], {
            width: '300px',
            closeOnNavigation: true,
            data: {
                participantIndex: this.participantIndex,
            },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsensusBuilderComponent.prototype, "itemCards", void 0);
    ConsensusBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tfe-consensus-builder',
            template: __webpack_require__(/*! ./consensus-builder.component.html */ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.html"),
            styles: [__webpack_require__(/*! ./consensus-builder.component.scss */ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common__WEBPACK_IMPORTED_MODULE_3__["DatasetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ConsensusBuilderComponent);
    return ConsensusBuilderComponent;
}());



/***/ }),

/***/ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/consensus-builder/dataset-selector/dataset-selector.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select a Dataset</h1>\n<div class=\"datasets\">\n  <mat-card *ngFor=\"let dataset of datasets\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <mat-icon>{{ dataset.icon }}</mat-icon>\n      </div>\n      <mat-card-title>{{ dataset.title }}</mat-card-title>\n      <mat-card-subtitle>{{ dataset.subtitle }}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>{{ dataset.description }}</p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" [routerLink]=\"dataset.id\">SELECT</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/consensus-builder/dataset-selector/dataset-selector.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 400px; }\n\nmat-icon {\n  font-size: 2.5rem; }\n\n.datasets {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/consensus-builder/dataset-selector/dataset-selector.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DatasetSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetSelectorComponent", function() { return DatasetSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetSelectorComponent = /** @class */ (function () {
    function DatasetSelectorComponent(datasetService) {
        this.datasetService = datasetService;
        this.datasets = [];
    }
    DatasetSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasetService.all().subscribe(function (datasets) { return _this.datasets = datasets; });
    };
    DatasetSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tfe-dataset-selector',
            template: __webpack_require__(/*! ./dataset-selector.component.html */ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.html"),
            styles: [__webpack_require__(/*! ./dataset-selector.component.scss */ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_common__WEBPACK_IMPORTED_MODULE_1__["DatasetService"]])
    ], DatasetSelectorComponent);
    return DatasetSelectorComponent;
}());



/***/ }),

/***/ "./src/app/consensus-builder/index.ts":
/*!********************************************!*\
  !*** ./src/app/consensus-builder/index.ts ***!
  \********************************************/
/*! exports provided: ConsensusBuilderComponent, DatasetSelectorComponent, ParticipantPromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consensus_builder_consensus_builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consensus-builder/consensus-builder.component */ "./src/app/consensus-builder/consensus-builder/consensus-builder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsensusBuilderComponent", function() { return _consensus_builder_consensus_builder_component__WEBPACK_IMPORTED_MODULE_0__["ConsensusBuilderComponent"]; });

/* harmony import */ var _dataset_selector_dataset_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset-selector/dataset-selector.component */ "./src/app/consensus-builder/dataset-selector/dataset-selector.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatasetSelectorComponent", function() { return _dataset_selector_dataset_selector_component__WEBPACK_IMPORTED_MODULE_1__["DatasetSelectorComponent"]; });

/* harmony import */ var _participant_prompt_participant_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participant-prompt/participant-prompt.component */ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParticipantPromptComponent", function() { return _participant_prompt_participant_prompt_component__WEBPACK_IMPORTED_MODULE_2__["ParticipantPromptComponent"]; });






/***/ }),

/***/ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/consensus-builder/participant-prompt/participant-prompt.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Ready, Player {{ data.participantIndex + 1 }}</h1>\n<button mat-button color=\"primary\" (click)=\"dismiss()\">LET'S GO!</button>\n"

/***/ }),

/***/ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/consensus-builder/participant-prompt/participant-prompt.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/consensus-builder/participant-prompt/participant-prompt.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ParticipantPromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantPromptComponent", function() { return ParticipantPromptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ParticipantPromptComponent = /** @class */ (function () {
    function ParticipantPromptComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ParticipantPromptComponent.prototype.ngOnInit = function () {
        console.log('dialog ngOnInit', this.data);
    };
    ParticipantPromptComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    ParticipantPromptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tfe-participant-prompt',
            template: __webpack_require__(/*! ./participant-prompt.component.html */ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.html"),
            styles: [__webpack_require__(/*! ./participant-prompt.component.scss */ "./src/app/consensus-builder/participant-prompt/participant-prompt.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ParticipantPromptComponent);
    return ParticipantPromptComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"g-signin2\"></div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/app/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngZone, memberService, router) {
        this.ngZone = ngZone;
        this.memberService = memberService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.signin2.render('g-signin2', {
            scope: 'profile email',
            width: 240,
            height: 50,
            longtitle: true,
            theme: 'light',
            onsuccess: function (googleUser) {
                _this.ngZone.run(function () {
                    _this.memberService.login(googleUser).subscribe(function () { return _this.router.navigate(['./profile']); });
                });
            },
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tfe-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _common__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/index.ts":
/*!**********************************!*\
  !*** ./src/app/profile/index.ts ***!
  \**********************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Profile</h1>\n<button mat-raised-button color=\"warn\" (click)=\"signOut()\">\n  Sign Out\n</button>\n<code>\n  <pre>{{ member | json }}</pre>\n</code>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre {\n  white-space: pre-wrap; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/app/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(ngZone, router, memberService) {
        this.ngZone = ngZone;
        this.router = router;
        this.memberService = memberService;
        this.member = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.memberService.isLoggedIn()) {
            this.router.navigate(['./login']);
        }
        else {
            this.memberService.profile().subscribe(function (member) { return _this.member = member; });
        }
    };
    ProfileComponent.prototype.signOut = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.memberService.logout().subscribe(function () { return _this.router.navigate(['./login']); });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tfe-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common__WEBPACK_IMPORTED_MODULE_2__["MemberService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBase: 'http://localhost:3000/api',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vmcglaughlin/github/tfe/client-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map