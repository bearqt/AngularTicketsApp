(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _document_form_document_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-form/document-form.component */ "./src/app/document-form/document-form.component.ts");
/* harmony import */ var _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-form/ticket-form.component */ "./src/app/ticket-form/ticket-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _tickets_table_tickets_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tickets-table/tickets-table.component */ "./src/app/tickets-table/tickets-table.component.ts");










function AppComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function AppComponent_mat_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 (status code = 500)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_tickets_table_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tickets-table", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.tickets)("currentDocNumber", ctx_r4.currentDocNumber)("currentTicketNumber", ctx_r4.currentTicketNumber)("currentCheckbox", ctx_r4.currentCheckboxValue);
} }
class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.tickets = [];
        this.docButtonIsDisable = true;
        this.ticketButtonIsDisable = true;
        this.spinnerIsHidden = true;
        this.responseStatusCode = 200;
    }
    ngOnInit() {
    }
    showSpinner() {
        this.spinnerIsHidden = false;
    }
    hideSpinner() {
        this.spinnerIsHidden = true;
    }
    handleError(error) {
        this.responseStatusCode = error.status;
        console.log(this.responseStatusCode);
        this.hideSpinner();
        this.tickets = [];
    }
    loadDataByDocNumber(docNumber) {
        this.currentDocNumber = docNumber;
        this.currentTicketNumber = "";
        this.showSpinner();
        this.dataService.getTicketsByDocNumber(docNumber).subscribe((data) => {
            this.tickets = data;
            this.hideSpinner();
        }, error => {
            console.log("CAUGHT ERROR", error);
            this.handleError(error);
        });
    }
    loadDataByTicketNumber(input) {
        this.currentTicketNumber = input.ticketNumber;
        this.currentDocNumber = "";
        this.currentCheckboxValue = input.allTickets;
        this.showSpinner();
        this.dataService.getTicketsByTicket(input.ticketNumber, input.allTickets).subscribe((data) => {
            this.tickets = data;
            this.hideSpinner();
        });
    }
    blockTicketButton(documentButtonIsSelected) {
        this.ticketButtonIsDisable = true;
        this.docButtonIsDisable = !documentButtonIsSelected;
    }
    blockDocumentButton(ticketButtonIsSelected) {
        this.docButtonIsDisable = true;
        this.ticketButtonIsDisable = !ticketButtonIsSelected;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], decls: 20, vars: 7, consts: [[1, "main-container"], [1, "left-column"], [1, "options"], [1, "right-column"], [1, "forms"], [1, "forms__by-document"], [2, "float", "left", 3, "buttonIsDisable", "searchTicketsEvent", "inputIsSelected"], [1, "forms__by-ticket"], [2, "float", "left", 3, "buttonIsDisable", "searchTicketsByTicketEvent", "inputIsSelected"], [4, "ngIf"], [3, "dataSource", "currentDocNumber", "currentTicketNumber", "currentCheckbox", 4, "ngIf"], [3, "dataSource", "currentDocNumber", "currentTicketNumber", "currentCheckbox"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u043E\u0440\u0442\u0430\u043B \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "document-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchTicketsEvent", function AppComponent_Template_document_form_searchTicketsEvent_12_listener($event) { return ctx.loadDataByDocNumber($event); })("inputIsSelected", function AppComponent_Template_document_form_inputIsSelected_12_listener($event) { return ctx.blockTicketButton($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ticket-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchTicketsByTicketEvent", function AppComponent_Template_ticket_form_searchTicketsByTicketEvent_14_listener($event) { return ctx.loadDataByTicketNumber($event); })("inputIsSelected", function AppComponent_Template_ticket_form_inputIsSelected_14_listener($event) { return ctx.blockDocumentButton($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_mat_label_16_Template, 2, 0, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_mat_label_17_Template, 2, 0, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_mat_label_18_Template, 2, 0, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_app_tickets_table_19_Template, 1, 4, "app-tickets-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonIsDisable", ctx.docButtonIsDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonIsDisable", ctx.ticketButtonIsDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinnerIsHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseStatusCode == 404 && ctx.tickets.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseStatusCode == 0 && ctx.tickets.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseStatusCode == 500 && ctx.tickets.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinnerIsHidden && ctx.tickets.length > 0);
    } }, directives: [_document_form_document_form_component__WEBPACK_IMPORTED_MODULE_2__["DocumentFormComponent"], _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_3__["TicketFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _tickets_table_tickets_table_component__WEBPACK_IMPORTED_MODULE_7__["TicketsTableComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    padding: 15px;\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%] {\r\n    flex: 15% 0 0;\r\n    margin-right: 30px;\r\n\r\n}\r\n\r\n.right-column[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%], .right-column[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.forms__by-ticket[_ngcontent-%COMP%], .forms__by-document[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n.forms[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.mat-spinner[_ngcontent-%COMP%] {\r\n    margin: 100px 35%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2x1bW4ge1xyXG4gICAgZmxleDogMTUlIDAgMDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5yaWdodC1jb2x1bW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxufVxyXG5cclxuLmxlZnQtY29sdW1uLCAucmlnaHQtY29sdW1uIHtcclxuXHJcbn1cclxuXHJcbi5mb3Jtc19fYnktdGlja2V0LCAuZm9ybXNfX2J5LWRvY3VtZW50IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mb3JtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiAxMDBweCAzNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _document_form_document_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-form/document-form.component */ "./src/app/document-form/document-form.component.ts");
/* harmony import */ var _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ticket-form/ticket-form.component */ "./src/app/ticket-form/ticket-form.component.ts");
/* harmony import */ var _tickets_table_tickets_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tickets-table/tickets-table.component */ "./src/app/tickets-table/tickets-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _document_form_document_form_component__WEBPACK_IMPORTED_MODULE_11__["DocumentFormComponent"],
        _tickets_table_tickets_table_component__WEBPACK_IMPORTED_MODULE_13__["TicketsTableComponent"], _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_12__["TicketFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _document_form_document_form_component__WEBPACK_IMPORTED_MODULE_11__["DocumentFormComponent"],
                    _tickets_table_tickets_table_component__WEBPACK_IMPORTED_MODULE_13__["TicketsTableComponent"], _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_12__["TicketFormComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getTicketsByDocNumber(documentNumber) {
        console.log(this.url);
        return this.http.post(this.url + "/by_doc_number", {
            documentNumber
        });
    }
    getTicketsByTicket(ticketNumber, displayAllTickets = false) {
        return this.http.post(this.url + "/by_ticket_number", {
            ticketNumber,
            displayAllTickets
        });
    }
    getAirlineCompanies() {
        return this.http.get(this.url + "/airline_companies");
    }
    requestCsvByDocNumber(docNumber, companyCode) {
        const options = {
            responseType: 'arraybuffer'
        };
        return this.http.post(this.url + "/xlsx_by_doc", {
            docNumber,
            companyCode
        }, options);
    }
    requestCsvByTicketNumber(ticketNumber, companyCode, allTickets) {
        const options = {
            responseType: 'arraybuffer'
        };
        return this.http.post(this.url + "/xlsx_by_ticket", {
            ticketNumber,
            companyCode,
            allTickets
        }, options);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/document-form/document-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/document-form/document-form.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormComponent", function() { return DocumentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





const _c0 = ["documentInput"];
class DocumentFormComponent {
    constructor() {
        this.searchTicketsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputIsSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    searchTickets(docNumber) {
        this.searchTicketsEvent.emit(docNumber);
    }
    ngOnChanges(changes) {
        // if other input is selected
        if (this.buttonIsDisable && this.documentInput) {
            this.documentInput.nativeElement.value = '';
            this.inputChangeHandler();
        }
    }
    inputChangeHandler() {
        this.inputIsSelected.emit(this.documentInput.nativeElement.value != '');
    }
    ngOnInit() {
    }
}
DocumentFormComponent.ɵfac = function DocumentFormComponent_Factory(t) { return new (t || DocumentFormComponent)(); };
DocumentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentFormComponent, selectors: [["document-form"]], viewQuery: function DocumentFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.documentInput = _t.first);
    } }, inputs: { buttonIsDisable: "buttonIsDisable" }, outputs: { searchTicketsEvent: "searchTicketsEvent", inputIsSelected: "inputIsSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 1, consts: [["matInput", "", "type", "text", "id", "document-input", 3, "input"], ["documentInput", ""], ["mat-raised-button", "", "color", "primary", 1, "search-btn", 2, "margin-top", "59px", 3, "disabled", "click"]], template: function DocumentFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DocumentFormComponent_Template_input_input_5_listener() { return ctx.inputChangeHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentFormComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); ctx.searchTickets(_r0.value); _r0.value = ""; return ctx.inputChangeHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u0430\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buttonIsDisable);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50LWZvcm0vZG9jdW1lbnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'document-form',
                templateUrl: './document-form.component.html',
                styleUrls: ['./document-form.component.css']
            }]
    }], function () { return []; }, { searchTicketsEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buttonIsDisable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputIsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], documentInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['documentInput']
        }] }); })();


