webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 100% auto;\n    height: 650px;\n    background-color: darkslategray;\n\n}\n\n.child {\n    width: 80%;\n    height: 650px;\n    background-color: white;\n    margin-left: 10%;\n    padding: 60px 10px 10px 10px;\n    border-bottom: 2px darkslategray solid;\n}\n\n.jorge {\n    border: 4px darkslategrey solid;\n    border-radius: 65px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 10px;\n}\n\n.ihlogo {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 10px;\n\n}\n\np {\n    padding: 2px 42px 0px 42px;\n}\n\nb {\n    color: #294168;\n}\n\nh3 {\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n    <div class=\"child\">\n\n      <h3>Sobre Bremen.io</h3>\n      <img class=\"jorge\" src=\"../../assets/images/FotoCV.png\" width=\"100px\">\n      <p>Bremen.io es un proyecto creado durante el tercer y último módulo del Bootcamp de <b>Ironhack Madrid</b>. Para este proyecto se han usado <b>Javascript</b>, <b>Typescript</b>, <b>Angular2</b>, <b>AngularCli</b>, <b>NodeJS</b> y <b>MongoDB</b> entre otras tecnologías y dependencias. </p>\n      <br>\n      <p>Quiero dar las gracias al equipo de <b>Ironhack</b> por el apoyo durante el Bootcamp y sus consejos para mejorar como aprendiz de programador,<br> a <b>Marc Pomar</b> y al equipo de <b>TA's</b> por todo lo que me han permitido aprender de ellos, y a mis <b>compañeros</b> del Bootcamp <b>Enero-Marzo 2018</b> por las ideas, pistas y risas que hemos compartido</p>\n      <br>\n      <p>Y por supuesto, un extra de gratitud a <b>Yaiza García</b> por la supervisión y paciencia durante este proyecto y a <b>Sébastien del Mestre</b>, con quien creé la primera versión de esta web.</p>\n\n        <img class=\"ihlogo\" src=\"../../assets/images/IHlogo.png\" width=\"100px\">\n    </div>\n\n\n</div>\n    "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/ad-list/ad-list.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 100% auto;\n    background-color: darkslategray;\n\n}\n.child {\n    width: 60%;\n    background-color: white;\n    margin-left: 20%;\n    margin-right: 20%;  \n    padding: 10px 10px 10px 10px;\n    border-bottom: 2px darkslategray solid;\n}\n.ad-list {\n\n    background-color: white;\n    margin-left: 10%;\n    padding: 60px 10px 10px 10px;\n    border-bottom: 2px darkslategray solid;\n}\n.tags {\n    list-style: none;\n    margin: 0;\n    overflow: hidden; \n    padding: 0;\n  }\n.tags li {\n    float: left; \n    font-size: 12px; \n  }\n.tag {\n    background: #eee;\n    border-radius: 3px 0 0 3px;\n    background-color: #c4d5f2;\n    display: inline-block;\n    height: 26px;\n    line-height: 26px;\n    padding: 0 20px 0 23px;\n    position: relative;\n    margin: 0 10px 10px 0;\n    text-decoration: none;\n  }\n.tag::before {\n    background: #fff;\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n            box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n    content: '';\n    height: 6px;\n    left: 10px;\n    position: absolute;\n    width: 6px;\n    top: 10px;\n  }\n.tag::after {\n    background: #fff;\n    border-bottom: 13px solid transparent;\n    border-left: 10px solid #eee;\n    border-top: 13px solid transparent;\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n.control-pannel {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    background-color: #3c3c3d;\n    color: white;\n    font-size: 16px;\n\n}\n.control {\n    margin-top: 70px;\n    height: 50px;\n    text-align: center;\n    border: none;\n}\nbutton {\n  background-color: #3c3c3d;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  color: white;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/ad-list/ad-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"control-pannel\">\n    <button class=\"control\" routerLink=\"/list\">Anuncios publicados</button>\n    <button class=\"control\" routerLink=\"/ads/new\">Crear anuncio</button>\n    <button class=\"control\" [routerLink]=\"['/ad/my-ads']\"> Mis anuncios </button>\n    <div *ngIf='session.getUser()'>\n        <button class=\"control\" (click)=\"logout()\">Cerrar sesión</button>\n      </div>\n  \n  </div>\n\n<div class=\"parent\">\n    <div class=\"child\">\n  <div class=\"ad-list\" *ngFor=\"let ad of adList\">\n      <h4> {{ ad.title }} </h4>\n      <small> Publicado por {{user?.username}} el {{ad?.created_at | date:'dd /MM/ yyyy' }} </small>\n      <ul class=\"tags\">\n        <li><a href=\"#\" class=\"tag\"> {{ ad.category }} </a></li>\n        <li><a href=\"#\" class=\"tag\"> {{ ad.city }} </a></li>\n        <li><a href=\"#\" class=\"tag\"> {{ ad.styles }} </a></li>\n    </ul>\n      <button [routerLink]=\"['/show', ad._id]\"> Detalles </button>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/ad-list/ad-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ad_service__ = __webpack_require__("./src/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdListComponent = /** @class */ (function () {
    function AdListComponent(session, adService, router, route) {
        this.session = session;
        this.adService = adService;
        this.router = router;
        this.route = route;
    }
    AdListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adService.getList()
            .map(function (adList) {
            _this.adList = adList;
        })
            .subscribe();
    };
    AdListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-list',
            template: __webpack_require__("./src/app/ad-list/ad-list.component.html"),
            styles: [__webpack_require__("./src/app/ad-list/ad-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_ad_service__["a" /* AdService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AdListComponent);
    return AdListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".welcome {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n/* You can add global styles to this file, and also import other style files */\nnav{\n    width: 100%;\n    position: fixed!important;\n    z-index: 9;\n    background: #23272b!important;\n    height: 70px;\n    padding: 5px;\n}\n.navbar-default .navbar-brand {\n    color: white;\n    font-size: 20px;\n    font-weight: 600;\n    padding-left: 20px;\n}\n.nav-link{\n    font-size: 12px;\n    margin-left: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: #fff;\n}\nbody {\n    height: 100% auto;\n}\n.nav-link:hover{\n    color: #fff!important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/\">BREMEN</a>\n          </div>\n      \n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li><a href=\"#\">Link</a></li>\n\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"/about\">Sobre nosotros</a></li>\n              <li><a href=\"/signup\">Registro</a></li>\n              <li><a href=\"/login\">Login</a></li>\n            </ul>\n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Bremen';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thread_thread_component__ = __webpack_require__("./src/app/thread/thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_form_signup_form_component__ = __webpack_require__("./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_edit_profile_edit_component__ = __webpack_require__("./src/app/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_user_edit_user_component__ = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_ad_create_ad_component__ = __webpack_require__("./src/app/create-ad/create-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ad_list_ad_list_component__ = __webpack_require__("./src/app/ad-list/ad-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__show_ad_show_ad_component__ = __webpack_require__("./src/app/show-ad/show-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__inbox_inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__date_pipe_date_pipe_component__ = __webpack_require__("./src/app/date-pipe/date-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes__ = __webpack_require__("./src/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_message_service__ = __webpack_require__("./src/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_ad_service__ = __webpack_require__("./src/services/ad.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__thread_thread_component__["a" /* ThreadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_form_signup_form_component__["a" /* SignupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__create_ad_create_ad_component__["a" /* CreateAdComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ad_list_ad_list_component__["a" /* AdListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__show_ad_show_ad_component__["a" /* ShowAdComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_19__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__date_pipe_date_pipe_component__["a" /* BuiltInPipesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_23__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAdiQtjQt5GDzia8VnYtsQ3cyETkPbFXjU',
                    libraries: ["places"]
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_25__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_27__services_ad_service__["a" /* AdService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-ad/create-ad.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 80%;\n    margin-left: 10%;\n    margin-bottom: 150px;\n}\n\n.row {\n    background-color: #dee8f9;\n}\n\nh2 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.form-group {\n    padding-left: 15px;\n}\n\n.inputs {\n    width: 350px;\n    height: 20px;\n    border-radius: 3px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n}\n\n.info-input {\n    width: 850px;\n    height: 100px;\n    border-radius: 3px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n}\n\n.avatar {\n    border: 5px grey solid;\n    border-radius: 9px;\n}\n\n.butt {\n    background-color:#1e417a;\n    color: white;\n    width: 150px;\n    height: 80px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-radius: 9px;\n    height: 30px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    margin-left: 450px;\n}\n\nbutton {\n    background-color: #3c3c3d;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    color: white;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 250px;\n\n}\n\n.control-pannel {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    background-color: #3c3c3d;\n    color: white;\n    font-size: 16px;\n    padding-left: 10%;\n}\n\n.control {\n    margin-top: 70px;\n    height: 50px;\n    text-align: center;\n    border: none;\n}   "

/***/ }),

/***/ "./src/app/create-ad/create-ad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"control-pannel\">\n    <button class=\"control\" routerLink=\"/list\">Anuncios publicados</button>\n    <button class=\"control\" routerLink=\"/ads/new\">Crear anuncio</button>\n    <button class=\"control\" [routerLink]=\"['/ad/my-ads']\"> Mis anuncios </button>\n    <div *ngIf='session.getUser()'>\n        <button class=\"control\" (click)=\"logout()\">Cerrar sesión</button>\n      </div>\n  </div>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <form (ngSubmit)=\"save(myForm)\" #myForm=\"ngForm\">\n      <div class=\"parent-box\">\n        <div class=\"form-group\">\n          <h2>Crea tu anuncio</h2>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"category\">\n            <strong>Tipo de anuncio</strong>\n          </label>\n          <br>\n          <p>¿Eres un músico en busca de un nuevo proyecto? ¿O ya tienes una banda, y te falta alguien?</p>\n          <select required name=\"category\" id=\"categ\" [ngModel]=\"category\" required class=\"inputs\">\n            <option *ngFor=\"let c of category\" value=\"{{c}}\">{{c}}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <img class=\"avatar\" src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" height=\"150px\" width=\"150px\">\n          <p>Puedes incluir una imagen que represente a tu proyecto- o una que te represente a ti como músico..</p>\n          <input type=\"file\" name=\"image\" class=\"inputs\">\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"title\"><strong>Título de tu anuncio</strong>*</label>\n          <p>Quién eres, y qué buscas</p>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" minlength=\"6\" class=\"inputs\" placeholder=\"Escoge un título para tu anuncio\"/>\n          <br>\n          <small><i>Te recomendamos una estructura como ésta: (Grupo de jazz busca bajista)</i></small>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"styles\">\n            <strong>Tipo de anuncio</strong>\n          </label>\n          <br>\n          <p>Incluye un estilo que sirva de etiqueta básica.</p>\n          <select name=\"styles\" id=\"style\" [ngModel]=\"styles\" required class=\"inputs\">\n            <option *ngFor=\"let s of styles\" value=\"{{s}}\">{{s}}</option>\n          </select>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"city\"><strong>Ciudad</strong>*</label>\n          <p>¿En qué ciudad vas a tocar?</p>\n          <select class=\"form-control\" id=\"city\" [ngModel]=\"city\" name='city' class=\"inputs\"  >\n            <option *ngFor=\"let c of city\" value=\"{{c}}\">{{c}}</option>\n          </select>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"description\"><strong>Descripción</strong></label>\n          <p>Cuenta tu idea a los demás usuarios. ¡No te cortes a la hora de incluir detalles!<br>\n            Así el resto de los usuarios se harán la mejor idea posible de tu proyecto.</p>\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"description\" id=\"description \" maxlength=\"200\" \n          textarea cols=\"100\" class=\"info-input\" placeholder=\"Cuenta algo sobre ti\"/>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"mainInstrument\"><strong>Instrumento que buscas o que ofreces</strong>*</label>\n          <p>Si estás montando una banda nueva, selecciona qué miembro o instrumento buscas<br>\n            Si eres músico, indica cuál es tu instrumento o disciplina principal.</p>\n          <br>\n          <select class=\"form-control\" id=\"instrument\" [ngModel]=\"instrument\" name='instrument' required class=\"inputs\">\n            <option *ngFor=\"let in of instrument\" value=\"{{in}}\">{{in}}</option>\n          </select>\n        </div>\n\n      </div>\n      <button class=\"butt\">Publicar anuncio</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create-ad/create-ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ad_service__ = __webpack_require__("./src/services/ad.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { instrument } from '../commondata/instrument';
// import { styles } from './styles.js';
var CreateAdComponent = /** @class */ (function () {
    function CreateAdComponent(session, adService, router, route) {
        this.session = session;
        this.adService = adService;
        this.router = router;
        this.route = route;
        this.category = ["Proyecto busca músico", "Músico busca proyecto"];
        this.city = ["Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
            "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
            "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
            "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
        this.instrument = ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",
            "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
            "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
        this.styles = ["Cualquiera", "Acústica", "Bachata", "Blues", "Bolero", "Bossa Nova", "Cantautor", "Clásica",
            "Country", "Cumbia", "Dance", "Dubstep", "Electrónica", "Experimental", "Flamenco", "Folk",
            "Funk", "Garaje", "Gospel", "Grunge", "Hip hop", "Indie", "Jazz", "Latino", "Merengue", "Metal",
            "New Age", "New Wave", "Pop", "Pop-rock", "Psicodelia", "Punk", "R&B", "Ranchera", "Rap",
            "Reggae", "Rock", "Rockabilly", "Salsa", "Samba", "Ska", "Soul", "Swing"];
    }
    CreateAdComponent.prototype.ngOnInit = function () {
    };
    CreateAdComponent.prototype.save = function (form) {
        var _this = this;
        this.adService.createAd(form.value)
            .map(function (ad) {
            console.log(ad);
            _this.router.navigate(['/show', ad._id]);
        })
            .subscribe();
    };
    CreateAdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-ad',
            template: __webpack_require__("./src/app/create-ad/create-ad.component.html"),
            styles: [__webpack_require__("./src/app/create-ad/create-ad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_ad_service__["a" /* AdService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CreateAdComponent);
    return CreateAdComponent;
}());



/***/ }),

/***/ "./src/app/date-pipe/date-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuiltInPipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuiltInPipesComponent = /** @class */ (function () {
    function BuiltInPipesComponent() {
    }
    BuiltInPipesComponent.prototype.ngOnInit = function () { };
    BuiltInPipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-pipe',
            template: "\n  <p> Date: {{ today | date:'dd/MM/yyyy' }} </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], BuiltInPipesComponent);
    return BuiltInPipesComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 80%;\n    margin-left: 10%;\n    margin-bottom: 150px;\n    padding-top: 65px;\n}\n\n.intro {\n    padding: 15px 22px 15px 20px;\n}\n\n.row {\n    background-color: #dee8f9;\n}\n\nh2 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.form-group {\n    padding-left: 15px;\n}\n\n.inputs {\n    width: 350px;\n    height: 20px;\n    border-radius: 3px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n}\n\n.info-input {\n    width: 850px;\n    height: 100px;\n    border-radius: 3px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n}\n\n.avatar {\n    border: 5px grey solid;\n    border-radius: 9px;\n}\n\nbutton {\n    background-color:#1e417a;\n    color: white;\n    width: 150px;\n    height: 80px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-radius: 9px;\n    height: 30px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    margin-left: 450px;\n}"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <form (ngSubmit)=\"save(myForm)\" #myForm=\"ngForm\">\n      <div class=\"intro\">\n        <p>¡Bienvenido a Bremen.io! Ahora que ya estás registrado, vamos a completar tu perfil. Recuerda que aunque no todos\n          los campos son obligatorios, cuanta más información puedas ofrecer, mejor será la idea que se puedan hacer otros\n          usuarios de ti como músico. Puedes saltarte casi todos los campos, pero sólo necesitaremos rellenar este formulario una vez.<br>\n          <br>¡Recuerda que los campos marcados con un asterisco son obligatorios!</p>\n      </div>\n\n      <div class=\"parent-box\">\n        <div class=\"form-group\">\n          <h2>Crea tu perfil</h2>\n        </div>\n\n        <div class=\"form-group\">\n          <img class=\"avatar\" src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" height=\"150px\" width=\"150px\">\n          <p>Inserta aquí tu imagen de perfil. Puedes cambiarla cuando quieras desde las opciones de edición de perfil.</p>\n          <input type=\"file\" name=\"image\" class=\"inputs\">\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"username\"><strong>Tu alias</strong>*</label>\n          <p>Por este nombre te conocerán los demás usuarios de la red.</p>\n          <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" minlength=\"6\" class=\"inputs\" placeholder=\"Elige tu nombre de usuario\"/>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"city\"><strong>Ciudad</strong>*</label>\n          <p>¿Dónde vives?</p>\n          <select class=\"form-control\" id=\"city\" [ngModel]=\"city\" name='city' class=\"inputs\"  >\n            <option *ngFor=\"let c of city\" value=\"{{c}}\">{{c}}</option>\n          </select>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"description\"><strong>Descripción</strong></label>\n          <p>Aquí tienes la opción de incluir un breve resumen sobre tu trayectoria musical, tus expectativas o proyección,\n            curiosidades...\n          </p>\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"description\" id=\"description \" maxlength=\"200\" class=\"info-input\" placeholder=\"Cuenta algo sobre ti\"/>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"mainInstrument\"><strong>Instrumento principal</strong>*</label>\n          <br>\n          <p>Selecciona el instrumento con el que mejor te defiendas. Puedes añadir otros instrumentos después.</p>\n          <select class=\"form-control\" id=\"instrument\" [ngModel]=\"instrument\" name='instrument' required class=\"inputs\">\n            <option *ngFor=\"let in of instrument\" value=\"{{in}}\">{{in}}</option>\n          </select>\n        </div>\n\n\n        <br>\n        <div class=\"form-group\">\n          <label for=\"experience\">\n            <strong>Experiencia</strong>\n          </label>\n          <br>\n          <p>Indica a otros usuarios el nivel que tienes en tu instrumento principal.</p>\n          <select name=\"experience\" id=\"level\" [ngModel]=\"experience\" required class=\"inputs\">\n            <option *ngFor=\"let e of exp\" value=\"{{e}}\">{{e}}</option>\n          </select>\n        </div>\n        <br>\n\n        <div class=\"form-group\">\n          <label for=\"otherInstrument\">\n            <strong>Otros instrumentos</strong>\n          </label>\n          <br>\n          <p>¿Hay otros instrumentos que toques? Inclúyelos aquí.</p>\n          <input type=\"text\" name=\"otherInstrument\" [(ngModel)]=\"otherInstrument\" class=\"inputs\"/>\n        </div>\n\n      </div>\n      <button>Crear perfil</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { city } from '../commondata/city';
// import { instrument } from '../commondata/instrument';
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(session, userService, router, route) {
        this.session = session;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.city = ["Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
            "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
            "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
            "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
        this.instrument = ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",
            "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
            "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
        this.exp = ["Principiante", "Intermedio", "Avanzado", "Profesional"];
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        console.log(this.session.getUser());
    };
    EditUserComponent.prototype.save = function (form) {
        var _this = this;
        console.log(form.value);
        var username = this.username;
        this.userService.fillProfile(form.value, this.userId)
            .map(function (user) { return _this.router.navigate(['/profile', _this.userId]); })
            .subscribe();
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <div *ngIf='session.getUser()'>\n                <button class=\"back\" [routerLink]=\"['/profile', user._id]\"> Mi perfil</button> \n            </div>\n            \n<h3>Bandeja de entrada</h3>\n<h4>Todavía no tienes mensajes</h4>\n</div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboxComponent = /** @class */ (function () {
    function InboxComponent(session, userService, messageService, router, route) {
        var _this = this;
        this.session = session;
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.user = this.session.getUser();
        this.session.getUserEvent()
            .subscribe(function (user) { return _this.user = user; });
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages(this.userId)
            .map(function (messageList) {
            _this.messageList = messageList;
        })
            .subscribe();
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inbox',
            template: __webpack_require__("./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ".error{\n    color: red;\n}\n\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    width: 100% auto;\n}\n\nh1 {\n    text-align: center;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.registry {\n    background-color: #3b7fed;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: white;\n    height: 120px;\n    width: 700px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n  /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-style: blue 5px solid;\n    border-radius: 5px;\n}\n\nlabel {\n    padding-left: 30px;\n    padding-right: 15px;\n}\n\n.boxes {\n    padding-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin-right: 40px;\n}\n\nbutton {\n    background-color:#1e417a;\n    color: white;\n    border-radius: 9px;\n    height: 30px;\n    margin-left: 280px;\n}\n\n.butt {\n    margin-top: 25px;\n}\n\n.login {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    position: fixed;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #cde3f2;\n    border-radius: 9px;\n    height: 60px;\n    width: 700px;\n    top: 65%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding-top: 15px;\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n\n  <div class=\"registry\">\n    <div class=\"boxes\">\n      <label> Usuario: </label>\n      <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"username\" #newUser=\"ngModel\" name=\"username\" required minlength=\"6\"\n      />\n\n      <label> Contraseña: </label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" />\n    </div>\n\n    <div class=\"butt\">\n      <button class=\"signmeup\" (click)=\"login()\"> Entrar en Bremen </button>\n    </div>\n  </div>\n</form>\n\n<div class=\"login\">\n  <p>¿No tienes cuenta?</p>\n  <button routerLink=\"/signup\">Registrarme</button>\n</div>\n\n\n<div *ngIf=\"session.getUser()\">\n  <pre> {{ session.getUser() | json }} </pre>\n  <button (click)=\"logout()\"> Cerrar sesión </button>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.username, this.password).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/profile", data._id]);
        }, function (err) { return (_this.error = err); });
    };
    LoginFormComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    LoginFormComponent.prototype.signup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-login-form",
            template: __webpack_require__("./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<div class=\"form-group\">\n<input type=\"text\" placeholder=\"Introduce una dirección\" autocorrect=\"off\" autocapitalize=\"off\"\n spellcheck=\"off\" class=\"form-control #search\">\n</div>\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.title = 'Este usuario dispone de un espacio para ensayar';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nnav{\n    width: 100%;\n    position: fixed!important;\n    z-index: 9;\n    background: #23272b!important;\n    height: 70px;\n}\n.navbar-default .navbar-brand {\n    color: white;\n    font-size: 20px;\n    font-weight: 600;\n}\n.nav-link{\n    font-size: 12px;\n    margin-left: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: #fff;\n}\n.nav-link:hover{\n    color: #fff!important;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">BREMEN</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"/signup\">Registro</a></li>\n          <li><a href=\"/login\">Login</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n  \n      <form (ngSubmit)=\"save(myForm)\" #myForm=\"ngForm\">\n        <div class=\"parent-box\">\n          <div class=\"form-group\">\n            <h3>Edita tus datos</h3>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"imgUrl\"><strong>Avatar</strong>*</label>\n            <img class=\"avatar\" src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" height=\"150px\" width=\"150px\">\n            <input type=\"file\" name=\"image\" class=\"inputs\">\n          </div>\n  \n          <br>\n          <div class=\"form-group\">\n            <label for=\"username\"><strong>Tu alias</strong>*</label>\n            <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" minlength=\"6\" class=\"inputs\" placeholder=\"Elige tu nombre de usuario\"/>\n          </div>\n  \n          <br>\n          <div class=\"form-group\">\n            <label for=\"city\"><strong>Ciudad</strong>*</label>\n            <select class=\"form-control\" id=\"city\" [ngModel]=\"city\" name='city' class=\"inputs\"  >\n              <option *ngFor=\"let c of city\" value=\"{{c}}\">{{c}}</option>\n            </select>\n          </div>\n  \n          <br>\n          <div class=\"form-group\">\n            <label for=\"description\"><strong>Descripción</strong></label>\n            <input type=\"text\" name=\"description\" [(ngModel)]=\"description\" id=\"description \" maxlength=\"200\" class=\"info-input\" placeholder=\"Cuenta algo sobre ti\"/>\n          </div>\n  \n          <br>\n          <div class=\"form-group\">\n            <label for=\"mainInstrument\"><strong>Instrumento principal</strong>*</label>\n            <br>\n            <select class=\"form-control\" id=\"instrument\" [ngModel]=\"instrument\" name='instrument' required class=\"inputs\">\n              <option *ngFor=\"let in of instrument\" value=\"{{in}}\">{{in}}</option>\n            </select>\n          </div>\n  \n  \n          <br>\n          <div class=\"form-group\">\n            <label for=\"experience\">\n              <strong>Experiencia</strong>\n            </label>\n            <br>\n            <select name=\"experience\" id=\"level\" [ngModel]=\"experience\" required class=\"inputs\">\n              <option *ngFor=\"let e of exp\" value=\"{{e}}\">{{e}}</option>\n            </select>\n          </div>\n          <br>\n  \n          <div class=\"form-group\">\n            <label for=\"otherInstrument\">\n              <strong>Otros instrumentos</strong>\n            </label>\n            <br>\n            <input type=\"text\" name=\"otherInstrument\" [(ngModel)]=\"otherInstrument\" class=\"inputs\"/>\n          </div>\n  \n        </div>\n        <button>Crear perfil</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(session, userService, router, route) {
        var _this = this;
        this.session = session;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = this.session.getUser();
        this.session.getUserEvent()
            .subscribe(function (user) { return _this.user = user; });
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.show(params["id"]).subscribe(function (user) {
                console.log(user);
                _this.user = user;
            });
        });
    };
    ProfileEditComponent.prototype.editProfile = function (user, userId) {
    };
    ProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-edit',
            template: __webpack_require__("./src/app/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__("./src/app/profile-edit/profile-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.parent {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 100% auto;\n    background-color: darkslategray;\n    height: 1000px;\n\n}\n\n.child {\n    width: 80%;\n    background-color: white;\n    margin-left: 10%;\n    margin-right: 10%;  \n    padding: 10px 10px 10px 10px;\n    border-bottom: 2px darkslategray solid;\n}\n\n.spider {\n    border: 4px crimson solid;\n    border-radius: 55px;\n}\n\n.profile {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    background-color: #1d1e1e;\n    padding: 30px;\n    width: 70%;\n    color: white;\n}\n\nh5 {\n    padding-top: 12px;\n    margin: 0px;\n}\n\nspan {\n    padding-right: 10px;\n}\n\np {\n    padding-top: 12px;\n    padding-left: 27px;\n}\n\nbutton {\n    background-color: #3c3c3d;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    color: white;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 250px;\n\n}\n\n.control-pannel {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    background-color: #3c3c3d;\n    color: white;\n    font-size: 16px;\n    padding-left: 10%;\n}\n\n.control {\n    margin-top: 70px;\n    height: 50px;\n    text-align: center;\n    border: none;\n}\n\n.user-only {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"control-pannel\">\n  <button class=\"control\" routerLink=\"/list\">Anuncios publicados</button>\n  <button class=\"control\" routerLink=\"/ads/new\">Crear anuncio</button>\n  <button class=\"control\" [routerLink]=\"['/ad/my-ads']\"> Mis anuncios </button>\n  <div *ngIf='session.getUser()'>\n      <button class=\"control\" (click)=\"logout()\">Cerrar sesión</button>\n    </div>\n</div>\n  \n<div class=\"parent\">\n  <div class=\"child\">\n  <h2>Tu perfil</h2>\n\n  <div class=\"profile\" name=\"user\">\n    <img class=\"spider\" src=\"https://rlv.zcache.com/spider_man_head_icon_classic_round_sticker-r54ba1f8e9adb46e6992b555f7eafb12c_v9wth_8byvr_540.jpg\" width=\"100px\" alt=\"spidey\">\n    <h5><span class=\"glyphicon glyphicon-user\"></span> {{user?.username}} </h5>\n    <h5><span class=\"glyphicon glyphicon-tent\"></span> {{user?.city}} </h5>\n    <h5><span class=\"glyphicon glyphicon-book\"></span>\"<i> {{user?.description}} </i>\"</h5>\n    <h5><span class=\"glyphicon glyphicon-music\"></span> {{user?.instrument}}\n      <small>Nivel: {{user?.experience}} </small>\n    </h5>\n    <p>Otros instrumentos: {{user?.otherInstrument}} </p>\n    <br>\n  </div>\n\n  <div class=\"user-only\">\n    <div *ngIf='session.getUser()'>\n      <button [routerLink]=\"['/edit', user._id]\">Editar mis datos</button>\n    </div>\n\n    <div *ngIf='session.getUser()'>\n      <button class=\"inbox\" [routerLink]=\"['/inbox', user._id]\"> Mis mensajes </button>\n    </div>\n  </div>\n\n  <button class=\"out\" href=\"/users/delete\">Eliminar mi perfil</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(session, userService, router, route) {
        var _this = this;
        this.session = session;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = this.session.getUser();
        this.session.getUserEvent()
            .subscribe(function (user) { return _this.user = user; });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.show(params["id"]).subscribe(function (user) {
                console.log(user);
                _this.user = user;
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
        this.router.navigate(["/signup"]);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-profile",
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/show-ad/show-ad.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  width: 100% auto;\n  height: 1000px;\n  background-color: darkslategray;\n}\n.options {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.single-ad {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    height: 400px;\n    background-color: #e6eaf2;\n    width: 60%;\n    margin-left: 20%;\n}\n.heading {\n\n    background-color: #1d1e1e;\n    padding-left: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 60%px;\n    height: 80px;\n    color: white;\n}\n.user-only {\n  padding-top: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\nbutton {\nmargin: 10px 20px 10px 20px;\n}\np {\n    padding-left: 15px;  \n    padding-top: 10px;\n    width: 60%px;\n    height:100px;\n    background-color: #e6eaf2;\n    display: block;\n    -webkit-margin-before: 0px;\n    -webkit-margin-after: 0px;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n}\n.tags {\n    list-style: none;\n    margin: 0;\n    overflow: hidden; \n    padding-left: 15px;\n  }\n.tags li {\n    float: left; \n  }\n.tag {\n    background: #eee;\n    border-radius: 3px 0 0 3px;\n    background-color: #c4d5f2;\n    display: inline-block;\n    height: 26px;\n    line-height: 26px;\n    padding: 0 20px 0 23px;\n    position: relative;\n    margin: 0 10px 10px 0;\n    text-decoration: none;\n  }\n.tag::before {\n    background: #fff;\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n            box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n    content: '';\n    height: 6px;\n    left: 10px;\n    position: absolute;\n    width: 6px;\n    top: 10px;\n  }\n.tag::after {\n    background: #fff;\n    border-bottom: 13px solid transparent;\n    border-left: 10px solid #eee;\n    border-top: 13px solid transparent;\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\nbutton {\n    background-color: #3c3c3d;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    color: white;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 250px;\n\n}\n.control-pannel {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    background-color: #3c3c3d;\n    color: white;\n    font-size: 16px;\n    padding-left: 10%;\n}\n.control {\n    margin-top: 70px;\n    height: 50px;\n    text-align: center;\n    border: none;\n}   \n"

/***/ }),

/***/ "./src/app/show-ad/show-ad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"control-pannel\">\n        <button class=\"control\" routerLink=\"/list\">Anuncios publicados</button>\n        <button class=\"control\" routerLink=\"/ads/new\">Crear anuncio</button>\n        <button class=\"control\" [routerLink]=\"['/ad/my-ads']\"> Mis anuncios </button>\n        <div *ngIf='session.getUser()'>\n            <button class=\"control\" (click)=\"logout()\">Cerrar sesión</button>\n          </div>\n      </div>\n        \n<div class=\"parent\">\n    <div class=\"single-ad\" name=\"ad\">\n        <!-- <strong> {{ad?.imgUrl}} </strong> -->\n        <div class=\"heading\">\n            <h4> {{ad?.title}} </h4>\n            <small> Publicado por {{user?.username}} el {{ad?.created_at | date:'dd /MM/ yyyy' }} </small>\n        </div>\n        <p> {{ad?.description}} </p>\n        <ul class=\"tags\">\n            <li><a href=\"#\" class=\"tag\"> {{ad?.city}}</a></li>\n            <li><a href=\"#\" class=\"tag\"> {{ad?.instrument}}</a></li>\n            <li><a href=\"#\" class=\"tag\"> {{ad?.styles}}</a></li>\n        </ul>\n<div class=\"user-only\">\n        <div *ngIf='user && ad?.creator_id != user._id '>\n            <button class=\"thread\" (click)=\"startThread()\"> Enviar mensaje</button>\n        </div>\n \n    <div *ngIf='session.getUser()'>\n        <button class=\"create\" routerLink=\"/ad/new\"> Editar este anuncio</button>\n    </div>\n</div>\n</div>\n</div>\n<date-pipe></date-pipe>"

/***/ }),

/***/ "./src/app/show-ad/show-ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ad_service__ = __webpack_require__("./src/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__("./src/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //necesario?
var ShowAdComponent = /** @class */ (function () {
    function ShowAdComponent(session, userService, adService, messageService, router, route) {
        var _this = this;
        this.session = session;
        this.userService = userService;
        this.adService = adService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.user = this.session.getUser();
        this.session.getUserEvent().subscribe(function (user) { return (_this.user = user); });
    }
    ShowAdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.adService.show(params["id"]).subscribe(function (ad) {
                console.log(ad);
                _this.ad = ad;
            });
        });
    };
    ShowAdComponent.prototype.startThread = function () {
        var _this = this;
        this.messageService
            .startThread()
            .subscribe(function (thread) {
            console.log('AAA', thread);
            _this.router.navigate(["/thread/new", thread._id]);
        });
    };
    ShowAdComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    ShowAdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-show-ad",
            template: __webpack_require__("./src/app/show-ad/show-ad.component.html"),
            styles: [__webpack_require__("./src/app/show-ad/show-ad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_ad_service__["a" /* AdService */],
            __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ShowAdComponent);
    return ShowAdComponent;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports) {

module.exports = ".error{\n    color: red;\n}\n\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    text-align: center;\n    width: 100% auto;\n}\n\nh1 {\n    text-align: center;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.registry {\n    background-color: #3b7fed;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: white;\n    height: 120px;\n    width: 700px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n  /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-style: blue 5px solid;\n    border-radius: 5px;\n}\n\nlabel {\n    padding-left: 30px;\n    padding-right: 15px;\n}\n\n.boxes {\n    padding-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin-right: 40px;\n}\n\nbutton {\n    background-color:#1e417a;\n    color: white;\n    border-radius: 9px;\n    height: 30px;\n    margin-left: 280px;\n}\n\n.butt {\n    margin-top: 25px;\n}\n\n.login {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    position: fixed;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #cde3f2;\n    border-radius: 9px;\n    height: 60px;\n    width: 700px;\n    top: 65%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding-top: 15px;\n}"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <h1> Únete a Bremen.io </h1>\n      <form>\n        <div class=\"registry\">\n          <div class=\"boxes\">\n            <label> Email: </label>\n            <input class=\"form-control\" id=\"email\" type=\"text\" [(ngModel)]=\"email\"\n              #newUser=\"ngModel\" name=\"email\" required minlength=\"6\" />\n        \n            <label> Contraseña: </label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" />\n          </div>\n        \n          <div class=\"butt\">\n            <button class=\"signmeup\" (click)=\"signup()\"> Registrarme </button>\n          </div>\n        </div>\n        </form>\n        <div class=\"login\">\n          <p>¿Ya estás registrado?</p>\n          <button routerLink=\"/login\">Entrar</button>\n        </div>\n        <!-- <p *ngIf=\"error\" class=\"error\"> {{ error }} </p> -->\n        \n        \n        \n        \n        \n        <div *ngIf=\"session.getUser()\">\n          <pre> {{ session.getUser() | json }} </pre>\n          <button (click)=\"logout()\"> Cerrar sesión </button>\n    </div>\n              <!-- <div *ngIf=\"newUser.errors && (newUser.dirty || newUser.touched)\">\n                  <p class=\"error\" [hidden]=\"!newUser.errors.minlength\">\n                    <small>El nombre de usuario debe tener un mínimo de 6 caracteres.</small>\n                  </p>\n                </div>\n              <br> -->"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    SignupFormComponent.prototype.ngOnInit = function () { };
    SignupFormComponent.prototype.signup = function () {
        var _this = this;
        this.session
            .signup(this.email, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/edit-user", data._id]);
        }, function (err) { return (_this.error = err); });
    };
    SignupFormComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .catch(function (e) { return _this.error = e; })
            .subscribe();
    };
    SignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-signup-form",
            template: __webpack_require__("./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__("./src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/thread/thread.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n}\n\n.parent {\n    padding: 40px;\n}\n\n.chat {\nmargin: 60px;\n}\n\ntextarea {\n    width: 600px;\n    height: 150px;\n    border: 2px lightblue solid;\n    border-radius: 5px;\n    margin-top: 200px;\n}\n\n.sender {\n    display: -ms-inline-grid;\n    display: inline-grid;\n}\n\nbutton {\n\n    background-color: #3c3c3d;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    color: white;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 250px;\n\n}\n\n.control-pannel {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    background-color: #3c3c3d;\n    color: white;\n    font-size: 16px;\n    padding-left: 10%;\n}\n\n.control {\n    margin-top: 70px;\n    height: 50px;\n    text-align: center;\n    border: none;\n} "

/***/ }),

/***/ "./src/app/thread/thread.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"control-pannel\">\n        <button class=\"control\" routerLink=\"/list\">Anuncios publicados</button>\n        <button class=\"control\" routerLink=\"/ads/new\">Crear anuncio</button>\n        <button class=\"control\" [routerLink]=\"['/ad/my-ads']\"> Mis anuncios </button>\n        <div *ngIf='session.getUser()'>\n            <button class=\"control\" (click)=\"logout()\">Cerrar sesión</button>\n          </div>\n      </div>\n\n<div class=\"parent\">\n<div class=\"child\">\n  <h4>Envía tu mensaje</h4>\n  <form>\n    <div class=\"message\" *ngFor=\"let r of replies\">\n\n      <p>{{r.authorId}}</p>\n      <p>{{r.content}}</p>\n\n    </div>\n  </form>\n\n  <div class=\"sender\">\n      <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"content\"></textarea>\n    <button (click)=\"save()\">Enviar</button>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/thread/thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ad_service__ = __webpack_require__("./src/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ThreadComponent = /** @class */ (function () {
    function ThreadComponent(session, userService, adService, messageService, router, route) {
        var _this = this;
        this.session = session;
        this.userService = userService;
        this.adService = adService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.user = this.session.getUser();
        this.session.getUserEvent()
            .subscribe(function (user) { return _this.user = user; });
    }
    ThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.threadId = params['id'];
        });
    };
    ThreadComponent.prototype.save = function () {
        this.messageService.sendMessage(this.threadId, this.content)
            .map(function (thread) {
            console.log(thread);
        })
            .subscribe();
    };
    ThreadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thread',
            template: __webpack_require__("./src/app/thread/thread.component.html"),
            styles: [__webpack_require__("./src/app/thread/thread.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_ad_service__["a" /* AdService */],
            __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ThreadComponent);
    return ThreadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASEURL: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_signup_form_signup_form_component__ = __webpack_require__("./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_edit_user_edit_user_component__ = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_create_ad_create_ad_component__ = __webpack_require__("./src/app/create-ad/create-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_show_ad_show_ad_component__ = __webpack_require__("./src/app/show-ad/show-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_ad_list_ad_list_component__ = __webpack_require__("./src/app/ad-list/ad-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_inbox_inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_thread_thread_component__ = __webpack_require__("./src/app/thread/thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__app_home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__app_signup_form_signup_form_component__["a" /* SignupFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__app_login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_2__app_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'edit-user/:id', component: __WEBPACK_IMPORTED_MODULE_3__app_edit_user_edit_user_component__["a" /* EditUserComponent */] },
    { path: 'edit-profile/:id', component: __WEBPACK_IMPORTED_MODULE_7__app_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */] },
    { path: 'ads/new', component: __WEBPACK_IMPORTED_MODULE_5__app_create_ad_create_ad_component__["a" /* CreateAdComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_6__app_show_ad_show_ad_component__["a" /* ShowAdComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_8__app_ad_list_ad_list_component__["a" /* AdListComponent */] },
    { path: 'inbox/:id', component: __WEBPACK_IMPORTED_MODULE_9__app_inbox_inbox_component__["a" /* InboxComponent */] },
    { path: 'thread/new/:id', component: __WEBPACK_IMPORTED_MODULE_10__app_thread_thread_component__["a" /* ThreadComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__app_about_about_component__["a" /* AboutComponent */] }
];


/***/ }),

/***/ "./src/services/ad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdService = /** @class */ (function () {
    function AdService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    AdService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(error.json().message);
    };
    AdService.prototype.createAd = function (ad) {
        console.log(ad);
        return this.http.post(this.BASEURL + "/api/ads/new", ad, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AdService.prototype.show = function (adId) {
        console.log(adId);
        return this.http.get(this.BASEURL + "/api/ads/show/" + adId, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AdService.prototype.getList = function () {
        return this.http.get(this.BASEURL + "/api/ads/list", this.options)
            .map(function (res) { return res.json(); });
    };
    AdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "./src/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    MessageService.prototype.handleError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(err.json().message);
    };
    MessageService.prototype.startThread = function () {
        return this.http.get(this.BASEURL + "/api/thread/new", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // OPÍ, OPÁ. CADA DÍA YO TE QUIERO MÁH.
    MessageService.prototype.sendMessage = function (threadId, content) {
        return this.http.post(this.BASEURL + "/api/thread/new/" + threadId, { content: content }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.getMessages = function (userId) {
        return this.http.get(this.BASEURL + "/api/users/" + userId + "/inbox", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
        this.userEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoggedIn().subscribe();
    }
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.getUserEvent = function () {
        return this.userEvent;
    };
    SessionService.prototype.configureUser = function (set) {
        var _this = this;
        if (set === void 0) { set = false; }
        return function (user) {
            if (set) {
                _this.user = user;
                _this.userEvent.emit(user);
                console.log("Setting user, welcome " + _this.user.email);
            }
            else {
                console.log("Hasta pronto " + _this.user.email);
                _this.user = null;
            }
            return user;
        };
    };
    SessionService.prototype.handleError = function (e) {
        console.log(e);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    SessionService.prototype.signup = function (email, password) {
        return this.http.post(this.BASEURL + "/api/auth/signup", { email: email, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        return this.http.post(this.BASEURL + "/api/auth/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.get(this.BASEURL + "/api/auth/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(false))
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASEURL + "/api/auth/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    UserService.prototype.handleError = function (e) {
        console.log(e);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.fillProfile = function (user, userId) {
        var _this = this;
        console.log(user);
        return this.http.post(this.BASEURL + "/api/users/" + userId + "/edit", user, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) {
            _this.user = user;
            return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.show = function (userId) {
        return this.http.get(this.BASEURL + "/api/users/" + userId + "/show", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.editProfile = function (user, userId) {
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map