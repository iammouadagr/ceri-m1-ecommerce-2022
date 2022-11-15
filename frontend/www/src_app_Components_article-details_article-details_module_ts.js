"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Components_article-details_article-details_module_ts"],{

/***/ 6002:
/*!******************************************************************************!*\
  !*** ./src/app/Components/article-details/article-details-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsPageRoutingModule": () => (/* binding */ ArticleDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _article_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-details.page */ 6150);




const routes = [
    {
        path: '',
        component: _article_details_page__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsPage
    }
];
let ArticleDetailsPageRoutingModule = class ArticleDetailsPageRoutingModule {
};
ArticleDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticleDetailsPageRoutingModule);



/***/ }),

/***/ 9770:
/*!**********************************************************************!*\
  !*** ./src/app/Components/article-details/article-details.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsPageModule": () => (/* binding */ ArticleDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _article_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-details-routing.module */ 6002);
/* harmony import */ var _article_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-details.page */ 6150);







let ArticleDetailsPageModule = class ArticleDetailsPageModule {
};
ArticleDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _article_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsPageRoutingModule
        ],
        declarations: [_article_details_page__WEBPACK_IMPORTED_MODULE_1__.ArticleDetailsPage]
    })
], ArticleDetailsPageModule);



/***/ }),

/***/ 6150:
/*!********************************************************************!*\
  !*** ./src/app/Components/article-details/article-details.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsPage": () => (/* binding */ ArticleDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _article_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-details.page.html?ngResource */ 564);
/* harmony import */ var _article_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-details.page.scss?ngResource */ 1076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ArticleDetailsPage = class ArticleDetailsPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.album = {
            titre: '',
            artiste: '',
            musique: [],
            image: '',
            prix: 0
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.album = this.router.getCurrentNavigation().extras.state.album;
            }
        });
    }
    ngOnInit() {
    }
    goAccueil() {
        this.router.navigate(['/home']);
    }
};
ArticleDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ArticleDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-article-details',
        template: _article_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_article_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticleDetailsPage);



/***/ }),

/***/ 1076:
/*!*********************************************************************************!*\
  !*** ./src/app/Components/article-details/article-details.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  width: 450px;\n  height: 450px;\n  border-radius: 5%;\n}\n\n.desc {\n  padding: 5%;\n}\n\n.buy {\n  color: red;\n  --border-color: red;\n}\n\n.buy:hover {\n  color: white;\n  background-color: red;\n}\n\n.fav:hover {\n  color: red;\n}\n\n.fav {\n  position: absolute;\n  top: 30px;\n}\n\n@media (prefers-color-scheme: dark) {\n  .TitreSite {\n    color: yellow;\n  }\n  .Recherche {\n    color: yellow;\n  }\n  .price {\n    text-color: yellow;\n  }\n  .centeredTop1 {\n    color: black;\n  }\n  .centeredTop2 {\n    color: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtZGV0YWlscy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXN0ZXIlMjAyL2Vjb21tL2FwcGwvdmVyc2lvbjEvSkNML3NyYy9hcHAvQ29tcG9uZW50cy9hcnRpY2xlLWRldGFpbHMvYXJ0aWNsZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQUE7RUFFRSxrQkFBQTtFQUNBLFNBQUE7QUNFRjs7QURJQTtFQUVFO0lBQ0ksYUFBQTtFQ0ZKO0VESUE7SUFDSSxhQUFBO0VDRko7RURJQTtJQUNJLGtCQUFBO0VDRko7RURJQTtJQUNJLFlBQUE7RUNGSjtFREtBO0lBQ0ksWUFBQTtFQ0hKO0FBQ0YiLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmRlc2N7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uYnV5e1xuICBjb2xvcjogcmVkO1xuICAtLWJvcmRlci1jb2xvcjogcmVkO1xufVxuLmJ1eTpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxufVxuLmZhdjpob3ZlcntcbiAgY29sb3I6cmVkO1xufVxuLmZhdntcbiBcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gIHRvcDogMzBweDtcbiAgICBcbn1cbi5wcmljZXtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5UaXRyZVNpdGV7XG4gICAgICBjb2xvcjp5ZWxsb3c7XG4gIH1cbiAgLlJlY2hlcmNoZXtcbiAgICAgIGNvbG9yOnllbGxvdztcbiAgfVxuICAucHJpY2V7XG4gICAgICB0ZXh0LWNvbG9yOnllbGxvdztcbiAgfVxuICAuY2VudGVyZWRUb3Axe1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICBcbiAgfVxuICAuY2VudGVyZWRUb3Aye1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICBcbiAgfVxuXG4gXG4gIFxufVxuIiwiLmltYWdlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmRlc2Mge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmJ1eSB7XG4gIGNvbG9yOiByZWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5idXk6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmZhdjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAuVGl0cmVTaXRlIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG4gIC5SZWNoZXJjaGUge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLnByaWNlIHtcbiAgICB0ZXh0LWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLmNlbnRlcmVkVG9wMSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5jZW50ZXJlZFRvcDIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 564:
/*!*********************************************************************************!*\
  !*** ./src/app/Components/article-details/article-details.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-searchbar slot=\"primary\" animated=\"true\"   class=\"Recherche\" style=\"width:40%\"></ion-searchbar>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n      Produits\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n      Catégories\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button>\n        <ion-icon slot=\"end\" name=\"heart\" style=\"color:#FF2E2E\"></ion-icon> Favoris\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n        <ion-icon slot=\"end\" name=\"basket\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button [routerLink]=\"['/formulaire-connexion']\">\n        <ion-icon slot=\"end\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n        <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"TitreSite\" (click)=\"goAccueil()\">2MIStore</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-grid class=\"desc\">\n  <ion-row>\n    <ion-col align=\"center\">\n        <img class=\"image\" [src]=\"album.image\" />\n    </ion-col>\n    <ion-col >\n     \n\n      <ion-item-divider><h2> Morceaux </h2></ion-item-divider>\n      <div>\n        <ion-list [inset]=\"true\" >\n          <ion-item *ngFor=\"songs of album.musique; let songs; let i= index;\">\n            <ion-label>\n            \n              {{songs}}\n\n            </ion-label>\n          </ion-item>\n\n        </ion-list>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-grid style=\"padding-left:8%\">\n      <ion-row>\n        <ion-col align=\"left\" size=\"4\">\n          <h1 > {{album.titre}}</h1>\n          <h4>{{album.artiste}}</h4>\n        </ion-col>\n        <ion-col size=\"2\" >\n          <ion-icon  name=\"heart\"  size=\"large\" fill=\"outline\" class=\"fav\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" align=\"left\">\n          {{album.prix}} &euro; \n        </ion-col>\n        <ion-col size=\"3\">\n          <div align=\"left\">\n            \n            <ion-button size=\"medium\" fill=\"outline\" class=\"buy\">\n              <ion-icon name=\"cart-outline\" style=\"padding-right: 10px;\"></ion-icon>  Ajouter au panier\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <br>\n   \n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Components_article-details_article-details_module_ts.js.map