/***/ }),

/***/ "./src/app/ticket-form/ticket-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ticket-form/ticket-form.component.ts ***!
  \******************************************************/
/*! exports provided: MyErrorStateMatcher, TicketFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFormComponent", function() { return TicketFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = ["ticketInput"];
function TicketFormComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u043E\u043C\u0435\u0440 \u0431\u0438\u043B\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 13 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: \u0446\u0438\u0444\u0440\u044B \u0438 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class TicketFormComponent {
    constructor() {
        this.searchTicketsByTicketEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputIsSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ticketFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9]{13}")]);
        this.matcher = new MyErrorStateMatcher();
    }
    callEvent(ticketNumber, allTickets) {
        this.searchTicketsByTicketEvent.emit({ ticketNumber, allTickets });
    }
    inputChangeHandler() {
        this.inputIsSelected.emit(this.ticketInput.nativeElement.value != '');
    }
    ngOnChanges(changes) {
        if (this.buttonIsDisable) {
            this.ticketInput.nativeElement.value = '';
            this.inputChangeHandler();
        }
    }
    ngOnInit() {
    }
}
TicketFormComponent.ɵfac = function TicketFormComponent_Factory(t) { return new (t || TicketFormComponent)(); };
TicketFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketFormComponent, selectors: [["ticket-form"]], viewQuery: function TicketFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ticketInput = _t.first);
    } }, inputs: { buttonIsDisable: "buttonIsDisable" }, outputs: { searchTicketsByTicketEvent: "searchTicketsByTicketEvent", inputIsSelected: "inputIsSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 4, consts: [["matInput", "", "type", "text", "id", "ticket-input", 3, "formControl", "errorStateMatcher", "input"], ["ticketInput", ""], [4, "ngIf"], ["color", "primary"], ["checkbox", ""], ["mat-raised-button", "", "color", "primary", 1, "search-btn", 2, "margin-top", "10px", 3, "disabled", "click"]], template: function TicketFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0431\u0438\u043B\u0435\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u0431\u0438\u043B\u0435\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TicketFormComponent_Template_input_input_5_listener() { return ctx.inputChangeHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketFormComponent_mat_error_7_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0441\u0435 \u0431\u0438\u043B\u0435\u0442\u044B \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFormComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); ctx.callEvent(_r0.value, _r2.checked); _r0.value = ""; return ctx.inputChangeHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u0430\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ticketFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketFormControl.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buttonIsDisable || ctx.ticketFormControl.hasError("pattern"));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: ["button[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0LWZvcm0vdGlja2V0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC1mb3JtL3RpY2tldC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ticket-form',
                templateUrl: './ticket-form.component.html',
                styleUrls: ['./ticket-form.component.css']
            }]
    }], function () { return []; }, { searchTicketsByTicketEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buttonIsDisable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputIsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ticketInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ticketInput']
        }] }); })();


/***/ }),

