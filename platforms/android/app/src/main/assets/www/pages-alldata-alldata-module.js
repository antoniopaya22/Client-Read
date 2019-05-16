(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alldata-alldata-module"],{

/***/ "./src/app/pages/alldata/alldata.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/alldata/alldata.module.ts ***!
  \*************************************************/
/*! exports provided: AlldataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlldataPageModule", function() { return AlldataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alldata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alldata.page */ "./src/app/pages/alldata/alldata.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _alldata_page__WEBPACK_IMPORTED_MODULE_6__["AlldataPage"]
    }
];
var AlldataPageModule = /** @class */ (function () {
    function AlldataPageModule() {
    }
    AlldataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alldata_page__WEBPACK_IMPORTED_MODULE_6__["AlldataPage"]]
        })
    ], AlldataPageModule);
    return AlldataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/alldata/alldata.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/alldata/alldata.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>All Data</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"row\">\r\n   <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-orange\">\r\n                <h4 class=\"card-title \">Todos los datos</h4>\r\n                <p class=\"card-category\"> Lista con todos los datos proporcionados por los devices</p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\" [dataSource]=\"dataSource\" mat-table>\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"Key\">\r\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> ID </th>\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Key}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"temp\">\r\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Temperatura </th>\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.temperature}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Weight Column -->\r\n                        <ng-container matColumnDef=\"device\">\r\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Device </th>\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.device}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Symbol Column -->\r\n                        <ng-container  matColumnDef=\"gps\">\r\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Coordenates </th>\r\n                          <td [ngStyle]=\"{'display':!size?'none':''}\"mat-cell *matCellDef=\"let element\"> {{element.Record.gps}} </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container  matColumnDef=\"node\">\r\n                          <th [ngStyle]=\"{'display':!size?'none':''}\" mat-header-cell *matHeaderCellDef class=\" text-primary\"> Node </th>\r\n                          <td [ngStyle]=\"{'display':!size?'none':''}\" mat-cell *matCellDef=\"let element\"> {{element.Record.node}} </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"time\">\r\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Hour </th>\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Record.hour}} </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"history\">\r\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Actions </th>\r\n                          <td mat-cell *matCellDef=\"let element\"> <button class=\"btn btn-orange btn-round btn-block\" (click)=\"history(element.Key)\">Historial</button> </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n              </mat-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/alldata/alldata.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/alldata/alldata.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsZGF0YS9DOlxcVXNlcnNcXGFudG9uXFxEZXNrdG9wXFxURkdcXFJlcG9zXFxDbGllbnQtQXVkaXRvcnkvc3JjXFxhcHBcXHBhZ2VzXFxhbGxkYXRhXFxhbGxkYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbGRhdGEvYWxsZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/alldata/alldata.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/alldata/alldata.page.ts ***!
  \***********************************************/
/*! exports provided: AlldataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlldataPage", function() { return AlldataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AlldataPage = /** @class */ (function () {
    function AlldataPage(deviceApi, userApi, router) {
        this.deviceApi = deviceApi;
        this.userApi = userApi;
        this.router = router;
        this.displayedColumns = ['Key', 'temp', 'device', 'gps', 'node', 'time', 'history'];
    }
    AlldataPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth > 760) {
            this.size = true;
        }
        this.deviceApi.getAllData().subscribe(function (res) {
            var data = [];
            for (var key in res) {
                var date = new Date(parseInt(res[key]['Record']['hour']));
                res[key]['Record']['hour'] = date.toLocaleDateString() + " " + date.toLocaleTimeString();
                data.push(res[key]);
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
        }, function (err) {
            console.log(err.status);
            _this.userApi.logout();
            _this.router.navigate(['/login'], { replaceUrl: true });
        });
    };
    AlldataPage.prototype.history = function (id) {
        this.router.navigate(["/history/" + id], { replaceUrl: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AlldataPage.prototype, "paginator", void 0);
    AlldataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-alldata',
            template: __webpack_require__(/*! ./alldata.page.html */ "./src/app/pages/alldata/alldata.page.html"),
            styles: [__webpack_require__(/*! ./alldata.page.scss */ "./src/app/pages/alldata/alldata.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AlldataPage);
    return AlldataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-alldata-alldata-module.js.map