(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Client-Auditory\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n\r\n<ion-grid>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col class=\"ion-align-items-center\" sizeMd=\"6\" sizeXs=\"12\" sizeLg=\"6\">\r\n      <ion-img src=\"../assets/img/logo2.png\" class=\"imgLogin\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col class=\"ion-align-items-center\" sizeMd=\"6\" sizeXs=\"12\" sizeLg=\"6\">\r\n      <form [formGroup]=\"loginform\" (ngSubmit)=\"login()\" autocomplete=\"off\">\r\n        <ion-item>\r\n          <ion-label  position=\"stacked\" color=\"orange\" stacked>Usuario</ion-label>\r\n          <input type=\"text\"  formControlName=\"user\" class=\"form-control\" [class.is-invalid]=\"error_inicio == true\" placeholder=\"username\" [(ngModel)]=\"userValue\">\r\n        </ion-item>\r\n        <ion-item lines=\"none\" *ngIf=\"error_inicio == true\">\r\n          <p>Seleccione un usuario existente y con privilegios de empleado</p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"orange\" stacked>Contraseña</ion-label>\r\n          <input type=\"password\"  formControlName=\"password\" class=\"form-control\" [class.is-invalid]=\"error_inicio == true\" placeholder=\"password\" [(ngModel)]=\"passValue\">\r\n        </ion-item>\r\n        <ion-item lines=\"none\" *ngIf=\"error_inicio == true\">\r\n          <p>Contraseña o usuario incorrectos</p>\r\n        </ion-item>\r\n        <button class=\"btn btn-orange btn-round btn-block\" expand=\"full\" type=\"submit\">login</button>\r\n\r\n      </form>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    © Copyright Antonio Payá González 2019\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 0.8em;\n  color: red; }\n\n.invalid {\n  border: 1px solid #ea6153; }\n\n.imgLogin {\n  height: 200px; }\n\nion-content {\n  --background:rgb(255, 255, 255); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxhbnRvblxcRGVza3RvcFxcVEZHXFxSZXBvc1xcQ2xpZW50LVJlYWQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSwrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1MztcclxufVxyXG5cclxuLmltZ0xvZ2luIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, formBuilder, userApi, router, platform) {
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.userApi = userApi;
        this.router = router;
        this.platform = platform;
        this.userValue = '';
        this.passValue = '';
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.loginform = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.loginform.invalid) {
            return;
        }
        var data = {
            userName: this.loginform.value['user'],
            password: this.loginform.value['password']
        };
        this.userApi.login(data).subscribe(function (res) {
            _this.userApi.setToken(res);
            _this.menuCtrl.enable(true);
            _this.router.navigate(['/home'], { replaceUrl: true });
        }, function (err) {
            _this.error_inicio = true;
            _this.userValue = '';
            _this.passValue = '';
        });
    };
    LoginPage.prototype.esMovil = function () {
        if (this.platform.is('mobileweb') || this.platform.is('mobile')) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map