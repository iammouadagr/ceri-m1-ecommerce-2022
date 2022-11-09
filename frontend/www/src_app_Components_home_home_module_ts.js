"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Components_home_home_module_ts"],{

/***/ 7948:
/*!********************************************************!*\
  !*** ./src/app/Components/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7175);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 348:
/*!************************************************!*\
  !*** ./src/app/Components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7948);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 7175);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7175:
/*!**********************************************!*\
  !*** ./src/app/Components/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 856);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 6221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);






let HomePage = class HomePage {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.compteur = 4;
        this.valeurBestSeller = 10;
        this.mouseOn = false;
        this.indexItemMouseOnOff = -1;
        this.top = [
            {
                titre: ' Mr. Morale & the Big Steppers ',
                artiste: 'Kendrick Lamar',
                musique: ['Die Hard', 'Silent Hill', 'Crown', 'N95'],
                // eslint-disable-next-line max-len
                image: 'https://media.pitchfork.com/photos/627c1023d3c744a67a846260/16:9/w_1280,c_limit/Kendrick-Lamar-Mr-Morale-And-The-Big-Steppers.jpg',
                prix: 36
            }
        ];
        this.album = [
            {
                titre: 'Will of the People',
                artiste: 'MUSE',
                musique: ['will of the people', 'Compliance', 'Verona', 'Euphoria'],
                image: 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
                prix: 20
            },
            {
                titre: 'Mini World',
                artiste: 'Indila',
                musique: ['Derniere danse', 'Tourner dans le vide', 'Run run', 'S.O.S'],
                image: 'https://m.media-amazon.com/images/I/711eVQjNxzL._SL1400_.jpg',
                prix: 30
            },
            {
                titre: 'Born Pink',
                artiste: 'Black Pink',
                musique: ['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
                image: 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
                prix: 40
            },
            {
                titre: 'Map of the Soul: 7',
                artiste: 'BTS',
                musique: ['Filter', 'Boy With Luv', 'Black Swan', 'Intro : Persona'],
                image: 'https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg',
                prix: 35
            },
            {
                titre: 'Future Nostalgia',
                artiste: 'Dua Lipa',
                musique: ['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
                image: 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
                prix: 10
            },
            {
                titre: 'Nonante-Cinq',
                artiste: 'Angèle',
                musique: ['Bruxelle je t\'aime', 'Libre', 'Solo', 'Démons'],
                image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
                prix: 25
            },
            {
                titre: '30',
                artiste: 'Adèle',
                musique: ['Easy On Me', 'My Little Love', 'Oh My God', 'Can I Get It'],
                image: 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
                prix: 45
            },
            {
                titre: 'Future Nostalgia',
                artiste: 'Dua Lipa',
                musique: ['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
                image: 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
                prix: 10
            },
            {
                titre: 'Nonante-Cinq',
                artiste: 'Angèle',
                musique: ['Bruxelle je t\'aime', 'Libre', 'Solo', 'Démons'],
                image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
                prix: 25
            },
            {
                titre: '30',
                artiste: 'Adèle',
                musique: ['Easy On Me', 'My Little Love', 'Oh My God', 'Can I Get It'],
                image: 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
                prix: 45
            },
            {
                titre: 'Future Nostalgia',
                artiste: 'Dua Lipa',
                musique: ['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
                image: 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
                prix: 10
            },
            {
                titre: 'Nonante-Cinq',
                artiste: 'Angèle',
                musique: ['Bruxelle je t\'aime', 'Libre', 'Solo', 'Démons'],
                image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
                prix: 25
            },
            {
                titre: '30',
                artiste: 'Adèle',
                musique: ['Easy On Me', 'My Little Love', 'Oh My God', 'Can I Get It'],
                image: 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
                prix: 45
            },
            {
                titre: 'Will of the People',
                artiste: 'MUSE',
                musique: ['will of the people', 'Compliance', 'Verona', 'Euphoria'],
                image: 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
                prix: 20
            },
            {
                titre: 'Mr. Morale & the Big Steppers',
                artiste: 'Kendrick Lamar',
                musique: ['N95', 'Die Hard', 'Crown', 'Silent Hill'],
                image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png',
                prix: 30
            },
            {
                titre: 'Born Pink',
                artiste: 'Black Pink',
                musique: ['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
                image: 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
                prix: 40
            },
            {
                titre: 'Will of the People',
                artiste: 'MUSE',
                musique: ['will of the people', 'Compliance', 'Verona', 'Euphoria'],
                image: 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
                prix: 20
            },
            {
                titre: 'Mr. Morale & the Big Steppers',
                artiste: 'Kendrick Lamar',
                musique: ['N95', 'Die Hard', 'Crown', 'Silent Hill'],
                image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png',
                prix: 30
            },
            {
                titre: 'Born Pink',
                artiste: 'Black Pink',
                musique: ['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
                image: 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
                prix: 40
            },
        ];
        this.albumItems$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)('album'));
    }
    //   al=[{
    //     id_album : 2,
    //     titre_album : "Born Pink",
    //     artiste :2,
    //     lien_image : "http" ,
    //     annee :2022,
    //     prix : 34,
    //     nom : "Black Pink",
    //   },
    //   {
    //     id_album : 3,
    //     titre_album : "SOUL",
    //     artiste :3,
    //     lien_image : "http" ,
    //     annee :2022,
    //     prix : 10,
    //     nom : "JUL",
    //   }
    // ]
    ngOnInit() {
        //this.store.dispatch(new AddAlbumsAction(this.al));
    }
    // addAbl(){
    //   this.store.dispatch(new AddAlbumAction({
    //     id_album : 4,
    //     titre_album : "PARIS",
    //     artiste :4,
    //     lien_image : "http" ,
    //     annee :2022,
    //     prix : 15,
    //     nom : "NINHO",
    //   }));
    // }
    // montrer le prix quand la souris est sur la card
    showPrice(index) {
        this.mouseOn = true;
        this.indexItemMouseOnOff = index;
    }
    // cacher le prix quand la souris est hors  card
    hidePrice() {
        this.mouseOn = false;
    }
    // aller à la page de connexion
    navigate() {
        this.router.navigate(['/formulaire-connexion']);
    }
    seeDetails(songs) {
        let navigationExtras = {
            state: {
                album: songs
            }
        };
        this.router.navigate(['/article-details'], navigationExtras);
    }
    goAccueil() {
        this.router.navigate(['/home']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6221:
/*!***********************************************************!*\
  !*** ./src/app/Components/home/home.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@media (prefers-color-scheme: dark) {\n  .TitreSite {\n    color: yellow;\n  }\n  .Recherche {\n    color: yellow;\n  }\n  .price {\n    text-color: yellow;\n  }\n  .centeredTop1 {\n    color: black;\n  }\n  .centeredTop2 {\n    color: black;\n  }\n}\n.content {\n  padding: 3%;\n  align-items: center;\n}\n.poster {\n  height: 250px;\n  width: 250px;\n}\n.poster:hover {\n  border-radius: 5%;\n  transform: scale(1.1);\n  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px grey;\n}\n.top {\n  height: 300px;\n  width: 100%;\n}\n.top .TopPoster {\n  opacity: 90%;\n  height: 70%;\n  width: 70%;\n  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px grey;\n}\n.top .centeredTop1 {\n  border-radius: 5%;\n  position: absolute;\n  top: 30%;\n  left: 42%;\n  transform: translate(-50%, -50%);\n  background-color: #CECECE;\n  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px grey;\n}\n.top .centeredTop2 {\n  border-radius: 5%;\n  position: absolute;\n  top: 48%;\n  right: 25%;\n  transform: translate(-50%, -50%);\n  background-color: #CECECE;\n  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px grey;\n}\n.buy {\n  color: red;\n  --border-color: red;\n}\n.buy:hover {\n  color: white;\n  background-color: red;\n}\n.seemore {\n  color: grey;\n  --border-color: grey;\n}\n.seemore:hover {\n  color: white;\n  background-color: grey;\n}\n.fav:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFzdGVyJTIwMi9lY29tbS9hcHBsL3ZlcnNpb24xL0pDTC9zcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksYUFBQTtFQ0FOO0VERUU7SUFDSSxhQUFBO0VDQU47RURFRTtJQUNJLGtCQUFBO0VDQU47RURFRTtJQUNJLFlBQUE7RUNBTjtFREdFO0lBQ0ksWUFBQTtFQ0ROO0FBQ0Y7QURRQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ05KO0FEYUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBRUEsNkRBQUE7QUNYSjtBRGlCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDZEo7QURxQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2REFBQTtBQ25CUjtBRHNCSTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtBQ3JCUjtBRHdCSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtBQ3RCUjtBRDJCQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQ3hCSjtBRDBCQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ3ZCSjtBRDJCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ3hCSjtBRDBCQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ3ZCSjtBRDJCQTtFQUNJLFVBQUE7QUN4QkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgICAuVGl0cmVTaXRle1xuICAgICAgICBjb2xvcjp5ZWxsb3c7XG4gICAgfVxuICAgIC5SZWNoZXJjaGV7XG4gICAgICAgIGNvbG9yOnllbGxvdztcbiAgICB9XG4gICAgLnByaWNle1xuICAgICAgICB0ZXh0LWNvbG9yOnllbGxvdztcbiAgICB9XG4gICAgLmNlbnRlcmVkVG9wMXtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgIFxuICAgIH1cbiAgICAuY2VudGVyZWRUb3Aye1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgXG4gICAgfVxuXG4gICBcbiAgICBcbn1cblxuLmNvbnRlbnR7XG4gICAgcGFkZGluZzozJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zdGVye1xuICAgIGhlaWdodDoyNTBweDtcbiAgICB3aWR0aDoyNTBweDtcbn1cblxuaW9uLWdyaWQge1xuLy8gICAgcGFkZGluZy1sZWZ0OjclO1xufVxuXG4ucG9zdGVyOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICBcbiAgICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsMCwwLDAuMTEpLFxuICAgICAgMCAyNHB4IDQ2cHggZ3JleTtcbn1cblxuXG5cbi50b3B7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaW1nVG9we1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIH1cbiAgICAuaW1nVG9wMntcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogNSU7XG4gICAgfVxuICAgIC5Ub3BQb3N0ZXJ7XG4gICAgICAgIG9wYWNpdHk6IDkwJTtcbiAgICAgICAgaGVpZ2h0OjcwJTtcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsMCwwLDAuMTEpLFxuICAgICAgICAgIDAgMjRweCA0NnB4IGdyZXk7XG4gICAgfVxuICAgIC5jZW50ZXJlZFRvcDEge1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzAlO1xuICAgICAgICBsZWZ0OiA0MiU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VDRUNFO1xuICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsMCwwLDAuMTEpLFxuICAgICAgICAwIDI0cHggNDZweCBncmV5O1xuICAgIH1cbiAgICAuY2VudGVyZWRUb3AyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA0OCU7XG4gICAgICAgIHJpZ2h0OiAyNSU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VDRUNFO1xuICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsMCwwLDAuMTEpLFxuICAgICAgICAwIDI0cHggNDZweCBncmV5O1xuICAgIH1cbn1cblxuLmJ1eXtcbiAgICBjb2xvcjogcmVkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4uYnV5OmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgXG59XG5cbi5zZWVtb3Jle1xuICAgIGNvbG9yOiBncmV5O1xuICAgIC0tYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuLnNlZW1vcmU6aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgXG59XG5cbi5mYXY6aG92ZXJ7XG4gICAgY29sb3I6cmVkO1xufSIsIkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLlRpdHJlU2l0ZSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuICAuUmVjaGVyY2hlIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG4gIC5wcmljZSB7XG4gICAgdGV4dC1jb2xvcjogeWVsbG93O1xuICB9XG4gIC5jZW50ZXJlZFRvcDEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuY2VudGVyZWRUb3AyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMyU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3N0ZXIge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5wb3N0ZXI6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDI0cHggNDZweCBncmV5O1xufVxuXG4udG9wIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9wIC5Ub3BQb3N0ZXIge1xuICBvcGFjaXR5OiA5MCU7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBib3gtc2hhZG93OiAwIDI0cHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDI0cHggNDZweCBncmV5O1xufVxuLnRvcCAuY2VudGVyZWRUb3AxIHtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDQyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7XG4gIGJveC1zaGFkb3c6IDAgMjRweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgMjRweCA0NnB4IGdyZXk7XG59XG4udG9wIC5jZW50ZXJlZFRvcDIge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4JTtcbiAgcmlnaHQ6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7XG4gIGJveC1zaGFkb3c6IDAgMjRweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgMjRweCA0NnB4IGdyZXk7XG59XG5cbi5idXkge1xuICBjb2xvcjogcmVkO1xuICAtLWJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uYnV5OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zZWVtb3JlIHtcbiAgY29sb3I6IGdyZXk7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuXG4uc2VlbW9yZTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmZhdjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";

/***/ }),

