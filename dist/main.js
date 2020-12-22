(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iceman\Desktop\project\brs\src\main.ts */"zUnb");


/***/ }),

/***/ "2yus":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RestService {
    constructor(http) {
        this.http = http;
        this.endpoint = "https://bug-report-system-server.herokuapp.com/bugs";
    }
    //get all bugs givven the attibutes 'attrs'
    getAllBugs(attrs) {
        return this.http.get(this.endpoint, { observe: 'response', params: attrs });
    }
    //post a bug to server
    postBug(bug) {
        return this.http.post(this.endpoint, bug);
    }
    //get the bug requested by its id
    getBugById(bugid) {
        let query = this.endpoint + "/" + bugid;
        return this.http.get(query);
    }
    //update the bug
    updateBug(bug) {
        let query = this.endpoint + "/" + bug.id;
        return this.http.put(query, bug);
    }
    //delete bug
    deleteBug(bugid) {
        let query = this.endpoint + "/" + bugid;
        return this.http.delete(query);
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FB6M":
/*!*************************************!*\
  !*** ./src/app/incomplete.guard.ts ***!
  \*************************************/
/*! exports provided: IncompleteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleteGuard", function() { return IncompleteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IncompleteGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.leavePage();
    }
}
IncompleteGuard.ɵfac = function IncompleteGuard_Factory(t) { return new (t || IncompleteGuard)(); };
IncompleteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IncompleteGuard, factory: IncompleteGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncompleteGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "NHIm":
/*!****************************************************!*\
  !*** ./src/app/report-bug/report-bug.component.ts ***!
  \****************************************************/
/*! exports provided: ReportBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBugComponent", function() { return ReportBugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["errorModal"];
function ReportBugComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bug priority is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repVal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", repVal_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repVal_r12, " ");
} }
function ReportBugComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staVal_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", staVal_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", staVal_r13, " ");
} }
function ReportBugComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A QA user must provide a status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "activated": a0 }; };
function ReportBugComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !ctx_r7.reportBugForm.invalid))("disabled", ctx_r7.reportBugForm.invalid);
} }
function ReportBugComponent_button_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.reportBugForm.invalid);
} }
function ReportBugComponent_div_59_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_div_59_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_div_59_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submitting comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_div_59_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comment submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_div_59_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", comment_r21);
} }
function ReportBugComponent_div_59_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportBugComponent_div_59_div_30_div_2_Template, 11, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.reportBugForm.get("bugComments").controls == null ? null : ctx_r18.reportBugForm.get("bugComments").controls.reverse());
} }
function ReportBugComponent_div_59_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No comments submitted yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportBugComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reporter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReportBugComponent_div_59_span_10_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReportBugComponent_div_59_span_17_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportBugComponent_div_59_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.appendComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "* This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportBugComponent_div_59_div_25_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportBugComponent_div_59_div_26_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Previous Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReportBugComponent_div_59_div_30_Template, 3, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReportBugComponent_div_59_div_31_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.commentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.commentFormGroup.get("reporter").invalid && ctx_r9.commentFormGroup.get("reporter").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.commentFormGroup.get("description").invalid && ctx_r9.commentFormGroup.get("description").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.commentFormGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.submittingComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.commentSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.reportBugForm.get("bugComments").controls == null ? null : ctx_r9.reportBugForm.get("bugComments").controls.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.reportBugForm.get("bugComments").controls == null ? null : ctx_r9.reportBugForm.get("bugComments").controls.length) == 0);
} }
function ReportBugComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ooops.!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Could not load bug from server!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportBugComponent_ng_template_71_Template_button_click_7_listener() { const c_r24 = ctx.close; return c_r24(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go mainpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportBugComponent_ng_template_71_Template_button_click_10_listener() { const d_r25 = ctx.dismiss; return d_r25(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Report New Bug");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportBugComponent {
    //injecting rest service , router and modals
    constructor(service, router, activeRoute, modal) {
        this.service = service;
        this.router = router;
        this.activeRoute = activeRoute;
        this.modal = modal;
        //flag when looading data from server
        this.dataloading = false;
        //flag when data has been submitted to server
        this.datasubmitted = false;
        //flag tha hides the form 
        this.hideform = false;
        //flag that indicates the ui is submitting a comment
        this.submittingComment = false;
        //indicates if a comment has been submitted
        this.commentSubmitted = false;
        //flag that indicates if our form is an edit or submit form 
        this.isUpdateForm = false;
        //keep the id of the bug if our from is an edit form 
        this.bugId = null;
        //valid values for the reporter
        this.reporterValues = ['QA', 'PO', 'DEV'];
        //valid status values
        this.statusValues = ['Ready for testing', 'Done', 'Rejected'];
        //formgroup for our main edit/submit form
        this.reportBugForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            bugTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bugDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bugPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bugReporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bugStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            bugComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        //keep an instance of our initial form 
        this._initialForm = this.reportBugForm.value;
        //form group for our insert new comment form 
        this.commentFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    //handle an error 
    handleError(errorCode) {
        //shows a modal to the user
        this.openModal(this.errorNgTemplate);
    }
    //method that fetches the givved bug to template
    fetchBug(bug) {
        //fetch data to report bug form
        this.reportBugForm.get("bugTitle").setValue(bug.title);
        this.reportBugForm.get("bugDescription").setValue(bug.description);
        this.reportBugForm.get("bugPriority").setValue(bug.priority);
        this.reportBugForm.get("bugReporter").setValue(bug.reporter);
        this.reportBugForm.get("bugStatus").setValue(bug.status);
        //current but we are working on
        this.bugId = bug.id;
        //get the comments  section of our ui
        let my_array = this.reportBugForm.get('bugComments');
        if (bug.comments) {
            //for each comment we retrieved, we append it to our ui
            for (let comment of bug.comments) {
                let control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](comment.reporter),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](comment.description)
                });
                my_array.push(control);
            }
        }
    }
    // sets the values to our initial bug variable
    fetchInitialBug(bug) {
        this._initialForm.bugTitle = bug.title;
        this._initialForm.bugDescription = bug.description;
        this._initialForm.bugPriority = bug.priority;
        this._initialForm.bugReporter = bug.reporter;
        this._initialForm.bugStatus = bug.status;
    }
    ngOnInit() {
        //get our parameters
        this.activeRoute.params.subscribe((data) => {
            let id = data.id;
            //if id is not provided our form is a submit form
            if (id == undefined) {
            }
            else { //our form is and edit form 
                //load bug 
                this.service.getBugById(id).subscribe((requestedbug) => {
                    //our for is an update form
                    this.isUpdateForm = true;
                    //update form values
                    this.fetchBug(requestedbug);
                    //update initial bug
                    this.fetchInitialBug(requestedbug);
                }, error => {
                    //could not get the data from server
                    let errorcode = error.status;
                    //show modal
                    this.handleError(errorcode);
                });
            }
        });
        //set up a listener to our bugreporer control, if is QA make the bugstatus mandatory
        this.reportBugForm.get("bugReporter").statusChanges.subscribe((value) => {
            if (this.reportBugForm.get("bugReporter").value == 'QA') {
                this.reportBugForm.get("bugStatus").setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }
            else {
                this.reportBugForm.get("bugStatus").clearValidators();
            }
            //update validity of the control and the element
            this.reportBugForm.get("bugStatus").updateValueAndValidity();
        });
    }
    //when our form is submitted
    onSubmit() {
        if (!this.reportBugForm.valid) {
            // our form is not valid
        }
        else {
            //show spinner
            this.dataloading = true;
            //hide form
            this.hideform = true;
            if (this.isUpdateForm) {
                //make call to api to update bug
                this.service.updateBug(this.generateBug()).subscribe((updatedBug) => {
                    //update the initial bug value
                    this.fetchInitialBug(updatedBug);
                    //update our form values
                    this.fetchBug(updatedBug);
                    //hide spinner
                    this.dataloading = false;
                    //show success message
                    this.datasubmitted = true;
                });
            }
            else {
                //form is submit form 
                //posting data
                this.service.postBug(this.generateBug()).subscribe((createdBug) => {
                    //update intial bug and 
                    this.fetchInitialBug(createdBug);
                    this.fetchBug(createdBug);
                    // hide spinner
                    this.dataloading = false;
                    // show success message
                    this.datasubmitted = true;
                });
            }
        }
    }
    //collects the data from our ui and create an representation of our bug (BugInterface)
    generateBug() {
        let values = this.reportBugForm.value;
        let bug = {
            id: this.bugId,
            title: values.bugTitle,
            description: values.bugDescription,
            priority: values.bugPriority,
            reporter: values.bugReporter,
            status: values.bugStatus,
            comments: values.bugComments
        };
        return bug;
    }
    goMainPage() {
        this.router.navigate(['']);
    }
    // gets the comment from our submit comment form and appends its to comments
    appendComment() {
        //get the array of comments 
        let comments = this.reportBugForm.get('bugComments');
        //create new formgroup to push to comments
        let to_push = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.commentFormGroup.get('reporter').value),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.commentFormGroup.get('description').value)
        });
        comments.push(to_push);
        //empty commentformgroup
        this.commentFormGroup.get('reporter').reset();
        this.commentFormGroup.get('description').reset();
        //update the server
        let bug = this.generateBug();
        //show spinner
        this.submittingComment = true;
        //hide success icon
        this.commentSubmitted = false;
        //update bug to server
        this.service.updateBug(bug).subscribe((data) => {
            //give feedback tou user
            //hide spinner
            this.submittingComment = false;
            //show success icon
            this.commentSubmitted = true;
            //hide submitted message after 2s
            setTimeout(() => {
                this.commentSubmitted = false;
            }, 2000);
        });
    }
    // indicates if user has unsaved data in forms
    leavePage() {
        var _a, _b;
        //comment is not saved
        if (!this.datasubmitted && (((_a = this.commentFormGroup.get('reporter').value) === null || _a === void 0 ? void 0 : _a.length) > 0) || (((_b = this.commentFormGroup.get('description').value) === null || _b === void 0 ? void 0 : _b.length) > 0))
            return window.confirm("You haven't submit your comment");
        //bug form is not saved
        if (this.compare(this._initialForm, this.reportBugForm.value))
            return true;
        //confirm action to user
        return window.confirm("Your changes haven't been submitted. Are you sure, you want to leave the page?");
    }
    //compares two bugform objects
    compare(initial, bugform) {
        if (initial.bugTitle != bugform.bugTitle)
            return false;
        if (initial.bugDescription != bugform.bugDescription)
            return false;
        if (initial.bugPriority != bugform.bugPriority)
            return false;
        if (initial.bugReporter != bugform.bugReporter)
            return false;
        if (initial.bugStatus != bugform.bugStatus)
            return false;
        return true;
    }
    //show error modal to user
    openModal(content) {
        //make modal non exitable from clicking out
        let modalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        //show modal
        this.modal.open(content, modalOptions).result.then(reason => {
            //go to main page
            this.goMainPage();
        }, (reason) => {
            //stay on page and report the bug
            this.router.navigate(['reportbug']);
        });
    }
}
ReportBugComponent.ɵfac = function ReportBugComponent_Factory(t) { return new (t || ReportBugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
ReportBugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportBugComponent, selectors: [["app-report-bug"]], viewQuery: function ReportBugComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorNgTemplate = _t.first);
    } }, decls: 73, vars: 16, consts: [[1, "container", "flex", "text-center"], [3, "hidden"], [1, "display-4", "text-center", "mb-2"], [1, "row", 3, "hidden"], [1, "col"], [1, "mt-2", 3, "formGroup", "submit"], [1, "form-group"], ["for", "bugTitle "], ["type", "text", "id", "bugTitle", "formControlName", "bugTitle", "placeholder", "Enter Title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "bugDescription"], ["name", "bugDescription", "id", "bugDescription", "rows", "3", "formControlName", "bugDescription", "placeholder", "Enter Description", 1, "form-control"], ["for", "bugPriority "], ["name", "bugPriority", "id", "bugPriority", "formControlName", "bugPriority", 1, "form-control"], ["value", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "bugReporter"], ["name", "bugReporter", "id", "bugReporter", "formControlName", "bugReporter", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "bugStatus"], ["name", "bugStatus", "id", "bugStatus", "formControlName", "bugStatus", 1, "form-control"], ["value", "", 3, "disabled"], [1, "d-flex", "justify-content-end"], ["class", "btn btn-submit", "type", "submit", 3, "ngClass", "disabled", 4, "ngIf"], ["class", "btn btn-update", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "col-12 col-md-6", "style", "border-radius: 2em; padding: 2em;", 3, "formGroup", 4, "ngIf"], [1, "text-center"], [1, "fa", "fa-thumbs-up", "text-info", "fa-5x"], [1, "display-4"], [1, "btn", "btn-outline-info", 3, "click"], [1, "loading-icon"], ["errorModal", ""], [1, "text-danger"], [3, "value"], ["type", "submit", 1, "btn", "btn-submit", 3, "ngClass", "disabled"], ["type", "submit", 1, "btn", "btn-update", 3, "disabled"], [1, "col-12", "col-md-6", 2, "border-radius", "2em", "padding", "2em", 3, "formGroup"], [1, "card", "mb-2", "add-comment-row"], [1, "card-body", "bg-light"], [1, "text-center", "card-title"], ["type", "text", "formControlName", "reporter", "placeholder", "Please enter your name", 1, "form-control"], ["row", "3", "formControlName", "description", "placeholder", "Leave your comment", 1, "form-control"], ["type", "button", 1, "btn", "add-comment-btn", 3, "disabled", "click"], [1, "btn", "fa", "fa-plus", "fa-2x"], [1, "row", "justify-content-center"], ["class", "col-auto d-flex align-items-center", 4, "ngIf"], ["class", "row outer-comment-row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "col-auto", "d-flex", "align-items-center"], [1, "text-info"], [1, "fa", "fa-thumbs-up", "text-info", "fa-3x"], [1, "row", "outer-comment-row"], [1, "row", "bug-comments-row"], ["class", "card mb-2", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "card", "mb-2", 3, "formGroup"], [1, "card-body"], [1, "bug-comment-name"], ["type", "text", "formControlName", "reporter", "disabled", "", 1, "form-control"], [1, "bug-comment-description"], ["row", "3", "formControlName", "description", "disabled", ""], [1, "row"], [1, "col", "text-center"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-success", "activated", 3, "click"], [1, "btn", "btn-info", "activated", 3, "click"]], template: function ReportBugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Report bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ReportBugComponent_Template_form_submit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportBugComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReportBugComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Minor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Major");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportBugComponent_small_35_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Reporter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReportBugComponent_option_44_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReportBugComponent_small_45_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ReportBugComponent_option_52_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ReportBugComponent_small_53_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ReportBugComponent_button_55_Template, 3, 4, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ReportBugComponent_button_56_Template, 3, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "* This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ReportBugComponent_div_59_Template, 32, 8, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Success!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportBugComponent_Template_button_click_65_listener() { return ctx.goMainPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Go to mainpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Submitting data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ReportBugComponent_ng_template_71_Template, 13, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportBugForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportBugForm.get("bugTitle").invalid && ctx.reportBugForm.get("bugTitle").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportBugForm.get("bugDescription").invalid && ctx.reportBugForm.get("bugDescription").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportBugForm.get("bugPriority").invalid && ctx.reportBugForm.get("bugPriority").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reporterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportBugForm.get("bugReporter").invalid && ctx.reportBugForm.get("bugReporter").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.reportBugForm.get("bugReporter").value == "QA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportBugForm.get("bugStatus").invalid && ctx.reportBugForm.get("bugStatus").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.datasubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.dataloading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["form[_ngcontent-%COMP%] {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n  padding: 2em;\n  border-radius: 1em;\n  max-height: 700px;\n  background-color: white;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\nform[_ngcontent-%COMP%]   input[type=text i][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n.add-comment-row[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n.add-comment-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.add-comment-row[_ngcontent-%COMP%]   input[type=text i][_ngcontent-%COMP%], .add-comment-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .add-comment-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n.add-comment-row[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n.add-comment-row[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .add-comment-btn[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.add-comment-row[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .add-comment-btn[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.outer-comment-row[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  padding: 5px 0 5px 15px;\n  background: #fafafa;\n  margin: 0 0px 0 2px;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n  flex-wrap: nowrap;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 270px;\n  padding: 11px;\n  width: 101%;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: unset;\n  margin-bottom: 0px !important;\n  background-color: #fff0;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2n)   input[type=text i][_ngcontent-%COMP%] {\n  text-align: right;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2n)   .bug-comment-description[_ngcontent-%COMP%] {\n  padding-left: 130px;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2n+1)   .bug-comment-description[_ngcontent-%COMP%] {\n  padding-right: 130px;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: none;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   input[type=text i][_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: unset;\n  font-size: 16px;\n  padding: 0 20px;\n}\n.outer-comment-row[_ngcontent-%COMP%]   .bug-comments-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 10px 0 10px;\n  border-radius: 1.25rem;\n  background: #519db033;\n  min-height: 90px;\n  overflow-y: auto;\n  word-wrap: break-word;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.btn-submit[_ngcontent-%COMP%], .btn-update[_ngcontent-%COMP%], .btn-success[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  border: none;\n}\n.btn-submit.activated[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-update.activated[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-success.activated[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-info.activated[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.btn-submit.activated[_ngcontent-%COMP%]:after, .btn-update.activated[_ngcontent-%COMP%]:after, .btn-success.activated[_ngcontent-%COMP%]:after, .btn-info.activated[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: #36383969;\n  transition: all 0.5s ease-in-out;\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n.btn-submit.activated[_ngcontent-%COMP%]:hover:after, .btn-update.activated[_ngcontent-%COMP%]:hover:after, .btn-success.activated[_ngcontent-%COMP%]:hover:after, .btn-info.activated[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #519db0;\n  color: #ffffff;\n}\n.btn-submit[_ngcontent-%COMP%]:after {\n  height: 373%;\n  width: 288%;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: #519db0;\n  color: #ffffff;\n}\n.btn-info[_ngcontent-%COMP%]:after {\n  height: 603%;\n  width: 251%;\n}\n.btn-update[_ngcontent-%COMP%] {\n  background: #ff9649cf;\n  color: #fff;\n}\n.btn-update[_ngcontent-%COMP%]:after {\n  height: 306%;\n  width: 315%;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #ff9649cf;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:after {\n  height: 603%;\n  width: 316%;\n}\n.display-4[_ngcontent-%COMP%] {\n  margin-bottom: 44px !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 1rem;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 1rem;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n[_nghost-ugt-c48][_ngcontent-%COMP%] {\n  display: block;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlcG9ydC1idWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJOzs7RUFHSSxzQkFBQTtBQUVSO0FBRUE7RUFTSSxzQkFBQTtBQVBKO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBREk7OztFQUdJLHNCQUFBO0FBR1I7QUFBSTtFQUNJLHNCQUFBO0FBRVI7QUFEUTtFQUNJLHFCQUFBO0FBR1o7QUFGWTtFQUNJLHFCQUFBO0FBSWhCO0FBRUE7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQUFaO0FBRWdCO0VBQ0ksaUJBQUE7QUFBcEI7QUFFZ0I7RUFDSSxtQkFBQTtBQUFwQjtBQUlnQjtFQUNJLG9CQUFBO0FBRnBCO0FBS1k7RUFDSSxVQUFBO0FBSGhCO0FBSWdCO0VBQ0ksYUFBQTtBQUZwQjtBQUlnQjtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRnBCO0FBSWdCO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUZwQjtBQVNBOzs7O0VBSUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5KO0FBUVE7Ozs7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFIWjtBQUtROzs7O0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMERBQUE7QUFBWjtBQUdZOzs7O0VBRUkseURBQUE7QUFFaEI7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBSUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFBUjtBQUlBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQVI7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBSUE7RUFDSSw4QkFBQTtBQURKO0FBSUM7RUFDRyxXQUFBO0FBREo7QUFLQSxVQUFBO0FBRUM7RUFDRyxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFPQSxXQUFBO0FBRUM7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFTQSxvQkFBQTtBQUVDO0VBQ0csZ0JBQUE7QUFQSjtBQVVBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0FBUEoiLCJmaWxlIjoicmVwb3J0LWJ1Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCIgaV0sXHJcbiAgICB0ZXh0YXJlYSxcclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZC1jb21tZW50LXJvdyB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIiBpXSxcclxuICAgIHRleHRhcmVhLFxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcbiAgICAgICAgLmFkZC1jb21tZW50LWJ0biB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmZhLXBsdXMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3V0ZXItY29tbWVudC1yb3cge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgbWFyZ2luOiAwIDBweCAwIDJweDtcclxuICAgIC5idWctY29tbWVudHMtcm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTFweDtcclxuICAgICAgICB3aWR0aDogMTAxJTtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwO1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIiBpXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnVnLWNvbW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4rMSkge1xyXG4gICAgICAgICAgICAgICAgLmJ1Zy1jb21tZW50LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCIgaV0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTE5ZGIwMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXN1Ym1pdCxcclxuLmJ0bi11cGRhdGUsXHJcbi5idG4tc3VjY2VzcyxcclxuLmJ0bi1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgICYuYWN0aXZhdGVkIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNjM4Mzk2OTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTglKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXN1Ym1pdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTE5ZGIwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM3MyU7XHJcbiAgICAgICAgd2lkdGg6IDI4OCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTE5ZGIwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDYwMyU7XHJcbiAgICAgICAgd2lkdGg6IDI1MSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tdXBkYXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk2NDljZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDYlO1xyXG4gICAgICAgIHdpZHRoOiAzMTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTY0OWNmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDYwMyU7XHJcbiAgICAgICAgd2lkdGg6IDMxNiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXNwbGF5LTQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuXHJcbltfbmdob3N0LXVndC1jNDhdIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportBugComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-bug',
                templateUrl: './report-bug.component.html',
                styleUrls: ['./report-bug.component.scss']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { errorNgTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['errorModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'brs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n[_nghost-%COMP%] {\n  background: #fafafa !important;\n  height: 150vh !important;\n  padding-bottom: 100px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-bottom: 10vh;\n}\n\nhtml[_ngcontent-%COMP%] {\n  background: #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmEgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bugs_list_bugs_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bugs-list/bugs-list.component */ "j+6v");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-bug/report-bug.component */ "NHIm");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-interceptor.interceptor */ "prPO");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_11__["HttpInterceptorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _bugs_list_bugs_list_component__WEBPACK_IMPORTED_MODULE_4__["BugsListComponent"],
        _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_6__["ReportBugComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _bugs_list_bugs_list_component__WEBPACK_IMPORTED_MODULE_4__["BugsListComponent"],
                    _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_6__["ReportBugComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_11__["HttpInterceptorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return [""]; };
class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 5, vars: 2, consts: [[1, "container-fluid"], [1, "container"], [1, "navbar", "navbar-light"], [1, "navbar-brand", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: #888888bd !important;\n}\n.container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #d7f5fc;\n}\n.container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d7f5fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FBQ0o7QUFBSTtFQUNJLG9CQUFBO0FBRVI7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUFZO0VBQ0ksY0FBQTtBQUVoQjtBQURnQjtFQUNJLGNBQUE7QUFHcEIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4YmQgIWltcG9ydGFudDtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDdmNWZjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDdmNWZjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j+6v":
/*!**************************************************!*\
  !*** ./src/app/bugs-list/bugs-list.component.ts ***!
  \**************************************************/
/*! exports provided: BugsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugsListComponent", function() { return BugsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function BugsListComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reporter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reporter_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reporter_r5, " ");
} }
function BugsListComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r6, " ");
} }
const _c0 = function (a1) { return ["reportbug", a1]; };
function BugsListComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_tr_86_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const bug_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteRowBug(bug_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bug_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bug_r7.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bug_r7.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, bug_r7.createdAt, "d/M/yy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bug_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, bug_r7.id));
} }
function BugsListComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No bugs found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BugsListComponent_div_88_nav_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_div_88_nav_1_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BugsListComponent_div_88_nav_1_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_div_88_nav_1_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BugsListComponent_div_88_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BugsListComponent_div_88_nav_1_li_2_Template, 6, 0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BugsListComponent_div_88_nav_1_li_6_Template, 6, 0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentPage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.currentPage + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentPage < ctx_r10.totalPages - 1);
} }
function BugsListComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BugsListComponent_div_88_nav_1_Template, 7, 3, "nav", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.tableLoading);
} }
const _c1 = function () { return ["reportbug"]; };
const _c2 = function (a0, a1) { return { "fa-sort-up": a0, "fa-sort-down": a1 }; };
class BugsListComponent {
    //injecting restServices to make calls to api
    constructor(restService) {
        this.restService = restService;
        //array that stores the bugs
        this._bugs = [];
        //preference of ordering
        this._ascending = false;
        //sorting filters on table
        this._filters = {
            title: 'title',
            priority: 'priority',
            reporter: 'reporter',
            createdAt: 'createdAt',
            status: 'status'
        };
        //valid reporter values (search from)
        this.reporterValues = ['QA', 'PO', 'DEV'];
        //valid status values (search form)
        this.statusValues = ['Ready for testing', 'Done', 'Rejected'];
        // the filter we want the bugs to be ordered by
        this._filterBy = this.filters.createdAt;
        //flag that indicates if we are loading bugs to table
        this.tableLoading = false;
        //ccurent page of results
        this.currentPage = 0;
        //total pages of results
        this.totalPages = 1;
        //searchform formgroup
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            searchTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            searchPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            searchReporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            searchStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    ngOnInit() {
        //load list of bugs
        this.getAllBugs();
    }
    //getter
    get filters() {
        return this._filters;
    }
    //get the bugs based on the filters applied
    searchSubmit() {
        //get filter parameters 
        let searchParams = this.getQueryParams();
        //make the table invisible
        this.tableLoading = true;
        //make call to api to get the bugs
        this.restService.getAllBugs(searchParams).subscribe(search => {
            //update the bugs array
            this.bugs = search.body;
            //update total pages
            this.totalPages = search.headers.get('Totalpages');
            //set the current page to first page
            this.currentPage = 0;
            //show the table of bugs
            this.tableLoading = false;
        });
    }
    //a method that returns the filters that the user has applied to the interface
    getQueryParams() {
        var _a, _b, _c, _d;
        //get element which we want the ordering to be applied and the actual order(asc/desc)
        let filter = this.filterBy + ',' + (this.ascending ? 'asc' : 'desc');
        //initalize the queryparams with the filter
        let searchParams = { sort: filter };
        //append to the params the filters (if any) from the search form
        searchParams.priority = (_a = this.searchForm.get("searchPriority").value) !== null && _a !== void 0 ? _a : "";
        searchParams.reporter = (_b = this.searchForm.get("searchReporter").value) !== null && _b !== void 0 ? _b : "";
        searchParams.title = (_c = this.searchForm.get("searchTitle").value) !== null && _c !== void 0 ? _c : "";
        searchParams.status = (_d = this.searchForm.get("searchStatus").value) !== null && _d !== void 0 ? _d : "";
        //return the search params
        return searchParams;
    }
    ;
    //load all bugs to the table. takes into account the current page
    getAllBugs() {
        //make table invisible
        this.tableLoading = true;
        //get query params
        let attrs = this.getQueryParams();
        //append the page we want to get
        attrs.page = this.currentPage;
        //make the call to api and update the table
        this.restService.getAllBugs(attrs).subscribe((response) => {
            let headers = response.headers;
            //update total pages
            this.totalPages = Number.parseInt(headers.get('Totalpages'));
            //update current page
            this.currentPage = Number.parseInt(headers.get('Page'));
            // update the list of bugs
            this.bugs = response.body;
            // make table visible
            this.tableLoading = false;
        });
    }
    //got to previous page of results
    previousPage() {
        //we are at the first page so no action needed
        if (this.currentPage <= 0)
            return;
        //decrease the current page
        this.currentPage--;
        //load the bugs with the parameters the user has set to the ui
        this.getAllBugs();
    }
    //go to next page of results
    nextPage() {
        //if results have one page or the current page is the last page then no action is needed
        if (!(this.currentPage + 1 < this.totalPages) || this.totalPages == 1)
            return;
        //update the current page
        this.currentPage++;
        //load the bugs with the parameters the user has set to the ui
        this.getAllBugs();
    }
    //setter
    set ascending(value) {
        this._ascending = value;
    }
    //getter
    get ascending() {
        return this._ascending;
    }
    //sets the filter which we want our results to be ordered by
    set filterBy(value) {
        this._filterBy = value;
    }
    //returns the filter which the results are ordered by
    get filterBy() {
        return this._filterBy;
    }
    //seter
    set bugs(value) {
        this._bugs = value;
    }
    //getter
    get bugs() {
        return this._bugs;
    }
    // update the order or the filter 
    updateFilter(filterValue) {
        //the filter is the same so change the ordering 
        if (this.filterBy == filterValue) {
            //toggling the ascending value
            this.ascending = !this.ascending;
        }
        //update the filter
        this.filterBy = filterValue;
        //get data form api
        this.getAllBugs();
    }
    //delete a row from the table of bugs and update the list
    deleteRowBug(bugID) {
        //confirm action
        let confirm = window.confirm('You are about to delete a bug. This action is irreversible. Do you want to proceed?');
        //user doesn't want to procceed with deletion 
        if (!confirm)
            return;
        //make the call to api to delete the bug
        this.restService.deleteBug(bugID).subscribe((item) => {
            // update the table
            this.getAllBugs();
        });
    }
}
BugsListComponent.ɵfac = function BugsListComponent_Factory(t) { return new (t || BugsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
BugsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BugsListComponent, selectors: [["app-bugs-list"]], decls: 91, vars: 35, consts: [[1, "container", "flex", "text-center"], [1, "display-4", "text-center", "mb-2"], [1, "display"], [1, "container"], [1, "btn", "btn-info", "mb-2", "add-report", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "search-form", "mb-4"], [3, "formGroup", "submit"], ["id", "searchTable", 1, "table", "text-white"], ["type", "text", "formControlName", "searchTitle", "placeholder", "Title Search", 1, "form-control"], ["name", "", "formControlName", "searchPriority", 1, "form-control"], ["value", "null", "disabled", ""], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["name", "", "id", "", "formControlName", "searchReporter", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "", "id", "", "formControlName", "searchStatus", 1, "form-control"], ["type", "reset", 1, "btn", "btn-clear", "form-control"], ["type", "submit", 1, "btn", "btn-search", "form-control"], [1, "table-responsive"], [1, "table", "table-striped", "mb-0"], [1, "bg-dark", "text-white"], [3, "click"], [1, "fa", "fa-sort-up", 3, "hidden", "ngClass"], [1, "fa", "fa-sort", 3, "hidden", "ngClass"], [1, "button-col"], [3, "hidden"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "page-navigation", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "loading-icon", 3, "hidden"], [3, "value"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "text-center"], [1, "page-navigation"], ["aria-label", "Page navigation example", 4, "ngIf"], ["aria-label", "Page navigation example"], [1, "pagination"], ["class", "page-item", 3, "click", 4, "ngIf"], [1, "page-item", "active"], [1, "page-link"], [1, "page-item", 3, "click"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Next", 1, "page-link"]], template: function BugsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bug Reporting System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "List Of Bugs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BugsListComponent_Template_form_submit_11_listener() { return ctx.searchSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Priority Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reporter Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BugsListComponent_option_43_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Status Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BugsListComponent_option_53_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_Template_th_click_68_listener() { return ctx.updateFilter(ctx.filters.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_Template_th_click_71_listener() { return ctx.updateFilter(ctx.filters.priority); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_Template_th_click_74_listener() { return ctx.updateFilter(ctx.filters.reporter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_Template_th_click_77_listener() { return ctx.updateFilter(ctx.filters.createdAt); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Date Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugsListComponent_Template_th_click_80_listener() { return ctx.updateFilter(ctx.filters.status); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tbody", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, BugsListComponent_tr_86_Template, 20, 11, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, BugsListComponent_div_87_Template, 3, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, BugsListComponent_div_88_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reporterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.filterBy != "title")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c2, ctx.ascending, !ctx.ascending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.filterBy != "priority")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c2, ctx.ascending, !ctx.ascending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.filterBy != "reporter")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c2, ctx.ascending, !ctx.ascending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.filterBy != "createdAt")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c2, ctx.ascending, !ctx.ascending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.filterBy != "status")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c2, ctx.ascending, !ctx.ascending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.tableLoading || ctx.bugs.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bugs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableLoading && ctx.bugs.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.bugs == null ? null : ctx.bugs.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.tableLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 100px !important;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  color: #519db0;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%] {\n  width: 100px !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  max-width: 300px;\n  word-wrap: break-word !important;\n}\n.container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n}\n.container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  background: #343a40;\n  border-bottom: 2px solid #919191;\n  margin-bottom: -1px !important;\n  z-index: 4;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.container[_ngcontent-%COMP%]   .page-navigation[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.container[_ngcontent-%COMP%]   .page-navigation[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.2);\n}\n.add-report[_ngcontent-%COMP%], .btn-clear[_ngcontent-%COMP%], .btn-search[_ngcontent-%COMP%], .btn-warning[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  margin: 0 auto;\n  border: none;\n}\n.add-report[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-clear[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.add-report[_ngcontent-%COMP%]:after, .btn-clear[_ngcontent-%COMP%]:after, .btn-search[_ngcontent-%COMP%]:after, .btn-warning[_ngcontent-%COMP%]:after, .btn-danger[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: #36383969;\n  transition: all 0.5s ease-in-out;\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n.add-report[_ngcontent-%COMP%]:hover:after, .btn-clear[_ngcontent-%COMP%]:hover:after, .btn-search[_ngcontent-%COMP%]:hover:after, .btn-warning[_ngcontent-%COMP%]:hover:after, .btn-danger[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  background: #a9a9a9;\n  color: #ffffff;\n}\n.btn-clear[_ngcontent-%COMP%]:after {\n  height: 373%;\n  width: 288%;\n}\n.add-report[_ngcontent-%COMP%] {\n  background-color: #519db0;\n  color: #fff;\n  padding: 10px 22px;\n}\n.add-report[_ngcontent-%COMP%]:after {\n  height: 490%;\n  width: 190%;\n}\n.btn-search[_ngcontent-%COMP%] {\n  background-color: #519db0;\n  color: #fff;\n}\n.btn-search[_ngcontent-%COMP%]:after {\n  height: 373%;\n  width: 248%;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #ff9649cf;\n  color: #fff;\n}\n.btn-warning[_ngcontent-%COMP%]:after {\n  height: 306%;\n  width: 315%;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e55f6c;\n}\n.btn-danger[_ngcontent-%COMP%]:after {\n  height: 306%;\n  width: 233%;\n}\n.form-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: space-around !important;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  z-index: 3;\n  color: #fff;\n  background-color: #519db0;\n  border-color: #519db0;\n}\n#searchTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom !important;\n}\n@media (max-width: 1024px) {\n  #searchTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  #searchTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  #searchTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  #searchTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1Z3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQURaO0FBRVk7RUFDSSxjQUFBO0FBQWhCO0FBRVk7RUFDSSxpQkFBQTtBQUFoQjtBQUdRO0VBQ0ksdUJBQUE7QUFEWjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBT0k7RUFDSSxzQ0FBQTtBQUpSO0FBTUk7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQUtRO0VBQ0ksMkJBQUE7QUFIWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSlI7QUFLUTtFQUNJLDZDQUFBO0FBSFo7QUFRQTs7Ozs7RUFLSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFMSjtBQU1JOzs7OztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFSO0FBRUk7Ozs7O0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMERBQUE7QUFJUjtBQURROzs7OztFQUVJLHlEQUFBO0FBT1o7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU1SO0FBRkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU1SO0FBRkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFLSjtBQUpJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFNUjtBQUZBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBS0o7QUFKSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTVI7QUFGQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUtKO0FBSkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU1SO0FBRkE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFLSjtBQUZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBS0o7QUFESTtFQUNJLGlDQUFBO0FBSVI7QUFEQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQUlOO0VBSE07SUFDSSxVQUFBO0VBS1Y7QUFDRjtBQUZBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VBSU47RUFITTtJQUNJLFdBQUE7RUFLVjtBQUNGIiwiZmlsZSI6ImJ1Z3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTE5ZGIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLWNvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZm9ybSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzkxOTE5MTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZ2UtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGQtcmVwb3J0LFxyXG4uYnRuLWNsZWFyLFxyXG4uYnRuLXNlYXJjaCxcclxuLmJ0bi13YXJuaW5nLFxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM2MzgzOTY5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTglKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTklKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOSUpIHRyYW5zbGF0ZVkoLTI1JSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tY2xlYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2E5YTlhOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNzMlO1xyXG4gICAgICAgIHdpZHRoOiAyODglO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkLXJlcG9ydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZGIwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIycHg7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ5MCU7XHJcbiAgICAgICAgd2lkdGg6IDE5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTlkYjA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGhlaWdodDogMzczJTtcclxuICAgICAgICB3aWR0aDogMjQ4JTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk2NDljZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDYlO1xyXG4gICAgICAgIHdpZHRoOiAzMTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTVmNmM7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwNiU7XHJcbiAgICAgICAgd2lkdGg6IDIzMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLW91dGxpbmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZGIwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTE5ZGIwO1xyXG59XHJcblxyXG4jc2VhcmNoVGFibGV7XHJcbiAgICB0aHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICAgICNzZWFyY2hUYWJsZSB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICNzZWFyY2hUYWJsZSB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BugsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bugs-list',
                templateUrl: './bugs-list.component.html',
                styleUrls: ['./bugs-list.component.scss']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }]; }, null); })();


/***/ }),

/***/ "prPO":
/*!*************************************************!*\
  !*** ./src/app/http-interceptor.interceptor.ts ***!
  \*************************************************/
/*! exports provided: HttpInterceptorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorInterceptor", function() { return HttpInterceptorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HttpInterceptorInterceptor {
    constructor() { }
    intercept(request, next) {
        let tosend = request.clone({ setHeaders: {
                Authorization: 'code.hub.ng5.token'
            } });
        return next.handle(tosend);
    }
}
HttpInterceptorInterceptor.ɵfac = function HttpInterceptorInterceptor_Factory(t) { return new (t || HttpInterceptorInterceptor)(); };
HttpInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorInterceptor, factory: HttpInterceptorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 16, vars: 2, consts: [[1, "text-center"], ["id", "notfound"], [1, "notfound"], [1, "notfound-bg"], [1, "fa", "fa-question-circle", "fa-spin"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get me outta here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#notfound[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50vh;\n  background-color: #fafafa;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 520px;\n  width: 100%;\n  text-align: center;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 86px;\n  font-weight: 700;\n  letter-spacing: 5px;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  background: #519db0;\n  text-align: center;\n  text-transform: uppercase;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  border: none;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  color: #ffffff;\n  z-index: 10;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: #36383969;\n  height: 577%;\n  width: 152%;\n  transition: all 0.5s ease-in-out;\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n  border-radius: 90px;\n  height: 125px;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  box-shadow: 5px 5px 0px 0px #c9c9c9;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: scale(1.3);\n  box-shadow: 5px 5px 0px 0px #c9c9c9;\n  position: relative;\n  z-index: 10;\n}\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  box-shadow: 5px 5px 0px 0px #c9c9c9;\n  position: relative;\n  z-index: 90;\n}\n@media only screen and (max-width: 767px) {\n  .notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 68px !important;\n  }\n  .notfound[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] {\n    width: 287px;\n    margin: auto;\n  }\n  .notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height: 85px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBRFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDBEQUFBO0FBSWhCO0FBRGdCO0VBRUkseURBQUE7QUFHcEI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7RUFDQSxXQUFBO0FBQ1o7QUFBWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVoQjtBQURnQjtFQUVJLG1DQUFBO0FBR3BCO0FBRGdCO0VBR0kscUJBQUE7RUFFQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdwQjtBQURnQjtFQUVJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR3BCO0FBSUE7RUFFUTtJQUNJLDBCQUFBO0VBRlY7RUFJTTtJQUNJLDBCQUFBO0VBRlY7RUFJTTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBRlY7RUFHVTtJQUNJLFlBQUE7RUFEZDtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAubm90Zm91bmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDg2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTE5ZGIwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNjM4Mzk2OTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTc3JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTIlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTk4JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTklKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3Rmb3VuZC1iZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4ICNjOWM5Yzk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4ICNjOWM5Yzk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2M5YzljOTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2M5YzljOTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2M5YzljOTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2M5YzljOTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ub3Rmb3VuZCB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGZvdW5kLWJnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bugs_list_bugs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs-list/bugs-list.component */ "j+6v");
/* harmony import */ var _incomplete_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incomplete.guard */ "FB6M");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-bug/report-bug.component */ "NHIm");








const routes = [
    { path: 'reportbug', component: _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_5__["ReportBugComponent"], canDeactivate: [_incomplete_guard__WEBPACK_IMPORTED_MODULE_3__["IncompleteGuard"]] },
    { path: '', component: _bugs_list_bugs_list_component__WEBPACK_IMPORTED_MODULE_2__["BugsListComponent"] },
    { path: 'reportbug/:id', component: _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_5__["ReportBugComponent"], canDeactivate: [_incomplete_guard__WEBPACK_IMPORTED_MODULE_3__["IncompleteGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map