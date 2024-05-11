"use strict";
(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["src_app_bymonarch_bymonarch_bymonarch_component_ts"],{

/***/ 5324:
/*!************************************************************************!*\
  !*** ./src/app/bymonarch/bymonarch-block/bymonarch-block.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByMonarchBlockComponent: () => (/* binding */ ByMonarchBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _bymonarch_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bymonarch-block.component.html?ngResource */ 1341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let ByMonarchBlockComponent = class ByMonarchBlockComponent {
  static #_ = this.propDecorators = {
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ByMonarchBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-bymonarch-block',
  template: _bymonarch_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], ByMonarchBlockComponent);


/***/ }),

/***/ 4252:
/*!************************************************************!*\
  !*** ./src/app/bymonarch/bymonarch/bymonarch.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByMonarchComponent: () => (/* binding */ ByMonarchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _bymonarch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bymonarch.component.html?ngResource */ 1168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _bymonarch_block_bymonarch_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bymonarch-block/bymonarch-block.component */ 5324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4040);








let ByMonarchComponent = class ByMonarchComponent {
  constructor(config) {
    this.config = config;
    this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getBlockData('monarchList');
  }
  getBlockData(database) {
    this.images$ = this.config.getCoinTypeByCountryIDSettings(database, 1).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
ByMonarchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-bymonarch-page',
  template: _bymonarch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _bymonarch_block_bymonarch_block_component__WEBPACK_IMPORTED_MODULE_2__.ByMonarchBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe]
})], ByMonarchComponent);


/***/ }),

/***/ 1341:
/*!*************************************************************************************!*\
  !*** ./src/app/bymonarch/bymonarch-block/bymonarch-block.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#/monarchtype/{{ image.type }}-{{ image.id }}\" class=\"col-33\">\n\t<img\n\t\tsrc=\"assets/images/monarch/{{ image.Img }}\"\n\t\twidth=\"250px\"\n\t\theight=\"250px\"\n\t\talt=\"{{ image.Img }}\" />\n\t<div class=\"crown-overlay\">\n\t\t<span\n\t\t\t>{{ image.name }} <br />\n\t\t\t{{ image.title }}</span\n\t\t>\n\t</div>\n</a>\n";

/***/ }),

/***/ 1168:
/*!*************************************************************************!*\
  !*** ./src/app/bymonarch/bymonarch/bymonarch.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"introduction scrollto\">\n\t<div class=\"row clearfix\">\n\t\t<aside id=\"gallery\" class=\"row text-center scrollto clearfix\">\n\t\t\t<a routerLink=\"/britishcoins\"\n\t\t\t\t><span class=\"button\"> By Coin Type </span></a\n\t\t\t>\n\t\t\t@for (image of images$ | async; track image; let i = $index) {\n\t\t\t\t<div>\n\t\t\t\t\t<app-bymonarch-block [image]=\"image\"></app-bymonarch-block>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</aside>\n\t</div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bymonarch_bymonarch_bymonarch_component_ts.js.map