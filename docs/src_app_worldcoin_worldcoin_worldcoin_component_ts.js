"use strict";
(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["src_app_worldcoin_worldcoin_worldcoin_component_ts"],{

/***/ 1200:
/*!****************************************************************!*\
  !*** ./src/app/worldcoin/image-block/image-block.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlockComponent: () => (/* binding */ ImageBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-block.component.html?ngResource */ 2080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let ImageBlockComponent = class ImageBlockComponent {
  static #_ = this.propDecorators = {
    country: [{
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

/***/ 5344:
/*!************************************************************!*\
  !*** ./src/app/worldcoin/worldcoin/worldcoin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldCoinComponent: () => (/* binding */ WorldCoinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _worldcoin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldcoin.component.html?ngResource */ 744);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-block/image-block.component */ 1200);







let WorldCoinComponent = class WorldCoinComponent {
  constructor(config) {
    this.config = config;
    this.Country$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getBlockData('countrytypeList');
  }
  getBlockData(database) {
    this.Country$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
WorldCoinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-worldcoin-page',
  template: _worldcoin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__.ImageBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
})], WorldCoinComponent);


/***/ }),

/***/ 2080:
/*!*****************************************************************************!*\
  !*** ./src/app/worldcoin/image-block/image-block.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#/worldcointype/{{ country.country }}-{{ country.id }}\" class=\"col-33\">\n\t<img\n\t\tsrc=\"assets/images/countryimg/{{ country.Img }}\"\n\n\t\talt=\"{{ country.Img }}\" />\n\t<div class=\"country-overlay\">\n\t\t<span>{{ country.name }}</span>\n\t</div>\n</a>\n";

/***/ }),

/***/ 744:
/*!*************************************************************************!*\
  !*** ./src/app/worldcoin/worldcoin/worldcoin.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"scrollto\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-3\">\n\t\t\t<div class=\"section-heading\">\n\t\t\t\t<a href=\"javascript:history.back()\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<div class=\"icon\"><i class=\"fa fa-backward fa-1x\"></i> Home</div>\n\t\t\t\t\t</h3>\n\t\t\t\t</a>\n\t\t\t\t<h2 class=\"section-title\">World Coins</h2>\n\t\t\t\t<p class=\"section-subtitle\">\n\t\t\t\t\tExplore the fascinating world of numismatics and whether you’re a\n\t\t\t\t\thistory buff, a cultural enthusiast or collector, discover a wide\n\t\t\t\t\trange of rare and valuable coins from around the world. Coins tell us\n\t\t\t\t\thow people lived their lives, how soldiers were paid, what governments\n\t\t\t\t\tfunctioned. Coins tell us how wars were fought, how monarchs reigned\n\t\t\t\t\twithin kingdoms and empires. We invite you to explore our coin\n\t\t\t\t\tcollecting category and discover the beauty of coins from around the\n\t\t\t\t\tworld.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-2-3\">\n\t\t\t@for (Country of Country$ | async; track Country; let i = $index) {\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<app-image-block [country]=\"Country\"></app-image-block>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2 class=\"section-title\">\n\t\t\t\t\t\t\t{{ Country.name }}: {{ Country.title }}\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p class=\"section-subtitle\">{{ Country.description }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"spacer\"> &nbsp;</span>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</div>\n\t</div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_worldcoin_worldcoin_worldcoin_component_ts.js.map