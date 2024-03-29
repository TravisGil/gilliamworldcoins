"use strict";
(self["webpackChunkyoski"] = self["webpackChunkyoski"] || []).push([["src_app_coins_coinType_coin-type_coin-type_component_ts"],{

/***/ 9204:
/*!*****************************************************************!*\
  !*** ./src/app/coins/coinType/coin-type/coin-type.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoinTypeComponent: () => (/* binding */ CoinTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _coin_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin-type.component.html?ngResource */ 9915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _cointype_block_cointype_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cointype-block/cointype-block.component */ 4760);








let CoinTypeComponent = class CoinTypeComponent {
  constructor(config, route) {
    this.config = config;
    this.route = route;
    this.crowns$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.coinList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coinId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.coinId);
      this.getPageData('cointypeList', this.coinId);
      this.getBlockData('coinList', this.coinId);
    });
  }
  getPageData(database, id) {
    this.crowns$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  getBlockData(database, typeid) {
    this.coinList$ = this.config.getCoinLisyByTypeSettings(database, typeid).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};
CoinTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-coin-type',
  standalone: true,
  imports: [_cointype_block_cointype_block_component__WEBPACK_IMPORTED_MODULE_2__.CointypeBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  template: _coin_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], CoinTypeComponent);


/***/ }),

/***/ 4760:
/*!***************************************************************************!*\
  !*** ./src/app/coins/coinType/cointype-block/cointype-block.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CointypeBlockComponent: () => (/* binding */ CointypeBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _cointype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cointype-block.component.html?ngResource */ 6926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let CointypeBlockComponent = class CointypeBlockComponent {
  static #_ = this.propDecorators = {
    coinTypeBlock: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
CointypeBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-cointype-block',
  standalone: true,
  imports: [],
  template: _cointype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], CointypeBlockComponent);


/***/ }),

/***/ 9915:
/*!******************************************************************************!*\
  !*** ./src/app/coins/coinType/coin-type/coin-type.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"scrollto\">\r\n\t<div class=\"row clearfix\">\r\n\t\t@if (crowns$ | async; as crown) {\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<a href=\"javascript:history.back()\">\r\n\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-backward fa-1x\"></i> {{ crown.tagline }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<h2 class=\"section-title\">{{ crown.title }}</h2>\r\n\t\t\t\t\t<p class=\"section-subtitle\">{{ crown.description }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t}\r\n\r\n\t\t<div class=\"col-2-3\">\r\n\t\t\t@for (crownbl of coinList$ | async; track crownbl; let i = $index) {\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<app-cointype-block [coinTypeBlock]=\"crownbl\"></app-cointype-block>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h2 class=\"section-title\">{{ crownbl.title }}</h2>\r\n\t\t\t\t\t\t<p class=\"section-subtitle\">{{ crownbl.description }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"spacer\"> &nbsp;</span>\r\n\t\t\t\t</div>\r\n\t\t\t}\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";

/***/ }),

/***/ 6926:
/*!****************************************************************************************!*\
  !*** ./src/app/coins/coinType/cointype-block/cointype-block.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<a href=\"coin/{{ coinTypeBlock.id }}\" class=\"col-3\">\r\n\t<img\r\n\t\tsrc=\"assets/images/coins/{{ coinTypeBlock.type }}/{{\r\n\t\t\tcoinTypeBlock.frontImg\r\n\t\t}}\"\r\n\r\n\t\talt=\"{{ coinTypeBlock.name }}\" />\r\n\t<div class=\"crown-overlay\">\r\n\t\t<span>{{ coinTypeBlock.name }}</span>\r\n\t</div>\r\n</a>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_coins_coinType_coin-type_coin-type_component_ts.js.map