/***/ "./src/app/tickets-table/tickets-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tickets-table/tickets-table.component.ts ***!
  \**********************************************************/
/*! exports provided: AirlineCompany, TicketsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineCompany", function() { return AirlineCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsTableComponent", function() { return TicketsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function TicketsTableComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r27.iataCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r27.name + "(" + company_r27.iataCode + ")", " ");
} }
function TicketsTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.passengerDocumentNumber, " ");
} }
function TicketsTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0424\u0430\u043C\u0438\u043B\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.surname, " ");
} }
function TicketsTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u043C\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.name, " ");
} }
function TicketsTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.sender, " ");
} }
function TicketsTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0442\u0430\u0442\u0443\u0441 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.validationStatus, " ");
} }
function TicketsTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.time, " ");
} }
function TicketsTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.type, " ");
} }
function TicketsTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u043E\u043C\u0435\u0440 \u0431\u0438\u043B\u0435\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.ticketNumber, " ");
} }
function TicketsTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.departDatetime, " ");
} }
function TicketsTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043E\u0434 \u0410\u041A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.airlineCode, " ");
} }
function TicketsTableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u043E\u0440\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.cityFromName, " ");
} }
function TicketsTableComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u043E\u0440\u043E\u0434 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketsTableComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.cityToName, " ");
} }
function TicketsTableComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function TicketsTableComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
class AirlineCompany {
    constructor(name, iataCode) {
        this.name = name;
        this.iataCode = iataCode;
    }
}
class TicketsTableComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ["passengerDocNumber", "surname", "name",
            "sender", "validationStatus", "time", "type", "ticketNumber",
            "departDatetime", "airlineCode", "cityFromName", "cityToName"
        ];
        this.airlineCompanies = [];
        // airlineCompanies : AirlineCompany[] = [
        //   {name: "АО \"Авиакомпания \"Азимут\"\"", code: "A4"},
        //   {name: "АО \"Авиакомпания \"Икар\"\"", code: "EO"},
        //   {name: "АО \"Авиакомпания \"Россия\"\"", code: "FV"},
        //   {name: "АО \"Авиакомпания \"Сибирь\"\"", code: "S7"},
        //   {name: "АО \"Авиакомпания \"Якутия\"\"", code: "R3"},
        //   {name: "АО \"Авиакомпания АЛРОСА\"", code: "6R"},
        //   {name: "АО \"АК НордСтар\"", code: "Y7"},
        //   {name: "АО \"АК Смартавиа\"", code: "5N"},
        //   {name: "АО \"ИрАэро\"", code: "IO"},
        //   {name: "АО \"Ред Вингс\"", code: "WZ"},
        //   {name: "ОАО АК \"Уральские авиалинии\"", code: "U6"},
        //   {name: "ООО \"Северный Ветер\"", code: "N4"},
        //   {name: "ПАО \"Авиакомпания \"Ютэйр\"\"", code: "UT"},
        //   {name: "ПАО \"Аэрофлот\"", code: "SU"},
        //   {name: "АО \"Авиакомпания «Ижавиа»\"", code: "I8"},
        // ];
        this.selectedCompany = "A4";
    }
    downloadCsv(companyCode) {
        if (this.currentDocNumber != "") {
            this.dataService.requestCsvByDocNumber(this.currentDocNumber, companyCode).subscribe(data => {
                this.saveFile(data);
            });
        }
        else {
            this.dataService.requestCsvByTicketNumber(this.currentTicketNumber, companyCode, this.currentCheckbox).subscribe(data => {
                this.saveFile(data);
            });
        }
    }
    saveFile(file) {
        const blob = new Blob([file], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const url = window.URL.createObjectURL(blob);
        // create hidden dom element (so it works in all browsers)
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        // create file, attach to hidden element and open hidden element
        a.href = url;
        a.download = "report";
        a.click();
    }
    ngOnInit() {
        this.dataService.getAirlineCompanies().subscribe((data) => {
            this.airlineCompanies = data;
            this.selectedCompany = this.airlineCompanies[0].iataCode;
        });
    }
}
TicketsTableComponent.ɵfac = function TicketsTableComponent_Factory(t) { return new (t || TicketsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TicketsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketsTableComponent, selectors: [["app-tickets-table"]], inputs: { dataSource: "dataSource", currentDocNumber: "currentDocNumber", currentTicketNumber: "currentTicketNumber", currentCheckbox: "currentCheckbox" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], decls: 46, vars: 5, consts: [["mat-raised-button", "", "color", "primary", 2, "margin-right", "50px", 3, "click"], [2, "margin-right", "20px"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "passengerDocNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "surname"], ["matColumnDef", "name"], ["matColumnDef", "sender"], ["matColumnDef", "validationStatus"], ["matColumnDef", "time"], ["matColumnDef", "type"], ["matColumnDef", "ticketNumber"], ["matColumnDef", "departDatetime"], ["matColumnDef", "airlineCode"], ["matColumnDef", "cityFromName"], ["matColumnDef", "cityToName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TicketsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketsTableComponent_Template_button_click_0_listener() { return ctx.downloadCsv(ctx.selectedCompany); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u043B\u044F \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TicketsTableComponent_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedCompany = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketsTableComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TicketsTableComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TicketsTableComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketsTableComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TicketsTableComponent_td_13_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicketsTableComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TicketsTableComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TicketsTableComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TicketsTableComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TicketsTableComponent_th_21_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TicketsTableComponent_td_22_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TicketsTableComponent_th_24_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TicketsTableComponent_td_25_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TicketsTableComponent_th_27_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TicketsTableComponent_td_28_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TicketsTableComponent_th_30_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TicketsTableComponent_td_31_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TicketsTableComponent_th_33_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TicketsTableComponent_td_34_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TicketsTableComponent_th_36_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TicketsTableComponent_td_37_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TicketsTableComponent_th_39_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TicketsTableComponent_td_40_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TicketsTableComponent_th_42_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TicketsTableComponent_td_43_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TicketsTableComponent_tr_44_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TicketsTableComponent_tr_45_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.airlineCompanies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n\r\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0cy10YWJsZS90aWNrZXRzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldHMtdGFibGUvdGlja2V0cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tickets-table',
                templateUrl: './tickets-table.component.html',
                styleUrls: ['./tickets-table.component.css'],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentDocNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentTicketNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
    production: false,
    apiUrl: window["env"]["apiUrl"] || "default",
    debug: window["env"]["debug"] || false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
const platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\feikf\RiderProjects\AngularTicketsApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map