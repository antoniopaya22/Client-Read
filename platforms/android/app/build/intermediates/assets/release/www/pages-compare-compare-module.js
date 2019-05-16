(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compare-compare-module"],{

/***/ "./src/app/pages/compare/compare.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.module.ts ***!
  \*************************************************/
/*! exports provided: ComparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePageModule", function() { return ComparePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _compare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compare.page */ "./src/app/pages/compare/compare.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _compare_page__WEBPACK_IMPORTED_MODULE_6__["ComparePage"]
    }
];
var ComparePageModule = /** @class */ (function () {
    function ComparePageModule() {
    }
    ComparePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_compare_page__WEBPACK_IMPORTED_MODULE_6__["ComparePage"]]
        })
    ], ComparePageModule);
    return ComparePageModule;
}());



/***/ }),

/***/ "./src/app/pages/compare/compare.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Compare Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ion-item>\n      <ion-label color=\"orange\">Seleccionar nodo a comparar</ion-label>\n      <ion-select (ionChange)=\"onSelectChange($event)\">\n        <ion-select-option>peer0.asturias.antonio.com</ion-select-option>\n        <ion-select-option>peer0.brasil.antonio.com</ion-select-option>\n        <ion-select-option>peer0.chicago.antonio.com</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n</div>\n<div class=\"row\">\n   <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-orange\">\n                <h4 class=\"card-title \">Datos blockchain</h4>\n                <p class=\"card-category\"> Todos los datos guardados en la blockchain</p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\" [dataSource]=\"dataSourceAuditory\" mat-table>\n                        <!-- Position Column -->\n                        <ng-container matColumnDef=\"Key\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> ID </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Key}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"temp\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Temperatura </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.temperature}} </td>\n                        </ng-container>\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"device\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Device </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.device}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container  matColumnDef=\"gps\">\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Coordenates </th>\n                          <td [ngStyle]=\"{'display':!size?'none':''}\"mat-cell *matCellDef=\"let element\"> {{element.Record.gps}} </td>\n                        </ng-container>\n\n                        <ng-container  matColumnDef=\"node\">\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Node </th>\n                          <td [ngStyle]=\"{'display':!size?'none':''}\" mat-cell *matCellDef=\"let element\"> {{element.Record.node}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"time\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Hour </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.hour}} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-orange\">\n                <h4 class=\"card-title \">Datos local</h4>\n                <p class=\"card-category\"> Todos los datos guardados en la BBDD local</p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\" [dataSource]=\"dataSourceRead\" mat-table>\n                        <!-- Position Column -->\n                        <ng-container matColumnDef=\"Key\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> ID </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"temp\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Temperatura </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.temperature}} </td>\n                        </ng-container>\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"device\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Device </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.device}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container  matColumnDef=\"gps\">\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Coordenates </th>\n                          <td [ngStyle]=\"{'display':!size?'none':''}\"mat-cell *matCellDef=\"let element\"> {{element.gps}} </td>\n                        </ng-container>\n\n                        <ng-container  matColumnDef=\"node\">\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Node </th>\n                          <td [ngStyle]=\"{'display':!size?'none':''}\" mat-cell *matCellDef=\"let element\"> {{element.node}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"time\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Hour </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.hour}} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/compare/compare.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  padding-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFyZS9DOlxcVXNlcnNcXGFudG9uXFxEZXNrdG9wXFxURkdcXFJlcG9zXFxDbGllbnQtQXVkaXRvcnkvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYXJlXFxjb21wYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFyZS9jb21wYXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/compare/compare.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/compare/compare.page.ts ***!
  \***********************************************/
