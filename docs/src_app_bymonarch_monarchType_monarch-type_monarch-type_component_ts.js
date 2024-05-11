"use strict";
(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["src_app_bymonarch_monarchType_monarch-type_monarch-type_component_ts"],{

/***/ 3256:
/*!******************************************************************************!*\
  !*** ./src/app/bymonarch/monarchType/monarch-type/monarch-type.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonarchTypeComponent: () => (/* binding */ MonarchTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _monarch_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monarch-type.component.html?ngResource */ 3304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _monarchtype_block_monarchtype_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../monarchtype-block/monarchtype-block.component */ 2212);








let MonarchTypeComponent = class MonarchTypeComponent {
  constructor(config, route) {
    this.config = config;
    this.route = route;
    this.crowns$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.coinList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.monarchId = params['id']; // Access the 'id' parameter from the URL
      const strList = this.monarchId.split('-');
      this.getBlockData('coinList', strList[0]);
      this.getPageData('monarchList', parseInt(strList[1]));
    });
  }
  getPageData(database, id) {
    this.crowns$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  getBlockData(database, type) {
    this.coinList$ = this.config.getCoinLisyByMonarchTypeSettings(database, type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
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
MonarchTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-monarch-type',
  standalone: true,
  imports: [_monarchtype_block_monarchtype_block_component__WEBPACK_IMPORTED_MODULE_2__.MonarchtypeBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  template: _monarch_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MonarchTypeComponent);


/***/ }),

/***/ 2212:
/*!****************************************************************************************!*\
  !*** ./src/app/bymonarch/monarchType/monarchtype-block/monarchtype-block.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonarchtypeBlockComponent: () => (/* binding */ MonarchtypeBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _monarchtype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monarchtype-block.component.html?ngResource */ 6800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let MonarchtypeBlockComponent = class MonarchtypeBlockComponent {
  static #_ = this.propDecorators = {
    coinTypeBlock: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
MonarchtypeBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-monarchtype-block',
  standalone: true,
  imports: [],
  template: _monarchtype_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MonarchtypeBlockComponent);


/***/ }),

/***/ 3304:
/*!*******************************************************************************************!*\
  !*** ./src/app/bymonarch/monarchType/monarch-type/monarch-type.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"crowns\" class=\"scrollto\">\r\n\t<div class=\"row clearfix\">\r\n\t\t@if (crowns$ | async; as crown) {\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<a href=\"javascript:history.back()\">\r\n\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-backward fa-1x\"></i> {{ crown.tagline }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<h2 class=\"section-title\">{{ crown.title }}</h2>\r\n\t\t\t\t\t<p class=\"section-subtitle\">{{ crown.description }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t}\r\n\r\n\t\t<div class=\"col-2-3\">\r\n\t\t\t@for (crownbl of coinList$ | async; track crownbl; let i = $index) {\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<app-monarchtype-block [coinTypeBlock]=\"crownbl\"></app-monarchtype-block>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h2 class=\"section-title\">{{ crownbl.title }}</h2>\r\n\t\t\t\t\t\t<p class=\"section-subtitle\">{{ crownbl.description }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"spacer\"> &nbsp;</span>\r\n\t\t\t\t</div>\r\n\t\t\t}\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";

/***/ }),

/***/ 6800:
/*!*****************************************************************************************************!*\
  !*** ./src/app/bymonarch/monarchType/monarchtype-block/monarchtype-block.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#/coin/{{ coinTypeBlock.id }}\" class=\"col-4\">\r\n\t<img\r\n\t\tsrc=\"assets/images/coins/{{ coinTypeBlock.type }}/{{\r\n\t\t\tcoinTypeBlock.frontImg\r\n\t\t}}\"\r\n\t\talt=\"{{ coinTypeBlock.name }}\" />\r\n\t<div class=\"crown-overlay\">\r\n\t\t<span>{{ coinTypeBlock.name }} {{ coinTypeBlock.year }}</span>\r\n\t</div>\r\n</a>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bymonarch_monarchType_monarch-type_monarch-type_component_ts.js.map