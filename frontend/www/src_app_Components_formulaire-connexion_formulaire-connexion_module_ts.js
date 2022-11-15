"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Components_formulaire-connexion_formulaire-connexion_module_ts"],{

/***/ 7303:
/*!****************************************************************************************!*\
  !*** ./src/app/Components/formulaire-connexion/formulaire-connexion-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormulaireConnexionPageRoutingModule": () => (/* binding */ FormulaireConnexionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _formulaire_connexion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulaire-connexion.page */ 9466);




const routes = [
    {
        path: '',
        component: _formulaire_connexion_page__WEBPACK_IMPORTED_MODULE_0__.FormulaireConnexionPage
    }
];
let FormulaireConnexionPageRoutingModule = class FormulaireConnexionPageRoutingModule {
};
FormulaireConnexionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormulaireConnexionPageRoutingModule);



/***/ }),

/***/ 4282:
/*!********************************************************************************!*\
  !*** ./src/app/Components/formulaire-connexion/formulaire-connexion.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormulaireConnexionPageModule": () => (/* binding */ FormulaireConnexionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _formulaire_connexion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulaire-connexion-routing.module */ 7303);
/* harmony import */ var _formulaire_connexion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulaire-connexion.page */ 9466);







let FormulaireConnexionPageModule = class FormulaireConnexionPageModule {
};
FormulaireConnexionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _formulaire_connexion_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormulaireConnexionPageRoutingModule
        ],
        declarations: [_formulaire_connexion_page__WEBPACK_IMPORTED_MODULE_1__.FormulaireConnexionPage]
    })
], FormulaireConnexionPageModule);



/***/ }),

/***/ 9466:
/*!******************************************************************************!*\
  !*** ./src/app/Components/formulaire-connexion/formulaire-connexion.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormulaireConnexionPage": () => (/* binding */ FormulaireConnexionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _formulaire_connexion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulaire-connexion.page.html?ngResource */ 4873);
/* harmony import */ var _formulaire_connexion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulaire-connexion.page.scss?ngResource */ 954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let FormulaireConnexionPage = class FormulaireConnexionPage {
    constructor(router) {
        this.router = router;
        this.form = {
            id: "",
            mdp: ""
        };
        this.auth = true;
    }
    ngOnInit() {
    }
    connexion() {
        console.log(" form ", this.form);
        if (this.form.id == "2mi") {
            if (this.form.id != "2mi") {
                this.auth = false;
            }
            else {
                this.auth = true;
                this.router.navigate(['/home']);
            }
        }
        else {
            this.auth = false;
        }
    }
};
FormulaireConnexionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FormulaireConnexionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-formulaire-connexion',
        template: _formulaire_connexion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_formulaire_connexion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormulaireConnexionPage);



/***/ }),

/***/ 954:
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/formulaire-connexion/formulaire-connexion.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".formulaire {\n  width: 40%;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.elementForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.elementForm table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGFpcmUtY29ubmV4aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hc3RlciUyMDIvZWNvbW0vYXBwbC92ZXJzaW9uMS9KQ0wvc3JjL2FwcC9Db21wb25lbnRzL2Zvcm11bGFpcmUtY29ubmV4aW9uL2Zvcm11bGFpcmUtY29ubmV4aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNSTtFQUNJLFdBQUE7QUNKUiIsImZpbGUiOiJmb3JtdWxhaXJlLWNvbm5leGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXVsYWlyZXtcblxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgIFxufVxuXG4uZWxlbWVudEZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCIuZm9ybXVsYWlyZSB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbGVtZW50Rm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVsZW1lbnRGb3JtIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ }),

/***/ 4873:
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/formulaire-connexion/formulaire-connexion.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button   [routerLink]=\"['/home']\">\n        <ion-icon slot=\"end\" name=\"home\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button>\n        <ion-icon slot=\"end\" name=\"heart\" style=\"color:#FF2E2E\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n   \n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n        <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n   \n    <ion-title class=\"TitreSite\">2MIStore</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div class=\"formulaire\">\n    <h2 style=\"padding-bottom: 5%;\"> Connecte-toi </h2>\n    <div class=\"elementForm\" >\n     <table >\n       <tr>\n         <td> <ion-item><ion-label position=\"floating\" style=\"color:grey;\">Identifiant </ion-label><ion-input type=\"text\" [(ngModel)]=\"form.id\" name=\"identifiant\" placeholder=\"Identifiant ou email \"></ion-input> </ion-item></td>\n       </tr>\n       <br/>\n       \n      <tr>  \n        <td> <ion-item><ion-label position=\"floating\" style=\"color:grey;\" >Mot de passe </ion-label><ion-input type=\"password\" [(ngModel)]=\"form.mdp\" name=\"mdp\" placeholder=\"Mot de passe \"></ion-input> </ion-item></td>\n      </tr>\n      <br/>\n      <tr *ngIf=\"!auth\"><td style=\"color:red\"> Identifiant ou mot de passe incorrect</td></tr>\n      <br/>\n      <tr>\n        \n        <td >\n\n          <ion-button  color=\"success\" (click)=\"connexion()\"> \n            Connexion\n          </ion-button>\n        </td>\n      </tr>\n\n     </table>\n    \n    </div>\n    \n   \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Components_formulaire-connexion_formulaire-connexion_module_ts.js.map