/***/ 856:
/*!***********************************************************!*\
  !*** ./src/app/Components/home/home.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-searchbar slot=\"primary\" animated=\"true\"   class=\"Recherche\" style=\"width:40%\"></ion-searchbar>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n      Produits\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n      Catégories\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button>\n        <ion-icon slot=\"end\" name=\"heart\" style=\"color:#FF2E2E\"></ion-icon> Favoris\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n        <ion-icon slot=\"end\" name=\"basket\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button [routerLink]=\"['/formulaire-connexion']\">\n        <ion-icon slot=\"end\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" >\n      <ion-button >\n        <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"TitreSite\" (click)=\"goAccueil()\">2MIStore</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"content\" style=\" padding-top: 2%; \">\n  <!-- <div style=\"padding: 2%; \">\n    <ion-searchbar animated=\"true\" placeholder=\"Recherche\"  class=\"Recherche\"></ion-searchbar>\n  </div> -->\n\n\n  <!-- DIVIDER NOUVEAUTÉ  -->\n  <div align=\"center\">\n    <ion-item-divider style=\" padding-top: 0%; width: 60%;  \">\n      <div style=\"width: 100%; text-align: center;\"><h1>NOUVEAUTÉS</h1></div>\n    </ion-item-divider>\n  </div>\n\n  <!-- POSTE IMAGE NOUVEAUTÉ -->\n    <div class=\"top\"  style=\" padding-top: 5%; \">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div  class=\"imgTop\">\n              <img  [src]=\"top[0].image\" class=\"TopPoster\"/>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div  class=\"imgTop2\" align=\"right\">\n              <img  [src]=\"top[0].image\" class=\"TopPoster\"/>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"centeredTop1\">\n        <ion-grid >\n          <ion-row >\n            <ion-col style=\"font-weight: bold;\"> {{top[0].titre}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{top[0].artiste}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{top[0].prix}} &euro;\n            </ion-col>\n            <ion-col>\n              <div align=\"right\">\n                <ion-button size=\"small\" fill=\"outline\" class=\"buy\">\n                  Acheter\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n      </div>\n      <div class=\"centeredTop2\">\n        <ion-grid >\n          <ion-row >\n            <ion-col style=\"font-weight: bold;\"> {{top[0].titre}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{top[0].artiste}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{top[0].prix}} &euro;\n            </ion-col>\n            <ion-col>\n              <div align=\"right\">\n                <ion-button size=\"small\" fill=\"outline\" class=\"buy\">\n                  Acheter\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n      </div>\n    </div>\n\n    <!-- DIVIDER BEST SELLER  -->\n    <ion-item-divider style=\" padding-top: 5%; \">\n      <div style=\"width: 100%; text-align: center;\"><h1>BEST SELLER</h1></div>\n    </ion-item-divider>\n\n\n\n    <!-- LISTE DES 10 MEILLEURS ALBUMS VENDUS -->\n    <div style=\" padding-top: 5%; \" >\n      <ion-grid >\n        <ion-row >\n        <ion-col *ngFor=\"songs of album; let songs; let i= index;  \" [fixed]=\"true\" size=\"auto\"  >\n          <!-- <ion-card  size=\"auto\" (mouseover)='showPrice(i)' (mouseout)=\"hidePrice()\"> -->\n\n            <div *ngIf=\"i < valeurBestSeller\"  style=\"padding:3%\" >\n              <div>\n                <img  [src]=\"songs.image\" class=\"poster\" (click)=\"seeDetails(songs)\"/>\n              </div>\n\n              <ion-grid >\n                <ion-row >\n                  <ion-col  size=\"10\" style=\"height:5px; font-weight:bold; font-size:110%\" >\n                  <p class=\"ion-align-items-end\"> {{songs.titre}}<p>\n                  </ion-col>\n                  <ion-col  size=\"2\">\n                    <ion-icon  name=\"heart\"  size=\"large\" fill=\"outline\" class=\"fav\"></ion-icon>\n                  </ion-col>\n\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"auto\">\n                    {{songs.artiste}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"auto\" >\n                    {{songs.prix}} &euro;\n                  </ion-col>\n                  <ion-col >\n                    <div align=\"right\">\n                      <ion-button size=\"small\" fill=\"outline\" class=\"buy\">\n                        Acheter\n                      </ion-button>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n        </ion-col>\n\n        </ion-row>\n      </ion-grid>\n      <div align=\"center\">\n        <ion-button  fill=\"outline\" class=\"seemore\">\n          Voir tout\n        </ion-button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n <!-- <ion-card-header> -->\n              <!-- <ion-grid> -->\n                <!-- <ion-row>\n                <ion-col size=\"10\" >\n                  <ion-card-title >{{songs.titre}}</ion-card-title>\n                </ion-col>\n                <ion-col size=\"2\">\n\n                  <ion-icon  name=\"heart\"  size=\"large\" fill=\"outline\"></ion-icon>\n\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n              <ion-card-title>{{songs.titre}}</ion-card-title>\n              <ion-grid>\n                <ion-row>\n                <ion-col size=\"10\"  >\n                  <ion-card-subtitle>{{songs.artiste}}</ion-card-subtitle>\n                </ion-col>\n                <ion-col size=\"2\" *ngIf=\"mouseOn==true && i==indexItemMouseOnOff\" class=\"price\">\n                  {{songs.prix}} &euro;\n                </ion-col>\n              </ion-row>\n              </ion-grid> -->\n\n            <!-- </ion-card-header> -->\n          <!-- </ion-card> -->\n\n\n\n <!-- <h4>Testing NgRx</h4>\n    <ul>\n      <li *ngFor=\"let al of albumItems$ | async\">\n        {{al.titre_album}}\n      </li>\n    </ul>\n    <ion-button (click)=\"addAbl()\">Add</ion-button>\n\n    <br/>\n    <br/>\n    <br/> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Components_home_home_module_ts.js.map