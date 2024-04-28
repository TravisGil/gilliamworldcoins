"use strict";
(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["src_app_worldcoin_worldcointype_worldcointype_component_ts"],{

/***/ 1632:
/*!********************************************************************************!*\
  !*** ./src/app/worldcoin/worldcointype-block/worldcointype-block.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldcointypeBlockComponent: () => (/* binding */ WorldcointypeBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _worldcointype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldcointype-block.component.html?ngResource */ 380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let WorldcointypeBlockComponent = class WorldcointypeBlockComponent {
  ngOnInit() {
    this.currentCoin = this.coinTypeBlock;
    this.currentCoinID = this.coinTypeBlock.id;
  }
  static #_ = this.propDecorators = {
    coinTypeBlock: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
WorldcointypeBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-worldcointype-block',
  template: _worldcointype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], WorldcointypeBlockComponent);


/***/ }),

/***/ 8492:
/*!********************************************************************!*\
  !*** ./src/app/worldcoin/worldcointype/worldcointype.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldcointypeComponent: () => (/* binding */ WorldcointypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _worldcointype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldcointype.component.html?ngResource */ 8360);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _worldcointype_block_worldcointype_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../worldcointype-block/worldcointype-block.component */ 1632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);








let WorldcointypeComponent = class WorldcointypeComponent {
  constructor(config, route) {
    this.config = config;
    this.route = route;
    this.countryPageHeader$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.coinList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    //this.getBlockData('cointypeList');
    this.route.params.subscribe(params => {
      this.coinId = params['id']; // Access the 'id' parameter from the URL
      const strList = this.coinId.split('-');
      this.getCoinList('coinList', strList[0]);
      this.getBlockData('countrytypeList', parseInt(strList[1]));
    });
  }
  getBlockData(database, type) {
    this.countryPageHeader$ = this.config.getPageDeailsByCountrySettings(database, type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  getCoinList(database, type) {
    this.coinList$ = this.config.getCoinListByCountrySettings(database, type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};
WorldcointypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-worldcointype',
  standalone: true,
  imports: [_worldcointype_block_worldcointype_block_component__WEBPACK_IMPORTED_MODULE_2__.WorldcointypeBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  template: _worldcointype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], WorldcointypeComponent);


/***/ }),

/***/ 380:
/*!*********************************************************************************************!*\
  !*** ./src/app/worldcoin/worldcointype-block/worldcointype-block.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#/coin/{{ currentCoinID }}\" class=\"col-4\">\n\t<img\n\t\tsrc=\"assets/images/coins/{{ currentCoin.countryname }}/{{\n\t\t\tcurrentCoin.frontImg\n\t\t}}\"\n\t\talt=\"{{ currentCoin.name }}\" />\n\t<div class=\"crown-overlay\">\n\t\t<span>{{ currentCoin.name }} {{ currentCoin.year }} </span>\n\t</div>\n</a>\n";

/***/ }),

/***/ 8360:
/*!*********************************************************************************!*\
  !*** ./src/app/worldcoin/worldcointype/worldcointype.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"scrollto\">\r\n\t<div class=\"row clearfix\">\r\n\t\t@if (countryPageHeader$ | async; as country) {\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<a href=\"javascript:history.back()\">\r\n\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-backward fa-1x\"></i> {{ country.tagline }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<h2 class=\"section-title\">{{ country.title }}</h2>\r\n\t\t\t\t\t<p class=\"section-subtitle\">{{ country.description }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t}\r\n\t\t<div class=\"col-2-3\">\r\n\t\t\t@for (coinbl of coinList$ | async; track coinbl) {\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<app-worldcointype-block\r\n\t\t\t\t\t\t[coinTypeBlock]=\"coinbl\"></app-worldcointype-block>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h2 class=\"section-title\">{{ coinbl.title }}</h2>\r\n\t\t\t\t\t\t<p class=\"section-subtitle\">{{ coinbl.description }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"spacer\"> &nbsp;</span>\r\n\t\t\t\t</div>\r\n\t\t\t}\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_worldcoin_worldcointype_worldcointype_component_ts.js.map