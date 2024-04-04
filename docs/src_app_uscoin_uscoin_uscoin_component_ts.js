"use strict";
(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["src_app_uscoin_uscoin_uscoin_component_ts"],{

/***/ 1532:
/*!*************************************************************!*\
  !*** ./src/app/uscoin/image-block/image-block.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlockComponent: () => (/* binding */ ImageBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-block.component.html?ngResource */ 9701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let ImageBlockComponent = class ImageBlockComponent {
  static #_ = this.propDecorators = {
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ImageBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-image-block',
  template: _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], ImageBlockComponent);


/***/ }),

/***/ 2615:
/*!***************************************************!*\
  !*** ./src/app/uscoin/uscoin/uscoin.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usCoinComponent: () => (/* binding */ usCoinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _uscoin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uscoin.component.html?ngResource */ 5496);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-block/image-block.component */ 1532);







let usCoinComponent = class usCoinComponent {
  constructor(config) {
    this.config = config;
    this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getBlockData('cointypeList');
  }
  getBlockData(database) {
    this.images$ = this.config.getCoinTypeByCountryIDSettings(database, 2).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
usCoinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-britishcoin-page',
  template: _uscoin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__.ImageBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
})], usCoinComponent);


/***/ }),

/***/ 9701:
/*!**************************************************************************!*\
  !*** ./src/app/uscoin/image-block/image-block.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#/cointype/{{ image.id }}\" class=\"col-3\">\n\t<img\n\t\tsrc=\"assets/images/coins/type/{{ image.Img }}\"\n\t\twidth=\"250px\"\n\t\theight=\"250px\"\n\t\talt=\"{{ image.Img }}\" />\n\t<div class=\"crown-overlay\">\n\t\t<span>{{ image.title }}</span>\n\t</div>\n</a>\n";

/***/ }),

/***/ 5496:
/*!****************************************************************!*\
  !*** ./src/app/uscoin/uscoin/uscoin.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"scrollto clearfix\">\n\t<div class=\"row clearfix\">\n\t\t<aside id=\"gallery\" class=\"row text-center scrollto clearfix\">\n\t\t\t@for (image of images$ | async; track image; let i = $index) {\n\t\t\t\t<div>\n\t\t\t\t\t<app-image-block [image]=\"image\"></app-image-block>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</aside>\n\t</div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_uscoin_uscoin_uscoin_component_ts.js.map