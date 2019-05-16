(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"row\">\n   <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-orange\">\n                <h4 class=\"card-title \">Historial de modificaciones del dato {{id}}</h4>\n                <p class=\"card-category\"> Lista con todos los datos proporcionados por los devices</p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\" [dataSource]=\"dataSource\" mat-table>\n                        <!-- Position Column -->\n                        <ng-container matColumnDef=\"transid\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> TransId </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.TxId}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"timestamp\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Timestamp </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Timestamp}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"temp\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Temperatura </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Value.temperature}} </td>\n                        </ng-container>\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"device\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Device </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Value.device}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container  matColumnDef=\"gps\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Coordenates </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Value.gps}} </td>\n                        </ng-container>\n\n                        <ng-container  matColumnDef=\"node\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Node </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Value.node}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"time\">\n                          <th mat-header-cell *matHeaderCellDef class=\" text-primary\"> Hour </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.Value.hour}} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n              <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n              </mat-paginator>\n            </div>\n        </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var HistoryPage = /** @class */ (function () {
    function HistoryPage(route, deviceApi, userApi, router) {
        this.route = route;
        this.deviceApi = deviceApi;
        this.userApi = userApi;
        this.router = router;
        this.displayedColumns = ['transid', 'timestamp', 'temp', 'device', 'gps', 'node', 'time'];
    }
    HistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
        this.deviceApi.getHistoryData(this.id).subscribe(function (res) {
            var data = [];
            for (var key in res) {
                var date = new Date(parseInt(res[key]['Value']['hour']));
                res[key]['Value']['hour'] = date.toLocaleDateString() + " " + date.toLocaleTimeString();
                data.push(res[key]);
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
        }, function (err) {
            console.log(err.status);
            _this.userApi.logout();
            _this.router.navigate(['/login'], { replaceUrl: true });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], HistoryPage.prototype, "paginator", void 0);
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module.js.map