/*! exports provided: ComparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePage", function() { return ComparePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_device_read_device_read_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/device-read/device-read.service */ "./src/app/services/device-read/device-read.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ComparePage = /** @class */ (function () {
    function ComparePage(deviceApi, deviceReadApi, userApi, router) {
        this.deviceApi = deviceApi;
        this.deviceReadApi = deviceReadApi;
        this.userApi = userApi;
        this.router = router;
        this.displayedColumns = ['Key', 'temp', 'device', 'gps', 'node', 'time'];
    }
    ComparePage.prototype.ngOnInit = function () {
        this.cargarDatos('peer0.asturias.antonio.com');
    };
    ComparePage.prototype.cargarDatos = function (nodo) {
        this.cargarBlockchainData(nodo);
        this.cargarLocalData(nodo);
    };
    ComparePage.prototype.cargarBlockchainData = function (nodo) {
        var _this = this;
        this.deviceApi.getByNodo(nodo).subscribe(function (res) {
            var data = [];
            var temp = [];
            for (var key in res) {
                var date = new Date(parseInt(res[key]['Record']['hour']));
                res[key]['Record']['hour'] = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                data.push(res[key]);
            }
            temp = data.sort(function (a, b) {
                if (parseInt(a.Key.match(/\d+/)[0]) > parseInt(b.Key.match(/\d+/)[0])) {
                    return 1;
                }
                else if (parseInt(a.Key.match(/\d+/)[0]) < parseInt(b.Key.match(/\d+/)[0])) {
                    return -1;
                }
                return 0;
            });
            _this.dataSourceAuditory = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](temp);
        }, function (err) {
            console.log(err.status);
            _this.userApi.logout();
            _this.router.navigate(['/login'], { replaceUrl: true });
        });
    };
    ComparePage.prototype.cargarLocalData = function (nodo) {
        var _this = this;
        this.deviceReadApi.getAllData(nodo).then(function (value) {
            value.subscribe(function (res) {
                var data = [];
                for (var key in res) {
                    var date = new Date(parseInt(res[key]['hour']));
                    res[key]['hour'] = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                    data.push(res[key]);
                }
                _this.dataSourceRead = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
            }, function (err) {
                console.log(err.status);
            });
        });
    };
    ComparePage.prototype.onSelectChange = function (selectedValue) {
        this.cargarDatos(selectedValue.detail.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ComparePage.prototype, "paginator", void 0);
    ComparePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.page.html */ "./src/app/pages/compare/compare.page.html"),
            styles: [__webpack_require__(/*! ./compare.page.scss */ "./src/app/pages/compare/compare.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"],
            _services_device_read_device_read_service__WEBPACK_IMPORTED_MODULE_1__["DeviceReadService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ComparePage);
    return ComparePage;
}());



/***/ }),

/***/ "./src/app/services/device-read/device-read.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/device-read/device-read.service.ts ***!
  \*************************************************************/
/*! exports provided: DeviceReadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReadService", function() { return DeviceReadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DeviceReadService = /** @class */ (function () {
    function DeviceReadService(http) {
        this.http = http;
    }
    DeviceReadService.prototype.getAllData = function (nodo) {
        var _this = this;
        var url = this.getUrlByNodo(nodo);
        return this.getToken(url).then(function (value) {
            var uri = url + "/data";
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
                'Authorization': "" + value
            });
            return _this.http.get(uri, { headers: httpHeaders });
        });
    };
    DeviceReadService.prototype.getToken = function (url) {
        var data = {
            userName: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userRead,
            password: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].passwordRead
        };
        var uri = url + "/login";
        var HTTPOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'text/html, application/xhtml+xml, */*',
            }),
            'responseType': 'text'
        };
        return this.http.post(uri, data, HTTPOptions).toPromise();
    };
    DeviceReadService.prototype.getUrlByNodo = function (nodo) {
        switch (nodo) {
            case 'peer0.asturias.antonio.com':
                return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipReadAsturias;
            case 'peer0.chicago.antonio.com':
                return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipReadChicago;
            case 'peer0.brasil.antonio.com':
                return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipReadBrasil;
            default:
                return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipReadAsturias;
        }
    };
    DeviceReadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeviceReadService);
    return DeviceReadService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-compare-compare-module.js.map