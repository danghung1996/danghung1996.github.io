(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 100%;\r\n}\r\nmat-card{\r\n    background-color:cadetblue;\r\n}"

/***/ }),

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Apply Leave</mat-card>\n<br>\n<form>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <mat-form-field>\n        <span matPrefix></span>\n        <input matInput placeholder=\"Staff Name\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Employee ID\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <mat-select placeholder=\"Leave type\">\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"From date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-1\">\n      <select class=\"form-control\">\n        <option value=\"AM\">AM</option>\n        <option value=\"PM\">PM</option>\n      </select>\n    </div>\n    <div class=\"col-5\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-1\">\n      <select class=\"form-control\">\n        <option value=\"AM\">AM</option>\n        <option value=\"PM\">PM</option>\n      </select>\n    </div>\n  </div>\n  <button mat-raised-button color=\"primary\" style=\"float:right\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ApplyLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeaveComponent", function() { return ApplyLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplyLeaveComponent = /** @class */ (function () {
    function ApplyLeaveComponent() {
    }
    ApplyLeaveComponent.prototype.ngOnInit = function () {
    };
    ApplyLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apply-leave',
            template: __webpack_require__(/*! ./apply-leave.component.html */ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html"),
            styles: [__webpack_require__(/*! ./apply-leave.component.css */ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplyLeaveComponent);
    return ApplyLeaveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map