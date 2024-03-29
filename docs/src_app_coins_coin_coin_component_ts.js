(self["webpackChunkyoski"] = self["webpackChunkyoski"] || []).push([["src_app_coins_coin_coin_component_ts"],{

/***/ 4736:
/*!**********************************************!*\
  !*** ./src/app/coins/coin/coin.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoinComponent: () => (/* binding */ CoinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _coin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin.component.html?ngResource */ 6144);
/* harmony import */ var _styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles.scss?ngResource */ 5216);
/* harmony import */ var _styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-red-zoom */ 20);









let CoinComponent = class CoinComponent {
  constructor(config, route) {
    this.config = config;
    this.route = route;
    this.coinList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coinId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.coinId);
      this.getPageData('coinList', this.coinId);
    });
  }
  getPageData(database, id) {
    this.coinList$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching coinList data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};
CoinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-coin',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, ngx_red_zoom__WEBPACK_IMPORTED_MODULE_10__.RedZoomModule],
  template: _coin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CoinComponent);


/***/ }),

/***/ 5216:
/*!***************************************!*\
  !*** ./src/styles.scss?ngGlobalStyle ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*:before,
*:after {
  box-sizing: border-box;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
  direction: ltr;
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

p {
  line-height: 25px;
}

.row img {
  height: auto;
  max-width: 100%;
}

.spacer {
  margin-left: 2.5em;
}

.align-top {
  flex-wrap: wrap;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.container {
  border: 5px solid rgb(15, 13, 15);
  border-radius: 0.5em;
  padding: 10px;
  justify-content: space-between;
  align-content: space-between;
}

.item {
  padding: 10px;
  background-color: rgba(111, 41, 97, 0.3);
  border: 2px solid rgba(111, 41, 97, 0.5);
}

a {
  text-decoration: none;
  line-height: inherit;
  transition: opacity 0.3s ease-out;
}

iframe {
  border: 0 !important;
}

.parallax-window {
  min-height: 400px;
  background: transparent;
}

figure {
  margin: 0;
}

.red-zoom__lens-image {
  --red-zoom-min-scale-factor: 1;
  --red-zoom-max-scale-factor: 2;
  min-width: calc(var(--red-zoom-thumb-w) * var(--red-zoom-min-scale-factor));
  min-height: calc(var(--red-zoom-thumb-h) * var(--red-zoom-min-scale-factor));
  max-width: calc(var(--red-zoom-thumb-w) * var(--red-zoom-max-scale-factor));
  max-height: calc(var(--red-zoom-thumb-h) * var(--red-zoom-max-scale-factor));
}

/* You can add global styles to this file, and also import other style files */
@keyframes red-zoom-loader-animation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
.red-zoom {
  pointer-events: none;
}

.red-zoom__overlay,
.red-zoom__error {
  position: absolute;
  left: var(--red-zoom-thumb-x, 0px);
  top: var(--red-zoom-thumb-y, 0px);
  width: var(--red-zoom-thumb-w, 0px);
  height: var(--red-zoom-thumb-h, 0px);
}

.red-zoom__lens {
  display: flex;
}

.red-zoom__lens-body {
  position: relative;
  overflow: hidden;
  flex-grow: 1;
}

.red-zoom__lens-image {
  --red-zoom-lens-image-x: calc(
      var(--red-zoom-lens-image-base-x, 0px) +
      var(--red-zoom-lens-image-center-offset-x, 0px)
  );
  --red-zoom-lens-image-y: calc(
      var(--red-zoom-lens-image-base-y, 0px) +
      var(--red-zoom-lens-image-center-offset-y, 0px)
  );
  position: absolute;
  transform: translateX(var(--red-zoom-lens-image-x)) translateY(var(--red-zoom-lens-image-y)) translateZ(0);
}

.red-zoom__frame {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--red-zoom-frame-w, 0px);
  height: var(--red-zoom-frame-h, 0px);
  transform: translateX(var(--red-zoom-frame-x, 0px)) translateY(var(--red-zoom-frame-y, 0px));
}

.red-zoom__frame-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.red-zoom__frame-image {
  width: var(--red-zoom-thumb-w, 0px);
  height: var(--red-zoom-thumb-h, 0px);
  transform: translateX(var(--red-zoom-frame-image-x, 0px)) translateY(var(--red-zoom-frame-image-y, 0px)) translateZ(0);
}

.red-zoom--style--magnifier {
  visibility: hidden;
  transition: visibility 0s 0.5s;
}
.red-zoom--style--magnifier .red-zoom__overlay {
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
  background: rgba(255, 255, 255, 0.3);
}
.red-zoom--style--magnifier .red-zoom__overlay:before {
  position: relative;
  display: block;
  content: "";
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-top-color: white;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  animation-name: red-zoom-loader-animation;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  opacity: 0;
}
.red-zoom--style--magnifier .red-zoom__frame {
  display: none;
}
.red-zoom--style--magnifier .red-zoom__lens {
  position: absolute;
  display: block;
  left: var(--red-zoom-thumb-x);
  top: var(--red-zoom-thumb-y);
  width: var(--red-zoom-thumb-w);
  height: var(--red-zoom-thumb-h);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
  overflow: hidden;
}
.red-zoom--style--magnifier .red-zoom__lens:after {
  position: absolute;
  content: "";
  box-shadow: 0 1px 9px 2px rgba(0, 0, 0, 0.8);
  border: 0 solid #fff;
  opacity: 0.5;
  border-radius: 20px;
  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));
  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));
  width: 160px;
  height: 160px;
}
.red-zoom--style--magnifier .red-zoom__lens-body {
  border-radius: 20px;
  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));
  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));
  width: 160px;
  height: 160px;
}
.red-zoom--style--magnifier .red-zoom__lens-image {
  --red-zoom-lens-image-x: calc(
      var(--red-zoom-lens-image-base-x, 0px) +
      var(--red-zoom-lens-image-center-offset-x, 0px) +
      var(--red-zoom-lens-image-frame-offset-x, 0px)
  );
  --red-zoom-lens-image-y: calc(
      var(--red-zoom-lens-image-base-y, 0px) +
      var(--red-zoom-lens-image-center-offset-y, 0px) +
      var(--red-zoom-lens-image-frame-offset-y, 0px)
  );
}
.red-zoom--style--magnifier .red-zoom__error {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 32px;
  visibility: hidden;
  z-index: 1;
  opacity: 0;
  transition: visibility 0s 0.5s, opacity 0.5s;
}
.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__frame,
.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__lens {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  display: none;
}
.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__overlay {
  background: rgba(255, 0, 0, 0.7);
}
.red-zoom--style--magnifier.red-zoom--active {
  transition-delay: 0s;
  visibility: visible;
}
.red-zoom--style--magnifier.red-zoom--active .red-zoom__overlay {
  opacity: 1;
}
.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {
  opacity: 1;
  animation-play-state: running;
}
.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,
.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {
  opacity: 1;
}
.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--error .red-zoom__error {
  visibility: visible;
  transition-delay: 0s;
  opacity: 1;
}
.red-zoom--style--magnifier.red-zoom--disabled {
  transition-delay: 0s;
  visibility: hidden;
}
.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__overlay,
.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__frame,
.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__lens,
.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__error {
  transition-duration: 0s !important;
  opacity: 0 !important;
}

.red-zoom--style--window {
  visibility: hidden;
  transition: visibility 0s 0.5s;
}
.red-zoom--style--window .red-zoom__overlay {
  background: rgba(229, 0, 50, 0.5);
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
}
.red-zoom--style--window .red-zoom__overlay:before {
  position: relative;
  display: block;
  content: "";
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-top-color: white;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  animation-name: red-zoom-loader-animation;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  opacity: 0;
}
.red-zoom--style--window .red-zoom__frame {
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
  background: transparent;
}
.red-zoom--style--window .red-zoom__frame:after {
  position: absolute;
  content: "";
  border: 6px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);
  left: -6px;
  top: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
}
.red-zoom--style--window .red-zoom__lens {
  position: absolute;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.5s;
  background: #fff;
}
.red-zoom--style--window .red-zoom__lens:after {
  position: absolute;
  content: "";
  border: 6px solid #fff;
  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);
}
.red-zoom--style--window .red-zoom__lens:after {
  left: -6px;
  top: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
}
.red-zoom--style--window .red-zoom__error {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 32px;
  visibility: hidden;
  z-index: 1;
  opacity: 0;
  transition: visibility 0s 0.5s, opacity 0.5s;
}
.red-zoom--style--window.red-zoom--status--error .red-zoom__frame,
.red-zoom--style--window.red-zoom--status--error .red-zoom__lens {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  display: none;
}
.red-zoom--style--window.red-zoom--status--error .red-zoom__overlay {
  background: rgba(255, 0, 0, 0.7);
}
.red-zoom--style--window.red-zoom--active {
  transition-delay: 0s;
  visibility: visible;
}
.red-zoom--style--window.red-zoom--active .red-zoom__overlay {
  opacity: 1;
}
.red-zoom--style--window.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {
  opacity: 1;
  animation-play-state: running;
}
.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,
.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {
  opacity: 1;
}
.red-zoom--style--window.red-zoom--active.red-zoom--status--error .red-zoom__error {
  visibility: visible;
  transition-delay: 0s;
  opacity: 1;
}
.red-zoom--style--window.red-zoom--disabled {
  transition-delay: 0s;
  visibility: hidden;
}
.red-zoom--style--window.red-zoom--disabled .red-zoom__overlay,
.red-zoom--style--window.red-zoom--disabled .red-zoom__frame,
.red-zoom--style--window.red-zoom--disabled .red-zoom__lens,
.red-zoom--style--window.red-zoom--disabled .red-zoom__error {
  transition-duration: 0s !important;
  opacity: 0 !important;
}
.red-zoom--style--window .red-zoom__lens {
  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);
  left: var(--window-x, 0px);
  top: var(--red-zoom-thumb-y, 0px);
  width: var(--red-zoom-thumb-w, 0px);
  height: var(--red-zoom-thumb-h, 0px);
}

.red-zoom--style--overlay {
  visibility: hidden;
  transition: visibility 0s 0.5s;
}
.red-zoom--style--overlay .red-zoom__overlay {
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
  background: rgba(255, 255, 255, 0.3);
}
.red-zoom--style--overlay .red-zoom__overlay:before {
  position: relative;
  display: block;
  content: "";
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-top-color: white;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  animation-name: red-zoom-loader-animation;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  opacity: 0;
}
.red-zoom--style--overlay .red-zoom__frame {
  display: none;
}
.red-zoom--style--overlay .red-zoom__lens {
  position: absolute;
  left: var(--red-zoom-thumb-x);
  top: var(--red-zoom-thumb-y);
  width: var(--red-zoom-thumb-w);
  height: var(--red-zoom-thumb-h);
  overflow: hidden;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}
.red-zoom--style--overlay .red-zoom__error {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 32px;
  visibility: hidden;
  z-index: 1;
  opacity: 0;
  transition: visibility 0s 0.5s, opacity 0.5s;
}
.red-zoom--style--overlay.red-zoom--status--error .red-zoom__frame,
.red-zoom--style--overlay.red-zoom--status--error .red-zoom__lens {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  display: none;
}
.red-zoom--style--overlay.red-zoom--status--error .red-zoom__overlay {
  background: rgba(255, 0, 0, 0.7);
}
.red-zoom--style--overlay.red-zoom--active {
  transition-delay: 0s;
  visibility: visible;
}
.red-zoom--style--overlay.red-zoom--active .red-zoom__overlay {
  opacity: 1;
}
.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {
  opacity: 1;
  animation-play-state: running;
}
.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,
.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {
  opacity: 1;
}
.red-zoom--style--overlay.red-zoom--active.red-zoom--status--error .red-zoom__error {
  visibility: visible;
  transition-delay: 0s;
  opacity: 1;
}
.red-zoom--style--overlay.red-zoom--disabled {
  transition-delay: 0s;
  visibility: hidden;
}
.red-zoom--style--overlay.red-zoom--disabled .red-zoom__overlay,
.red-zoom--style--overlay.red-zoom--disabled .red-zoom__frame,
.red-zoom--style--overlay.red-zoom--disabled .red-zoom__lens,
.red-zoom--style--overlay.red-zoom--disabled .red-zoom__error {
  transition-duration: 0s !important;
  opacity: 0 !important;
}

/* Page Border */
.page-border {
  position: fixed;
  z-index: 999999;
  pointer-events: none;
}

.page-border .bottom-border,
.page-border .left-border,
.page-border .right-border,
.page-border .top-border {
  background: #f3f3ef;
  position: fixed;
  z-index: 9999;
}

.page-border > .top-border,
.page-border > .right-border,
.page-border > .bottom-border,
.page-border > .left-border {
  padding: 11px;
  background: #ccc;
}

.page-border .bottom-border,
.page-border .top-border {
  width: 100%;
  padding: 10px;
  left: 0;
}

.page-border .left-border,
.page-border .right-border {
  padding: 10px;
  height: 100%;
  top: 0;
}

.page-border .top-border {
  top: 0;
}

.page-border .right-border {
  right: 0;
}

.page-border .bottom-border {
  bottom: 0;
}

.page-border .left-border {
  left: 0;
}

#wrapper {
  margin: 0 15px;
  padding: 15px 0;
  position: relative;
}

/* --------- 1.1 Input Elements ---------- */
input,
textarea {
  border: 1px solid #e1e1e1;
  padding: 10px;
  transition: all 0.3s linear;
  border-radius: 3px;
}

input {
  height: 40px;
  margin: 3px 0;
  outline: none;
  line-height: normal;
  font-size: 14px;
}

input[type=submit] {
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  padding-top: 0;
  padding-bottom: 0;
}

select {
  border: 1px solid #e1e1e1;
  height: 40px;
  padding: 5px;
}

input:focus,
textarea:focus {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

*:focus {
  outline: none;
}

/*------------------------------------------------------------------------------------------*/
/* 2. Layout Elements */
/*------------------------------------------------------------------------------------------*/
section {
  clear: both;
  overflow: hidden;
}

/* Rows and Columns */
.row {
  max-width: 1245px;
  margin: 0 auto;
  padding: 75px 0;
  position: relative;
}

.no-padding-bottom .row,
.no-padding-bottom div,
.no-padding-bottom.row {
  padding-bottom: 0;
}

.no-padding-top.row,
.no-padding-top div {
  padding-top: 0;
}

.big-padding-top {
  padding-top: 75px !important;
}

.big-padding-bottom {
  padding-bottom: 85px !important;
}

/* Targets all elements */
[class*=col-] {
  float: left;
  padding: 20px;
}

#clients .col-2-3 [class*=col-] {
  padding: 0;
}

/* Clearfix */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
  background-color: #202020;
}

/* Main Widths */
.col-1 {
  width: 100%;
  /* padding: 20px !important; */
}

.col-2 {
  width: 50%;
}

.col-3 {
  width: 33.33%;
}

.col-4 {
  width: 25%;
}

.col-5 {
  width: 20%;
}

.col-6 {
  width: 16.6666666667%;
}

.col-7 {
  width: 14.2857142857%;
}

.col-8 {
  width: 12.5%;
}

.col-9 {
  width: 11.1111111111%;
}

.col-10 {
  width: 10%;
}

.col-11 {
  width: 9.0909090909%;
}

.col-12 {
  width: 8.33%;
}

.col-2-3 {
  width: 66.66%;
}

.col-3-4 {
  width: 75%;
}

.col-9-10 {
  width: 90%;
}

/* Golden Ratio */
.col-61 {
  width: 61.8%;
}

.col-38 {
  width: 38.2%;
  padding: 20px !important;
}

/* --------- 2.1 Header --------- */
#header {
  height: 71px !important;
  overflow: visible;
  z-index: 9999;
  width: 100%;
  position: absolute !important;
}

#header .row {
  padding: 0;
}

/* #header aside {
  text-align: right;
} */
#header ul {
  text-align: center;
}

#header li {
  display: inline-block;
  list-style: none;
  margin: 0;
}

/* --------- 2.2 Logo ---------- */
#logo {
  float: left;
  height: 71px;
  line-height: 66px;
  margin-right: 15px;
}

#logo h1,
#logo h2 {
  display: inline-block;
}

#banner #logo h1 {
  font-size: 28px;
  margin-right: 10px;
  font-weight: 900;
  padding: 0;
}

#logo h2 {
  font-size: 18px;
  padding: 0;
}

#logo img {
  vertical-align: middle;
  margin-right: 15px;
}

#navigation-logo {
  display: none;
}

.nav-solid #logo #banner-logo {
  display: none;
  height: 71px;
}

.nav-solid #logo #navigation-logo {
  display: inline-block;
  padding-left: 15px !important;
}

/* --------- 2.3 Buttons ---------- */
.call-to-action {
  padding: 35px 0 35px 0;
}

/*Style*/
.button {
  font-size: 16px;
  margin: 35px 0;
  padding: 11px 16px;
  transition: all 0.3s linear;
  display: inline-block;
  border-width: 3px;
  border-style: solid;
}

/* Play Button */
#video-section {
  position: relative;
}

.play-video {
  height: 110px;
  position: absolute;
  top: 50%;
  margin-top: -110px;
  width: 100%;
}

.play-icon {
  display: inline-block;
  font-size: 0px;
  cursor: pointer;
  margin: 45px auto;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.play-icon:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: "";
  box-sizing: content-box;
}

/* --------- 2.4 Navigation ---------- */
#header {
  font-size: 13px;
}

#header aside {
  float: right;
}

#header nav ul {
  text-transform: uppercase;
}

#header nav a {
  height: 71px;
  line-height: 71px;
  display: block;
  padding: 0 10px;
}

#header nav a:hover {
  opacity: 0.6;
}

/*Navigation Solid*/
#header.nav-solid [class*=col-] {
  padding: 0 20px;
  background-color: #202020;
}

#header.nav-solid {
  background: #fff;
  box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);
  position: fixed !important;
  left: 0;
}

#header.nav-solid nav a {
  border-bottom: 3px solid;
  border-color: #fff;
  transition: all 0.3s ease-out;
}

#header.nav-solid nav a:hover {
  opacity: 1;
}

/* Social Elements when Solid*/
#header.nav-solid .social-icons a {
  transition: all 0.3s ease-out;
  opacity: 0.5;
}

#header.nav-solid .social-icons a:hover {
  opacity: 1;
  color: #e4473c;
}

/* Responsive Nav Styling */
#nav-trigger {
  display: none;
  text-align: right;
}

#nav-trigger span {
  display: inline-block;
  width: 38px;
  height: 71px;
  color: #111;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: all 0.3s ease-out;
}

#nav-trigger span:after {
  font-family: "fontAwesome";
  display: inline-block;
  width: 38px;
  height: 71px;
  line-height: 75px;
  text-align: center;
  content: "\\f0c9";
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

#nav-trigger span.open:after {
  content: "\\f00d";
}

#nav-trigger span:hover,
.nav-solid #nav-trigger span.open:hover,
.nav-solid #nav-trigger span:hover {
  opacity: 0.6;
}

#nav-trigger span.open,
#nav-trigger span.open:hover {
  color: #111;
}

.nav-solid #nav-trigger span.open:hover {
  color: #999;
}

.nav-solid #nav-trigger span {
  color: #999;
  opacity: 1;
}

nav#nav-mobile {
  position: relative;
  display: none;
}

nav#nav-mobile ul {
  display: block;
  list-style-type: none;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: -20px;
  margin-right: -20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);
}

nav#nav-mobile ul:after {
  display: none;
}

nav#nav-mobile li {
  margin: 0 20px;
  float: none;
  text-align: left;
  border-bottom: 1px solid #e1e1e1;
}

nav#nav-mobile li:last-child {
  border-bottom: none;
}

.nav-solid nav#nav-mobile li {
  border-top: 1px solid #e1e1e1;
  border-bottom: none;
}

nav#nav-mobile a {
  display: block;
  padding: 12px 0;
  color: #333;
  width: 100%;
  height: auto;
  line-height: normal;
  display: block;
  border-bottom: none !important;
  transition: all 0.3s ease-out;
}

nav#nav-mobile a:hover {
  background: #fafafa;
  opacity: 1;
}

/* --------- 2.5 Social Elements ---------- */
#header .col-4 {
  text-align: right;
}

.coinTypeBlock {
  height: 150px;
}

.social-icons a {
  display: inline-block;
  width: 32px;
  text-align: center;
}

.social-icons a:hover {
  opacity: 0.7;
}

.social-icons span {
  display: none;
}

#header .social-icons {
  margin-top: 27px;
}

/* --------- 2.6 Images ---------- */
/*Alignment*/
img {
  vertical-align: top;
}

a img {
  border: none;
  transition: all 0.3s ease-out;
  backface-visibility: hidden;
}

a img:hover {
  opacity: 0.7;
}

/* --------- 2.7 Positioning ---------- */
/*Alignment*/
.pull-right {
  padding-left: 15px;
}

.pull-left {
  padding-right: 15px;
}

.pull-down {
  padding-top: 30px;
}

/*------------------------------------------------------------------------------------------*/
/* 3. Fonts */
/*------------------------------------------------------------------------------------------*/
h1 {
  padding: 20px 0;
}

h2 {
  padding: 14px 0;
}

h3 {
  padding: 10px 0 0 15px;
}

h4 {
  padding: 7px 0;
}

/* Text Alignment */
.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

/* Section Headings */
.section-heading {
  padding: 0;
}

.section-subtitle {
  font-size: 18px;
  padding-top: 0;
}

.section-heading h3 {
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  letter-spacing: 2px;
  padding-bottom: 0;
}

/*------------------------------------------------------------------------------------------*/
/* 4. Banner */
/*------------------------------------------------------------------------------------------*/
#banner {
  background-size: cover;
}

#banner-content.row {
  padding-top: 170px;
  padding-bottom: 100px;
  padding-left: 240px;
}

#banner h1 {
  padding-top: 5%;
}

#banner .section-heading:before {
  content: "";
  display: block;
  width: 30px;
  height: 5px;
  margin-top: 30px;
  margin-left: 15px;
}

/*------------------------------------------------------------------------------------------*/
/* 5. Content Elements */
/*------------------------------------------------------------------------------------------*/
/* --------- 5.1 Icons ---------- */
/*Font Icon sizes*/
.fa-1x {
  font-size: 15px !important;
}

/*Icon Block*/
.icon-block {
  position: relative;
}

.icon-block h4 {
  font-weight: bold;
  padding-top: 0;
}

.icon-block .icon {
  position: absolute;
}

.icon-block p {
  margin-top: 0;
}

/* Icon Left*/
.icon-left .icon {
  left: 15;
}

.icon-left .icon-block-description {
  padding-left: 53px;
}

/* Icon Right */
.icon-right .icon {
  right: 15;
}

.icon-right .icon-block-description {
  padding-right: 53px;
}

/* Icon Above */
.icon-top {
  display: block;
}

.icon-top .icon {
  position: relative;
  display: block;
}

.icon-top .icon-block-description {
  padding-top: 25px;
}

/* --------- 5.2 Parallax Elements ---------- */
/* --------- 5.3 Divider ---------- */
.divider {
  position: relative;
  width: 40%;
  height: 20px;
  line-height: 20px;
  margin: 10px auto 5px auto;
  clear: both;
  text-align: center;
}

.divider i {
  background: #fff;
  position: relative;
  top: -11px;
  padding: 0 5px 0 5px;
  color: #e1e1e1;
}

/*------------------------------------------------------------------------------------------*/
/* 6. Landing Page Sections */
/*------------------------------------------------------------------------------------------*/
/* --------- 6.1 Introduction ---------- */
.introduction img.featured {
  padding: 55px 0 0 0;
}

/* --------- 6.2 Features ---------- */
.features div:nth-child(4) {
  clear: both;
}

/* --------- coin ---------- */
.coin {
  background: #fff;
  padding: 25px 0 25px 0;
  margin: 0 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease-in-out 0s;
  border: 10px solid #fff;
}

.coin footer {
  padding-top: 12px;
}

/* Style Classic - Avatar above coin */
.coin.classic img {
  display: inline-block;
  margin-bottom: 25px;
}

.coin.classic q {
  display: block;
}

.coin.classic footer:before {
  display: block;
  content: "";
  width: 80px;
  height: 4px;
  margin: 10px auto 15px auto;
}

/* --------- 6.3 Testimonials ---------- */
.testimonial {
  padding: 15px;
}

blockquote {
  position: relative;
}

.testimonial img {
  max-height: 120px;
  border-radius: 250em;
}

.testimonial footer {
  padding-top: 12px;
}

/* Style Classic - Avatar above Testimonial */
.testimonial.classic img {
  display: inline-block;
  margin-bottom: 25px;
}

.testimonial.classic q {
  display: block;
}

.testimonial.classic footer:before {
  display: block;
  content: "";
  width: 30px;
  height: 4px;
  margin: 10px auto 15px auto;
}

/* Style Big */
/* --------- 6.4 Gallery ---------- */
#gallery img {
  max-height: 300px;
}

#gallery [class*=col-] {
  padding: 0;
}

#gallery a {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

#gallery a:hover img {
  opacity: 0.15;
  backface-visibility: hidden;
}

#gallery a:before {
  font-size: 2.2em;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  content: "+";
  width: 70px;
  height: 70px;
  border-radius: 100em;
  display: block;
  position: absolute;
  top: 55%;
  left: 50%;
  line-height: 72px;
  margin: -35px 0 0 -35px;
  opacity: 0;
  transition: all 0.2s linear;
  /* vertical-align: middle; */
}

#gallery a:hover:before {
  opacity: 1;
  top: 50%;
  left: 50%;
}

.featherlight iframe {
  /* styling */
  border: none;
}

/* Always display arrows on touch devices */
@media only screen and (max-device-width: 1024px) {
  .featherlight-next:hover,
  .featherlight-previous:hover {
    background: none;
  }
  .featherlight-next span,
  .featherlight-previous span {
    display: block;
  }
}
/* --------- 6.5 Video ---------- */
.video_container,
.easyContainer {
  position: relative;
  padding-bottom: 56.25%; /* 16/9 ratio */
  margin: 0;
  padding-top: 0; /* IE6 workaround*/
  height: 0;
  overflow: hidden;
}

.video_container iframe,
.video_container object,
.video_container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}

.slvj-lightbox iframe,
.slvj-lightbox object,
.slvj-lightbox embed {
  width: 100% !important;
  height: 529px !important;
}

#slvj-window {
  width: 100%;
  min-height: 100%;
  z-index: 9999999999;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}

#slvj-window,
#slvj-window * {
  box-sizing: border-box;
}

#slvj-background-close {
  width: 100%;
  min-height: 100%;
  z-index: 31;
  position: fixed;
  top: 0;
  left: 0;
}

#slvj-back-lightbox {
  max-width: 940px;
  max-height: 529px;
  z-index: 32;
  text-align: center;
  margin: 0 auto;
}

.slvj-lightbox {
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 53;
}

#slvj-close-icon:before {
  font-family: "fontawesome";
  color: #fff;
  content: "\\f00d";
  font-size: 22px;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  z-index: 99999;
  height: 22px;
  width: 22px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

/* --------- crowns ---------- */
#crowns a {
  display: block;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}

#crowns img {
  display: inline-block;
}

.crown-overlay {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-out;
}

#crowns a:hover .crown-overlay {
  opacity: 1;
}

.crown-overlay span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 100%;
  text-align: center;
  display: inline-block;
}

/* --------- 6.6 Clients ---------- */
#clients a {
  display: block;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}

#clients img {
  display: inline-block;
  padding: 15px 25px;
}

.client-overlay {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-out;
}

#clients a:hover .client-overlay {
  opacity: 1;
}

.client-overlay span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 100%;
  text-align: center;
  display: inline-block;
}

/* --------- 6.7 Pricing Table ---------- */
.pricing-block-content {
  background: #fff;
  padding: 25px 0 25px 0;
  margin: 0 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  border: 10px solid #fff;
}

.pricing-block ul {
  list-style: none;
  margin: 25px 0 25px 0;
}

.pricing-block li {
  padding: 14px 0;
  border-bottom: 1px dotted #e1e1e1;
}

.pricing-block li:last-of-type {
  border: none;
}

.pricing-block h3 {
  font-size: 17px;
  text-transform: uppercase;
  padding-bottom: 0;
}

.pricing-sub {
  font-style: italic;
  color: #ccc;
  margin: 0 0 25px 0;
}

/*Price*/
.pricing {
  background: #f5f5f5;
  padding: 25px;
  position: relative;
}

.price {
  display: inline-block;
  font-size: 62px;
  font-weight: 700;
  position: relative;
}

.price span {
  position: absolute;
  top: 0;
  left: -20px;
  font-size: 22px;
}

.pricing p {
  font-style: italic;
  color: #b4b4b4;
  line-height: auto;
  margin: 0;
}

/*------------------------------------------------------------------------------------------*/
/* 7. Footer */
/*------------------------------------------------------------------------------------------*/
#landing-footer {
  clear: both;
}

#landing-footer .row {
  padding: 0;
}

#landing-footer p {
  margin: 0;
  padding-left: 35px;
}

#landing-footer ul {
  list-style: none;
  text-align: right;
}

#landing-footer li {
  display: inline-block;
}

/* Scroll Up */
#scrollUp {
  bottom: 15px;
  right: 30px;
  width: 70px;
  height: 80px;
  margin-bottom: -10px;
  padding: 0 5px 20px 5px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: margin-bottom 150ms linear;
}

#scrollUp:hover {
  margin-bottom: 0;
}

#scrollUp:before {
  background: #ccc;
  font-family: "fontawesome";
  font-size: 2.4em;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #fff;
  width: 45px;
  height: 45px;
  display: inline-block;
  line-height: 45px;
  content: "\\f106";
  opacity: 1;
}

/*Preloader*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff; /* change if the mask should have another color then white */
  z-index: 99999; /* makes sure it stays on top */
}

#status {
  width: 110px;
  height: 110px;
  position: absolute;
  left: 50%; /* centers the loading animation horizontally one the screen */
  top: 50%; /* centers the loading animation vertically one the screen */
  background-position: center;
  margin: -55px 0 0 -55px; /* is width and height divided by two */
  text-align: center;
}

/*!
* Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
* Copyright 2015 Daniel Cardoso <@DanielCardoso>
* Licensed under MIT
*/
.la-ball-triangle-path,
.la-ball-triangle-path > div {
  position: relative;
  box-sizing: border-box;
}

.la-ball-triangle-path {
  display: block;
  font-size: 0;
  color: #fff;
}

.la-ball-triangle-path.la-dark {
  color: #333;
}

.la-ball-triangle-path > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.la-ball-triangle-path {
  width: 32px;
  height: 32px;
}

.la-ball-triangle-path > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.la-ball-triangle-path > div:nth-child(1) {
  animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
}

.la-ball-triangle-path > div:nth-child(2) {
  animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
}

.la-ball-triangle-path > div:nth-child(3) {
  animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
}

.la-ball-triangle-path.la-sm {
  width: 16px;
  height: 16px;
}

.la-ball-triangle-path.la-sm > div {
  width: 4px;
  height: 4px;
}

.la-ball-triangle-path.la-2x {
  width: 64px;
  height: 64px;
}

.la-ball-triangle-path.la-2x > div {
  width: 20px;
  height: 20px;
}

.la-ball-triangle-path.la-3x {
  width: 96px;
  height: 96px;
}

.la-ball-triangle-path.la-3x > div {
  width: 30px;
  height: 30px;
}

/*
* Animations
*/
@keyframes ball-triangle-path-ball-one {
  0% {
    transform: translate(0, 220%);
  }
  17% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
    transform: translate(110%, 0);
  }
  50% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
    transform: translate(220%, 220%);
  }
  83% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
    transform: translate(0, 220%);
  }
}
@keyframes ball-triangle-path-ball-two {
  0% {
    transform: translate(110%, 0);
  }
  17% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
    transform: translate(220%, 220%);
  }
  50% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
    transform: translate(0, 220%);
  }
  83% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
    transform: translate(110%, 0);
  }
}
@keyframes ball-triangle-path-ball-tree {
  0% {
    transform: translate(220%, 220%);
  }
  17% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
    transform: translate(0, 220%);
  }
  50% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
    transform: translate(110%, 0);
  }
  83% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
    transform: translate(220%, 220%);
  }
}
/*------------------------------------------------------------------------------------------*/
/* Responsive Elements */
/*------------------------------------------------------------------------------------------*/
/* =Media Queries for Nav
===============================*/
@media all and (max-width: 1024px) {
  #nav-trigger {
    display: block;
  }
  nav#nav-main {
    display: none;
  }
  nav#nav-mobile {
    display: block;
  }
  nav#nav-mobile li {
    display: block;
  }
  #header aside {
    display: none;
  }
}
/* Landscape mobile & down
===============================*/
@media (max-width: 480px) {
  #wrapper {
    margin: 0;
    padding: 0;
  }
  .page-border,
  #scrollUp,
  #scrollUp:before {
    display: none;
  }
  .row {
    padding: 15px !important;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-2-3,
  .col-3-4,
  .col-9-10,
  .col-61,
  .col-38,
  .row {
    width: 100%;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-2-3,
  .col-3-4,
  .col-9-10,
  .col-61,
  .col-38 {
    padding-right: 0;
    padding-left: 0;
  }
  /*-----------------Header Elements-----------------*/
  #header .row {
    padding: 0 15px !important;
  }
  #header.nav-solid [class*=col-] {
    padding: 0;
  }
  /*Logo*/
  #logo h2 {
    padding: 0;
  }
  /* Social */
  /* #header aside {
      clear: both;
      padding: 0;
  } */
  #header ul.social-icons {
    margin-top: 0;
  }
  #banner-content.row {
    padding-top: 85px !important;
  }
  /*-----------------Sections-----------------*/
  /* Call to Action*/
  .call-to-action {
    padding-bottom: 25px;
  }
  /* Video */
  .slvj-lightbox iframe,
  .slvj-lightbox object,
  .slvj-lightbox embed {
    height: 270px !important;
  }
  /* Footer */
  #landing-footer #copyright {
    float: left;
    width: 50%;
  }
  #landing-footer .social-icons {
    float: right;
    width: 50%;
  }
  /*-----------------Typography-----------------*/
  h1 {
    font-size: 38px;
  }
  #banner h1 {
    font-size: 48px;
  }
  /* Hide Elements */
  a#scrollUp {
    display: none !important;
  }
}
/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
  #wrapper {
    margin: 0;
    padding: 0;
  }
  .page-border,
  #scrollUp,
  #scrollUp:before {
    display: none;
  }
  .row {
    padding: 15px 0 !important;
  }
  .col-1,
  .col-2,
  .col-5,
  .col-7,
  .col-9,
  .col-11,
  .col-2-3,
  .col-3-4,
  .col-61,
  .col-38,
  .row {
    width: 100%;
  }
  .col-3,
  .col-4,
  .col-6,
  .col-8,
  .col-10,
  .col-12 {
    width: 50%;
  }
  /*-----------------Header Elements-----------------*/
  #header .row {
    padding: 0 !important;
  }
  #header aside {
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 60px;
    padding-top: 3px;
    padding-right: 5px;
  }
  #header.nav-solid aside {
    top: 20px;
  }
  #header aside ul {
    margin-top: 0 !important;
    padding-top: 6px;
  }
  #banner-content.row {
    padding-top: 85px !important;
  }
  /*Navigation*/
  nav#nav-mobile ul {
    margin-left: -40px;
    margin-right: -40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  /*-----------------Sections-----------------*/
  /* Video */
  .slvj-lightbox iframe,
  .slvj-lightbox object,
  .slvj-lightbox embed {
    height: 370px !important;
  }
  /* Footer */
  #landing-footer #copyright {
    float: left;
    width: 50%;
  }
  #landing-footer .social-icons {
    float: right;
    width: 50%;
  }
}
/* Landscape Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1024px) {
  #wrapper {
    margin: 0;
    padding: 0;
  }
  .page-border {
    display: none;
  }
  .big-padding-top {
    padding-top: 45px !important;
  }
  /*-----------------Header Elements-----------------*/
  #header aside {
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 60px;
    padding-top: 3px;
    padding-right: 5px;
  }
  #header.nav-solid aside {
    top: 20px;
  }
  #header aside ul {
    margin-top: 0 !important;
    padding-top: 6px;
  }
  /*Navigation*/
  nav#nav-mobile ul {
    margin-left: -40px;
    margin-right: -40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  /*-----------------Sections-----------------*/
  /* Video */
  .slvj-lightbox iframe,
  .slvj-lightbox object,
  .slvj-lightbox embed {
    height: 432px !important;
  }
}
/* Yoski Landing Page Dynamic Style Index
1. Website Default Styling
2. Navigation
3. Primary and Secondary Colors
4. Banner
5. Typography
6. Buttons
7. Footer
/*------------------------------------------------------------------------------------------*/
/* 1. Website Default Styling */
/*------------------------------------------------------------------------------------------*/
body {
  background: #fff;
}

/* Default Link Color */
a,
.la-ball-triangle-path {
  color: #d2b356;
}

a:hover,
#header.nav-solid nav a:hover {
  color: #d2b356;
}

/* Default Icon Color */
.icon i {
  color: #d2b356;
}

/* Border Color */
#banner .section-heading:before,
.testimonial.classic footer:before {
  background: #d2b356;
}

.pricing-block-content:hover {
  border-color: #d2b356;
}

#banner .section-heading:before,
.coin.classic footer:before {
  background: #d2b356;
}

/*------------------------------------------------------------------------------------------*/
/* 2. Navigation */
/*------------------------------------------------------------------------------------------*/
/* Transparent Navigation Color on a Banner */
#header nav a,
#header i {
  color: #fff;
}

/* Navigation Colors when the Navigation is sticky and solid */
#header.nav-solid,
#header.nav-solid a,
#header.nav-solid i,
#nav-mobile ul li a {
  color: #fff;
}

/* Navigation Active State */
#header.nav-solid .active {
  color: #d2b356;
  border-color: #d2b356;
}

/*------------------------------------------------------------------------------------------*/
/* 3. Primary and Secondary Colors */
/*------------------------------------------------------------------------------------------*/
/* Primary Background and Text Colors */
.primary-color,
.featured .pricing {
  background-color: #d2b356;
}

.primary-color,
.primary-color .section-title,
.primary-color .section-subtitle,
.featured .pricing,
.featured .pricing p {
  color: #fff;
}

.section-heading h2:after {
  background: #d2b356;
  content: "";
  display: block;
  width: 30px;
  height: 5px;
  margin-top: 30px;
}

.text-center .section-heading h2:after {
  margin: 30px auto 25px auto;
}

/* Primary Icon Colors */
.primary-color .icon i,
.primary-color i {
  color: #fff;
}

/* Secondary Background and Text Colors */
.secondary-color {
  background-color: #f5f5f5;
}

/*------------------------------------------------------------------------------------------*/
/* 4. Banner */
/*------------------------------------------------------------------------------------------*/
/* Banner Background and Text Colors */
#banner {
  background: url('homepage.png') no-repeat right;
  background-size: auto;
  background-position-x: 700px;
}

/*------------------------------------------------------------------------------------------*/
/* 5. Typography */
/*------------------------------------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 15px;
  font-weight: normal;
  color: #111;
}

/* Logo, if you are using Fonts as Logo and not image
#logo h1 {
  font-family:;
  font-size:;
  font-weight:;
  color:;
}
#logo h2 {
  font-family:;
  font-size:;
  font-weight:;
  color:;
}
*/
/* Banner Typography */
#banner h1 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 62px;
  line-height: 60px;
  font-weight: 800;
  color: #111;
}

#banner h2 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 18px;
  font-weight: 300;
  color: #111;
}

/* Section Title and Subtitle */
.section-title {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 34px;
  font-weight: 700;
  color: #111;
}

.section-subtitle {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 16px;
  font-weight: 300;
  color: #9c9c9c;
}

/* Testimonial */
.testimonial q {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 17px;
  font-weight: 300;
}

.testimonial.classic q,
.testimonial.classic footer {
  color: #111;
}

/* coin */
.coin q {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 17px;
  font-weight: 300;
}

.coin.classic q,
.coin.classic footer {
  color: #111;
}

/* Standard Headings h1-h6 */
h1 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 40px;
  font-weight: 300;
  color: #111;
}

h2 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 34px;
  font-weight: 300;
  color: #111;
}

h3 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 30px;
  font-weight: 700;
  color: #111;
}

h4 {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 18px;
  font-weight: 400;
  color: #111;
}

/*------------------------------------------------------------------------------------------*/
/* 6. Buttons */
/*------------------------------------------------------------------------------------------*/
/* ----------Default Buttons---------- */
/* Button Text */
/* ----------Banner Buttons---------- */
/* Button Text */
#banner .button {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 16px;
  color: #111;
}

/* Button Color */
#banner .button {
  border-color: #111;
}

/* Button Hover Color */
#banner .button:hover {
  color: #d2b356;
  border-color: #d2b356;
}

/*------------------------------------------------------------------------------------------*/
/* 7. Footer */
/*------------------------------------------------------------------------------------------*/
#landing-footer,
#landing-footer p,
#landing-footer a {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  font-size: 12px;
  font-weight: normal;
  color: #999;
}

/* Footer Icon Color */
#landing-footer i {
  color: #999;
}`, "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./node_modules/ngx-red-zoom/styles/_base.scss","webpack://./node_modules/ngx-red-zoom/styles/_style-magnifier.scss","webpack://./node_modules/ngx-red-zoom/styles/mixins/_style-magnifier.scss","webpack://./node_modules/ngx-red-zoom/styles/mixins/_common.scss","webpack://./node_modules/ngx-red-zoom/styles/_style-window.scss","webpack://./node_modules/ngx-red-zoom/styles/mixins/_style-window.scss","webpack://./node_modules/ngx-red-zoom/styles/_style-overlay.scss","webpack://./node_modules/ngx-red-zoom/styles/mixins/_style-overlay.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n*,\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\nblockquote,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  direction: ltr;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-font-smoothing: antialiased;\r\n  overflow-x: hidden;\r\n}\r\n\r\np {\r\n  line-height: 25px;\r\n}\r\n\r\n.row img {\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.spacer {\r\n  margin-left: 2.5em;\r\n}\r\n\r\n.align-top {\r\n\r\n  flex-wrap: wrap;\r\n\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n.container {\r\n\r\n  border: 5px solid rgb(15, 13, 15);\r\n  border-radius: .5em;\r\n  padding: 10px;\r\n  justify-content: space-between;\r\n  align-content: space-between;\r\n}\r\n\r\n.item {\r\n  padding: 10px;\r\n  background-color: rgba(111,41,97,.3);\r\n  border: 2px solid rgba(111,41,97,.5);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  line-height: inherit;\r\n  -webkit-transition: opacity 0.3s ease-out;\r\n  -moz-transition: opacity 0.3s ease-out;\r\n  -o-transition: opacity 0.3s ease-out;\r\n  transition: opacity 0.3s ease-out;\r\n}\r\n\r\niframe {\r\n  border: 0 !important;\r\n}\r\n\r\n.parallax-window {\r\n  min-height: 400px;\r\n  background: transparent;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n.red-zoom__lens-image {\r\n  --red-zoom-min-scale-factor: 1;\r\n  --red-zoom-max-scale-factor: 2;\r\n\r\n  min-width: calc(var(--red-zoom-thumb-w) * var(--red-zoom-min-scale-factor));\r\n  min-height: calc(var(--red-zoom-thumb-h) * var(--red-zoom-min-scale-factor));\r\n  max-width: calc(var(--red-zoom-thumb-w) * var(--red-zoom-max-scale-factor));\r\n  max-height: calc(var(--red-zoom-thumb-h) * var(--red-zoom-max-scale-factor));\r\n}\r\n\r\n/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n\r\n@import '../node_modules/ngx-red-zoom/styles/base';\r\n@import '../node_modules/ngx-red-zoom/styles/style-magnifier';\r\n@import '../node_modules/ngx-red-zoom/styles/style-window';\r\n@import '../node_modules/ngx-red-zoom/styles/style-overlay';\r\n\r\n\r\n/* Page Border */\r\n\r\n.page-border {\r\n  position: fixed;\r\n  z-index: 999999;\r\n  pointer-events: none;\r\n}\r\n\r\n.page-border .bottom-border,\r\n.page-border .left-border,\r\n.page-border .right-border,\r\n.page-border .top-border {\r\n  background: #f3f3ef;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\n.page-border > .top-border,\r\n.page-border > .right-border,\r\n.page-border > .bottom-border,\r\n.page-border > .left-border {\r\n  padding: 11px;\r\n  background: #ccc;\r\n}\r\n\r\n.page-border .bottom-border,\r\n.page-border .top-border {\r\n  width: 100%;\r\n  padding: 10px;\r\n  left: 0;\r\n}\r\n\r\n.page-border .left-border,\r\n.page-border .right-border {\r\n  padding: 10px;\r\n  height: 100%;\r\n  top: 0;\r\n}\r\n\r\n.page-border .top-border {\r\n  top: 0;\r\n}\r\n\r\n.page-border .right-border {\r\n  right: 0;\r\n}\r\n\r\n.page-border .bottom-border {\r\n  bottom: 0;\r\n}\r\n\r\n.page-border .left-border {\r\n  left: 0;\r\n}\r\n\r\n#wrapper {\r\n  margin: 0 15px;\r\n  padding: 15px 0;\r\n  position: relative;\r\n}\r\n\r\n/* --------- 1.1 Input Elements ---------- */\r\n\r\ninput,\r\ntextarea {\r\n  border: 1px solid #e1e1e1;\r\n  padding: 10px;\r\n  -webkit-transition: all 0.3s linear;\r\n  -moz-transition: all 0.3s linear;\r\n  transition: all 0.3s linear;\r\n  border-radius: 3px;\r\n}\r\n\r\ninput {\r\n  height: 40px;\r\n  margin: 3px 0;\r\n  outline: none;\r\n  line-height: normal;\r\n  font-size: 14px;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\nselect {\r\n  border: 1px solid #e1e1e1;\r\n  height: 40px;\r\n  padding: 5px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 2. Layout Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\nsection {\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Rows and Columns */\r\n\r\n.row {\r\n  max-width: 1245px;\r\n  margin: 0 auto;\r\n  padding: 75px 0;\r\n  position: relative;\r\n}\r\n\r\n.no-padding-bottom .row,\r\n.no-padding-bottom div,\r\n.no-padding-bottom.row {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.no-padding-top.row,\r\n.no-padding-top div {\r\n  padding-top: 0;\r\n}\r\n\r\n.big-padding-top {\r\n  padding-top: 75px !important;\r\n}\r\n\r\n.big-padding-bottom {\r\n  padding-bottom: 85px !important;\r\n}\r\n\r\n/* Targets all elements */\r\n\r\n[class*=\"col-\"] {\r\n  float: left;\r\n  padding: 20px;\r\n}\r\n\r\n#clients .col-2-3 [class*=\"col-\"] {\r\n  padding: 0;\r\n}\r\n\r\n/* Clearfix */\r\n\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n  background-color: #202020;\r\n}\r\n\r\n/* Main Widths */\r\n\r\n.col-1 {\r\n  width: 100%;\r\n  /* padding: 20px !important; */\r\n}\r\n\r\n.col-2 {\r\n  width: 50%;\r\n}\r\n\r\n.col-3 {\r\n  width: 33.33%;\r\n}\r\n\r\n.col-4 {\r\n  width: 25%;\r\n}\r\n\r\n.col-5 {\r\n  width: 20%;\r\n}\r\n\r\n.col-6 {\r\n  width: 16.6666666667%;\r\n}\r\n\r\n.col-7 {\r\n  width: 14.2857142857%;\r\n}\r\n\r\n.col-8 {\r\n  width: 12.5%;\r\n}\r\n\r\n.col-9 {\r\n  width: 11.1111111111%;\r\n}\r\n\r\n.col-10 {\r\n  width: 10%;\r\n}\r\n\r\n.col-11 {\r\n  width: 9.09090909091%;\r\n}\r\n\r\n.col-12 {\r\n  width: 8.33%;\r\n}\r\n\r\n.col-2-3 {\r\n  width: 66.66%;\r\n}\r\n\r\n.col-3-4 {\r\n  width: 75%;\r\n}\r\n\r\n.col-9-10 {\r\n  width: 90%;\r\n}\r\n\r\n/* Golden Ratio */\r\n.col-61 {\r\n  width: 61.8%;\r\n}\r\n\r\n.col-38 {\r\n  width: 38.2%;\r\n  padding: 20px !important;\r\n}\r\n\r\n/* --------- 2.1 Header --------- */\r\n\r\n#header {\r\n  height: 71px !important;\r\n  overflow: visible;\r\n\r\n  z-index: 9999;\r\n  width: 100%;\r\n  position: absolute !important;\r\n}\r\n\r\n#header .row {\r\n  padding: 0;\r\n}\r\n\r\n/* #header aside {\r\n  text-align: right;\r\n} */\r\n\r\n#header ul {\r\n  text-align: center;\r\n}\r\n\r\n#header li {\r\n  display: inline-block;\r\n  list-style: none;\r\n  margin: 0;\r\n}\r\n\r\n/* --------- 2.2 Logo ---------- */\r\n\r\n#logo {\r\n  float: left;\r\n  height: 71px;\r\n  line-height: 66px;\r\n  margin-right: 15px;\r\n}\r\n\r\n#logo h1,\r\n#logo h2 {\r\n  display: inline-block;\r\n}\r\n\r\n#banner #logo h1 {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n  font-weight: 900;\r\n  padding: 0;\r\n}\r\n\r\n#logo h2 {\r\n  font-size: 18px;\r\n  padding: 0;\r\n}\r\n\r\n#logo img {\r\n\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n}\r\n\r\n#navigation-logo {\r\n  display: none;\r\n}\r\n\r\n.nav-solid #logo #banner-logo {\r\n  display: none;\r\n  height: 71px;\r\n}\r\n\r\n.nav-solid #logo #navigation-logo {\r\n  display: inline-block;\r\n  padding-left: 15px !important;\r\n}\r\n\r\n/* --------- 2.3 Buttons ---------- */\r\n\r\n.call-to-action {\r\n  padding: 35px 0 35px 0;\r\n}\r\n\r\n/*Style*/\r\n\r\n.button {\r\n  font-size: 16px;\r\n  margin: 35px 0;\r\n  padding: 11px 16px;\r\n  -webkit-transition: all 0.3s linear;\r\n  -moz-transition: all 0.3s linear;\r\n  transition: all 0.3s linear;\r\n  display: inline-block;\r\n  border-width: 3px;\r\n  border-style: solid;\r\n}\r\n\r\n/* Play Button */\r\n\r\n#video-section {\r\n  position: relative;\r\n}\r\n\r\n.play-video {\r\n  height: 110px;\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -110px;\r\n  width: 100%;\r\n}\r\n\r\n.play-icon {\r\n  display: inline-block;\r\n  font-size: 0px;\r\n  cursor: pointer;\r\n  margin: 45px auto;\r\n  width: 110px;\r\n  height: 110px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.play-icon:after {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\n\r\n/* --------- 2.4 Navigation ---------- */\r\n\r\n#header {\r\n  font-size: 13px;\r\n\r\n}\r\n\r\n#header aside {\r\n  float: right;\r\n}\r\n\r\n#header nav ul {\r\n  text-transform: uppercase;\r\n}\r\n\r\n#header nav a {\r\n  height: 71px;\r\n  line-height: 71px;\r\n  display: block;\r\n  padding: 0 10px;\r\n}\r\n\r\n#header nav a:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n/*Navigation Solid*/\r\n#header.nav-solid [class*=\"col-\"] {\r\n  padding: 0 20px;\r\n    background-color: #202020;\r\n}\r\n\r\n#header.nav-solid {\r\n  background: #fff;\r\n  box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);\r\n  position: fixed !important;\r\n  left: 0;\r\n}\r\n#header.nav-solid nav a {\r\n  border-bottom: 3px solid;\r\n  border-color: #fff;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n#header.nav-solid nav a:hover {\r\n  opacity: 1;\r\n\r\n}\r\n\r\n/* Social Elements when Solid*/\r\n\r\n#header.nav-solid .social-icons a {\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n  opacity: 0.5;\r\n}\r\n\r\n#header.nav-solid .social-icons a:hover {\r\n  opacity: 1;\r\n  color: #e4473c;\r\n}\r\n\r\n/* Responsive Nav Styling */\r\n\r\n#nav-trigger {\r\n  display: none;\r\n  text-align: right;\r\n}\r\n\r\n#nav-trigger span {\r\n  display: inline-block;\r\n  width: 38px;\r\n  height: 71px;\r\n  color: #111;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  text-align: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n#nav-trigger span:after {\r\n  font-family: \"fontAwesome\";\r\n  display: inline-block;\r\n  width: 38px;\r\n  height: 71px;\r\n  line-height: 75px;\r\n  text-align: center;\r\n  content: \"\\f0c9\";\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n}\r\n\r\n#nav-trigger span.open:after {\r\n  content: \"\\f00d\";\r\n}\r\n\r\n#nav-trigger span:hover,\r\n.nav-solid #nav-trigger span.open:hover,\r\n.nav-solid #nav-trigger span:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n#nav-trigger span.open,\r\n#nav-trigger span.open:hover {\r\n  color: #111;\r\n}\r\n\r\n.nav-solid #nav-trigger span.open:hover {\r\n  color: #999;\r\n}\r\n\r\n.nav-solid #nav-trigger span {\r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n\r\nnav#nav-mobile {\r\n  position: relative;\r\n  display: none;\r\n}\r\n\r\nnav#nav-mobile ul {\r\n  display: block;\r\n  list-style-type: none;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: -20px;\r\n  margin-right: -20px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nnav#nav-mobile ul:after {\r\n  display: none;\r\n}\r\n\r\nnav#nav-mobile li {\r\n  margin: 0 20px;\r\n  float: none;\r\n  text-align: left;\r\n  border-bottom: 1px solid #e1e1e1;\r\n}\r\n\r\nnav#nav-mobile li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-solid nav#nav-mobile li {\r\n  border-top: 1px solid #e1e1e1;\r\n  border-bottom: none;\r\n}\r\n\r\nnav#nav-mobile a {\r\n  display: block;\r\n  padding: 12px 0;\r\n  color: #333;\r\n  width: 100%;\r\n  height: auto;\r\n  line-height: normal;\r\n  display: block;\r\n  border-bottom: none !important;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\nnav#nav-mobile a:hover {\r\n  background: #fafafa;\r\n  opacity: 1;\r\n}\r\n\r\n/* --------- 2.5 Social Elements ---------- */\r\n\r\n#header .col-4 {\r\n  text-align: right;\r\n}\r\n\r\n.coinTypeBlock {\r\n  height: 150px;\r\n\r\n}\r\n\r\n.social-icons a {\r\n  display: inline-block;\r\n  width: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.social-icons a:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.social-icons span {\r\n  display: none;\r\n}\r\n\r\n#header .social-icons {\r\n  margin-top: 27px;\r\n}\r\n\r\n/* --------- 2.6 Images ---------- */\r\n\r\n/*Alignment*/\r\n\r\nimg {\r\n  vertical-align: top;\r\n}\r\n\r\na img {\r\n  border: none;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\na img:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n/* --------- 2.7 Positioning ---------- */\r\n\r\n/*Alignment*/\r\n\r\n.pull-right {\r\n  padding-left: 15px;\r\n}\r\n\r\n.pull-left {\r\n  padding-right: 15px;\r\n}\r\n\r\n.pull-down {\r\n  padding-top: 30px;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 3. Fonts */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\nh1 {\r\n  padding: 20px 0;\r\n}\r\n\r\nh2 {\r\n  padding: 14px 0;\r\n}\r\n\r\nh3 {\r\n  padding: 10px 0 0 15px;\r\n}\r\n\r\nh4 {\r\n  padding: 7px 0;\r\n}\r\n\r\n/* Text Alignment */\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/* Section Headings */\r\n\r\n.section-heading {\r\n  padding: 0;\r\n}\r\n\r\n.section-subtitle {\r\n  font-size: 18px;\r\n  padding-top: 0;\r\n}\r\n\r\n.section-heading h3 {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #ccc;\r\n  letter-spacing: 2px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 4. Banner */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n#banner {\r\n  background-size: cover;\r\n}\r\n\r\n#banner-content.row {\r\n  padding-top: 170px;\r\n  padding-bottom: 100px;\r\n  padding-left: 240px;\r\n}\r\n\r\n#banner h1 {\r\n  padding-top: 5%;\r\n}\r\n\r\n#banner .section-heading:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n  margin-left: 15px;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 5. Content Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* --------- 5.1 Icons ---------- */\r\n\r\n/*Font Icon sizes*/\r\n\r\n.fa-1x {\r\n  font-size: 15px !important;\r\n}\r\n\r\n/*Icon Block*/\r\n\r\n.icon-block {\r\n  position: relative;\r\n}\r\n\r\n.icon-block h4 {\r\n  font-weight: bold;\r\n  padding-top: 0;\r\n}\r\n\r\n.icon-block .icon {\r\n  position: absolute;\r\n}\r\n\r\n.icon-block p {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Icon Left*/\r\n\r\n.icon-left .icon {\r\n  left: 15;\r\n}\r\n\r\n.icon-left .icon-block-description {\r\n  padding-left: 53px;\r\n}\r\n\r\n/* Icon Right */\r\n\r\n.icon-right .icon {\r\n  right: 15;\r\n}\r\n\r\n.icon-right .icon-block-description {\r\n  padding-right: 53px;\r\n}\r\n\r\n/* Icon Above */\r\n\r\n.icon-top {\r\n  display: block;\r\n}\r\n\r\n.icon-top .icon {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.icon-top .icon-block-description {\r\n  padding-top: 25px;\r\n}\r\n\r\n/* --------- 5.2 Parallax Elements ---------- */\r\n\r\n/* --------- 5.3 Divider ---------- */\r\n\r\n.divider {\r\n  position: relative;\r\n  width: 40%;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  margin: 10px auto 5px auto;\r\n  clear: both;\r\n  text-align: center;\r\n}\r\n\r\n.divider i {\r\n  background: #fff;\r\n  position: relative;\r\n  top: -11px;\r\n  padding: 0 5px 0 5px;\r\n  color: #e1e1e1;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 6. Landing Page Sections */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* --------- 6.1 Introduction ---------- */\r\n\r\n.introduction img.featured {\r\n  padding: 55px 0 0 0;\r\n}\r\n\r\n/* --------- 6.2 Features ---------- */\r\n\r\n.features div:nth-child(4) {\r\n  clear: both;\r\n}\r\n\r\n/* --------- coin ---------- */\r\n\r\n\r\n\r\n.coin {\r\n  background: #fff;\r\n  padding: 25px 0 25px 0;\r\n  margin: 0 15px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  border: 10px solid #fff;\r\n}\r\n\r\n.coin footer {\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Style Classic - Avatar above coin */\r\n\r\n.coin.classic img {\r\n  display: inline-block;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.coin.classic q {\r\n  display: block;\r\n}\r\n\r\n.coin.classic footer:before {\r\n  display: block;\r\n  content: \"\";\r\n  width: 80px;\r\n  height: 4px;\r\n  margin: 10px auto 15px auto;\r\n}\r\n\r\n/* --------- 6.3 Testimonials ---------- */\r\n\r\n.testimonial {\r\n  padding: 15px;\r\n}\r\n\r\nblockquote {\r\n  position: relative;\r\n}\r\n\r\n.testimonial img {\r\n  max-height: 120px;\r\n  border-radius: 250em;\r\n}\r\n\r\n.testimonial footer {\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Style Classic - Avatar above Testimonial */\r\n\r\n.testimonial.classic img {\r\n  display: inline-block;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.testimonial.classic q {\r\n  display: block;\r\n}\r\n\r\n.testimonial.classic footer:before {\r\n  display: block;\r\n  content: \"\";\r\n  width: 30px;\r\n  height: 4px;\r\n  margin: 10px auto 15px auto;\r\n}\r\n\r\n/* Style Big */\r\n\r\n/* --------- 6.4 Gallery ---------- */\r\n\r\n#gallery img {\r\n  max-height: 300px;\r\n}\r\n\r\n#gallery [class*=\"col-\"] {\r\n  padding: 0;\r\n}\r\n\r\n#gallery a {\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n#gallery a:hover img {\r\n  opacity: 0.15;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n#gallery a:before {\r\n  font-size: 2.2em;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  content: \"+\";\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 100em;\r\n  display: block;\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  line-height: 72px;\r\n  margin: -35px 0 0 -35px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.2s linear;\r\n  -moz-transition: all 0.2s linear;\r\n  transition: all 0.2s linear;\r\n  /* vertical-align: middle; */\r\n}\r\n\r\n#gallery a:hover:before {\r\n  opacity: 1;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.featherlight iframe {\r\n  /* styling */\r\n  border: none;\r\n}\r\n\r\n\r\n/* Always display arrows on touch devices */\r\n@media only screen and (max-device-width: 1024px) {\r\n  .featherlight-next:hover,\r\n  .featherlight-previous:hover {\r\n    background: none;\r\n  }\r\n\r\n  .featherlight-next span,\r\n  .featherlight-previous span {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* --------- 6.5 Video ---------- */\r\n\r\n\r\n.video_container,\r\n.easyContainer {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16/9 ratio */\r\n  margin: 0;\r\n  padding-top: 0; /* IE6 workaround*/\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.video_container iframe,\r\n.video_container object,\r\n.video_container embed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n\r\n.slvj-lightbox iframe,\r\n.slvj-lightbox object,\r\n.slvj-lightbox embed {\r\n  width: 100% !important;\r\n  height: 529px !important;\r\n}\r\n\r\n#slvj-window {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  z-index: 9999999999;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n#slvj-window,\r\n#slvj-window * {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#slvj-background-close {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  z-index: 31;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n#slvj-back-lightbox {\r\n  max-width: 940px;\r\n  max-height: 529px;\r\n  z-index: 32;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.slvj-lightbox {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  z-index: 53;\r\n}\r\n\r\n#slvj-close-icon:before {\r\n  font-family: \"fontawesome\";\r\n  color: #fff;\r\n  content: \"\\f00d\";\r\n  font-size: 22px;\r\n  opacity: 0.5;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n  z-index: 99999;\r\n  height: 22px;\r\n  width: 22px;\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* --------- crowns ---------- */\r\n\r\n#crowns a {\r\n  display: block;\r\n\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n#crowns img {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.crown-overlay {\r\n  background: rgba(0, 0, 0, 0.8);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n#crowns a:hover .crown-overlay {\r\n  opacity: 1;\r\n}\r\n\r\n.crown-overlay span {\r\n  position: absolute;\r\n  top: 48%;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n/* --------- 6.6 Clients ---------- */\r\n\r\n#clients a {\r\n  display: block;\r\n  text-align: center;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n#clients img {\r\n  display: inline-block;\r\n  padding: 15px 25px;\r\n}\r\n\r\n.client-overlay {\r\n  background: rgba(0, 0, 0, 0.8);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s ease-out;\r\n  -moz-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n#clients a:hover .client-overlay {\r\n  opacity: 1;\r\n}\r\n\r\n.client-overlay span {\r\n  position: absolute;\r\n  top: 48%;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n/* --------- 6.7 Pricing Table ---------- */\r\n\r\n.pricing-block-content {\r\n  background: #fff;\r\n  padding: 25px 0 25px 0;\r\n  margin: 0 15px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  position: relative;\r\n  border: 10px solid #fff;\r\n}\r\n\r\n.pricing-block ul {\r\n  list-style: none;\r\n  margin: 25px 0 25px 0;\r\n}\r\n\r\n.pricing-block li {\r\n  padding: 14px 0;\r\n  border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.pricing-block li:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.pricing-block h3 {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.pricing-sub {\r\n  font-style: italic;\r\n  color: #ccc;\r\n  margin: 0 0 25px 0;\r\n}\r\n\r\n/*Price*/\r\n\r\n.pricing {\r\n  background: #f5f5f5;\r\n  padding: 25px;\r\n  position: relative;\r\n}\r\n\r\n.price {\r\n  display: inline-block;\r\n  font-size: 62px;\r\n  font-weight: 700;\r\n  position: relative;\r\n}\r\n\r\n.price span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: -20px;\r\n  font-size: 22px;\r\n}\r\n\r\n.pricing p {\r\n  font-style: italic;\r\n  color: #b4b4b4;\r\n  line-height: auto;\r\n  margin: 0;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 7. Footer */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n#landing-footer {\r\n  clear: both;\r\n}\r\n\r\n#landing-footer .row {\r\n  padding: 0;\r\n}\r\n\r\n#landing-footer p {\r\n  margin: 0;\r\n  padding-left: 35px;\r\n}\r\n\r\n#landing-footer ul {\r\n  list-style: none;\r\n  text-align: right;\r\n}\r\n\r\n#landing-footer li {\r\n  display: inline-block;\r\n}\r\n\r\n/* Scroll Up */\r\n\r\n#scrollUp {\r\n  bottom: 15px;\r\n  right: 30px;\r\n  width: 70px;\r\n  height: 80px;\r\n  margin-bottom: -10px;\r\n  padding: 0 5px 20px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  -webkit-transition: margin-bottom 150ms linear;\r\n  -moz-transition: margin-bottom 150ms linear;\r\n  -o-transition: margin-bottom 150ms linear;\r\n  transition: margin-bottom 150ms linear;\r\n}\r\n\r\n#scrollUp:hover {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#scrollUp:before {\r\n  background: #ccc;\r\n  font-family: \"fontawesome\";\r\n  font-size: 2.4em;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  color: #fff;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: inline-block;\r\n  line-height: 45px;\r\n  content: \"\\f106\";\r\n  opacity: 1;\r\n}\r\n\r\n/*Preloader*/\r\n\r\n#preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #fff; /* change if the mask should have another color then white */\r\n  z-index: 99999; /* makes sure it stays on top */\r\n}\r\n\r\n#status {\r\n  width: 110px;\r\n  height: 110px;\r\n  position: absolute;\r\n  left: 50%; /* centers the loading animation horizontally one the screen */\r\n  top: 50%; /* centers the loading animation vertically one the screen */\r\n  background-position: center;\r\n  margin: -55px 0 0 -55px; /* is width and height divided by two */\r\n  text-align: center;\r\n}\r\n\r\n/*!\r\n* Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\r\n* Copyright 2015 Daniel Cardoso <@DanielCardoso>\r\n* Licensed under MIT\r\n*/\r\n.la-ball-triangle-path,\r\n.la-ball-triangle-path > div {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.la-ball-triangle-path {\r\n  display: block;\r\n  font-size: 0;\r\n  color: #fff;\r\n}\r\n\r\n.la-ball-triangle-path.la-dark {\r\n  color: #333;\r\n}\r\n\r\n.la-ball-triangle-path > div {\r\n  display: inline-block;\r\n  float: none;\r\n  background-color: currentColor;\r\n  border: 0 solid currentColor;\r\n}\r\n\r\n.la-ball-triangle-path {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.la-ball-triangle-path > div {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 100%;\r\n}\r\n\r\n.la-ball-triangle-path > div:nth-child(1) {\r\n  -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n  -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n  -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n  animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n}\r\n\r\n.la-ball-triangle-path > div:nth-child(2) {\r\n  -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n  -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n  -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n  animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n}\r\n\r\n.la-ball-triangle-path > div:nth-child(3) {\r\n  -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n  -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n  -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n  animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n}\r\n\r\n.la-ball-triangle-path.la-sm {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.la-ball-triangle-path.la-sm > div {\r\n  width: 4px;\r\n  height: 4px;\r\n}\r\n\r\n.la-ball-triangle-path.la-2x {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.la-ball-triangle-path.la-2x > div {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.la-ball-triangle-path.la-3x {\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n\r\n.la-ball-triangle-path.la-3x > div {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n/*\r\n* Animations\r\n*/\r\n@-webkit-keyframes ball-triangle-path-ball-one {\r\n  0% {\r\n    -webkit-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n}\r\n\r\n@-moz-keyframes ball-triangle-path-ball-one {\r\n  0% {\r\n    -moz-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -moz-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -moz-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -moz-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n}\r\n\r\n@-o-keyframes ball-triangle-path-ball-one {\r\n  0% {\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n}\r\n\r\n@keyframes ball-triangle-path-ball-one {\r\n  0% {\r\n    -webkit-transform: translate(0, 220%);\r\n    -moz-transform: translate(0, 220%);\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    -moz-transform: translate(110%, 0);\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    -moz-transform: translate(220%, 220%);\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    -moz-transform: translate(0, 220%);\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ball-triangle-path-ball-two {\r\n  0% {\r\n    -webkit-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n}\r\n\r\n@-moz-keyframes ball-triangle-path-ball-two {\r\n  0% {\r\n    -moz-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -moz-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -moz-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -moz-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n}\r\n\r\n@-o-keyframes ball-triangle-path-ball-two {\r\n  0% {\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n}\r\n\r\n@keyframes ball-triangle-path-ball-two {\r\n  0% {\r\n    -webkit-transform: translate(110%, 0);\r\n    -moz-transform: translate(110%, 0);\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    -moz-transform: translate(220%, 220%);\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    -moz-transform: translate(0, 220%);\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    -moz-transform: translate(110%, 0);\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ball-triangle-path-ball-tree {\r\n  0% {\r\n    -webkit-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n}\r\n\r\n@-moz-keyframes ball-triangle-path-ball-tree {\r\n  0% {\r\n    -moz-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -moz-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -moz-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -moz-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n}\r\n\r\n@-o-keyframes ball-triangle-path-ball-tree {\r\n  0% {\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n}\r\n\r\n@keyframes ball-triangle-path-ball-tree {\r\n  0% {\r\n    -webkit-transform: translate(220%, 220%);\r\n    -moz-transform: translate(220%, 220%);\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n  17% {\r\n    opacity: 0.25;\r\n  }\r\n  33% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 220%);\r\n    -moz-transform: translate(0, 220%);\r\n    -o-transform: translate(0, 220%);\r\n    transform: translate(0, 220%);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n  }\r\n  66% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(110%, 0);\r\n    -moz-transform: translate(110%, 0);\r\n    -o-transform: translate(110%, 0);\r\n    transform: translate(110%, 0);\r\n  }\r\n  83% {\r\n    opacity: 0.25;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(220%, 220%);\r\n    -moz-transform: translate(220%, 220%);\r\n    -o-transform: translate(220%, 220%);\r\n    transform: translate(220%, 220%);\r\n  }\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* Responsive Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* =Media Queries for Nav\r\n===============================*/\r\n@media all and (max-width: 1024px) {\r\n  #nav-trigger {\r\n    display: block;\r\n  }\r\n\r\n  nav#nav-main {\r\n    display: none;\r\n  }\r\n\r\n  nav#nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  nav#nav-mobile li {\r\n    display: block;\r\n  }\r\n\r\n  #header aside {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Landscape mobile & down\r\n===============================*/\r\n@media (max-width: 480px) {\r\n  #wrapper {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .page-border,\r\n  #scrollUp,\r\n  #scrollUp:before {\r\n    display: none;\r\n  }\r\n\r\n  .row {\r\n    padding: 15px !important;\r\n  }\r\n\r\n  .col-1,\r\n  .col-2,\r\n  .col-3,\r\n  .col-4,\r\n  .col-5,\r\n  .col-6,\r\n  .col-7,\r\n  .col-8,\r\n  .col-9,\r\n  .col-10,\r\n  .col-11,\r\n  .col-12,\r\n  .col-2-3,\r\n  .col-3-4,\r\n  .col-9-10,\r\n  .col-61,\r\n  .col-38,\r\n  .row {\r\n    width: 100%;\r\n  }\r\n\r\n  .col-1,\r\n  .col-2,\r\n  .col-3,\r\n  .col-4,\r\n  .col-5,\r\n  .col-6,\r\n  .col-7,\r\n  .col-8,\r\n  .col-9,\r\n  .col-10,\r\n  .col-11,\r\n  .col-12,\r\n  .col-2-3,\r\n  .col-3-4,\r\n  .col-9-10,\r\n  .col-61,\r\n  .col-38 {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n\r\n  /*-----------------Header Elements-----------------*/\r\n  #header .row {\r\n    padding: 0 15px !important;\r\n\r\n  }\r\n\r\n  #header.nav-solid [class*=\"col-\"] {\r\n    padding: 0;\r\n  }\r\n\r\n  /*Logo*/\r\n  #logo h2 {\r\n    padding: 0;\r\n  }\r\n\r\n  /* Social */\r\n  /* #header aside {\r\n      clear: both;\r\n      padding: 0;\r\n  } */\r\n\r\n  #header ul.social-icons {\r\n    margin-top: 0;\r\n  }\r\n\r\n  #banner-content.row {\r\n    padding-top: 85px !important;\r\n  }\r\n\r\n  /*-----------------Sections-----------------*/\r\n\r\n  /* Call to Action*/\r\n  .call-to-action {\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  /* Video */\r\n  .slvj-lightbox iframe,\r\n  .slvj-lightbox object,\r\n  .slvj-lightbox embed {\r\n    height: 270px !important;\r\n  }\r\n\r\n  /* Footer */\r\n  #landing-footer #copyright {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n\r\n  #landing-footer .social-icons {\r\n    float: right;\r\n    width: 50%;\r\n  }\r\n\r\n  /*-----------------Typography-----------------*/\r\n  h1 {\r\n    font-size: 38px;\r\n  }\r\n\r\n  #banner h1 {\r\n    font-size: 48px;\r\n  }\r\n\r\n  /* Hide Elements */\r\n  a#scrollUp {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n/* Mobile to Tablet Portrait\r\n===============================*/\r\n@media (min-width: 480px) and (max-width: 767px) {\r\n  #wrapper {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .page-border,\r\n  #scrollUp,\r\n  #scrollUp:before {\r\n    display: none;\r\n  }\r\n\r\n  .row {\r\n    padding: 15px 0 !important;\r\n  }\r\n\r\n  .col-1,\r\n  .col-2,\r\n  .col-5,\r\n  .col-7,\r\n  .col-9,\r\n  .col-11,\r\n  .col-2-3,\r\n  .col-3-4,\r\n  .col-61,\r\n  .col-38,\r\n  .row {\r\n    width: 100%;\r\n  }\r\n\r\n  .col-3,\r\n  .col-4,\r\n  .col-6,\r\n  .col-8,\r\n  .col-10,\r\n  .col-12 {\r\n    width: 50%;\r\n  }\r\n\r\n  /*-----------------Header Elements-----------------*/\r\n  #header .row {\r\n    padding: 0 !important;\r\n  }\r\n\r\n  #header aside {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 60px;\r\n    padding-top: 3px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  #header.nav-solid aside {\r\n    top: 20px;\r\n  }\r\n\r\n  #header aside ul {\r\n    margin-top: 0 !important;\r\n    padding-top: 6px;\r\n  }\r\n\r\n  #banner-content.row {\r\n    padding-top: 85px !important;\r\n  }\r\n\r\n  /*Navigation*/\r\n  nav#nav-mobile ul {\r\n    margin-left: -40px;\r\n    margin-right: -40px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  /*-----------------Sections-----------------*/\r\n\r\n  /* Video */\r\n  .slvj-lightbox iframe,\r\n  .slvj-lightbox object,\r\n  .slvj-lightbox embed {\r\n    height: 370px !important;\r\n  }\r\n\r\n  /* Footer */\r\n  #landing-footer #copyright {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n\r\n  #landing-footer .social-icons {\r\n    float: right;\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n/* Landscape Tablet to Desktop\r\n===============================*/\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  #wrapper {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .page-border {\r\n    display: none;\r\n  }\r\n\r\n  .big-padding-top {\r\n    padding-top: 45px !important;\r\n  }\r\n\r\n  /*-----------------Header Elements-----------------*/\r\n  #header aside {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 60px;\r\n    padding-top: 3px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  #header.nav-solid aside {\r\n    top: 20px;\r\n  }\r\n\r\n  #header aside ul {\r\n    margin-top: 0 !important;\r\n    padding-top: 6px;\r\n  }\r\n\r\n  /*Navigation*/\r\n  nav#nav-mobile ul {\r\n    margin-left: -40px;\r\n    margin-right: -40px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  /*-----------------Sections-----------------*/\r\n\r\n  /* Video */\r\n  .slvj-lightbox iframe,\r\n  .slvj-lightbox object,\r\n  .slvj-lightbox embed {\r\n    height: 432px !important;\r\n  }\r\n}\r\n\r\n/* Yoski Landing Page Dynamic Style Index\r\n1. Website Default Styling\r\n2. Navigation\r\n3. Primary and Secondary Colors\r\n4. Banner\r\n5. Typography\r\n6. Buttons\r\n7. Footer\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 1. Website Default Styling */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\nbody {\r\n  background: #fff;\r\n}\r\n\r\n/* Default Link Color */\r\n\r\na,\r\n.la-ball-triangle-path {\r\n  color: #d2b356;\r\n}\r\n\r\na:hover,\r\n#header.nav-solid nav a:hover {\r\n  color: #d2b356;\r\n}\r\n\r\n/* Default Icon Color */\r\n\r\n.icon i {\r\n  color: #d2b356;\r\n}\r\n\r\n/* Border Color */\r\n\r\n#banner .section-heading:before,\r\n.testimonial.classic footer:before {\r\n  background: #d2b356;\r\n}\r\n\r\n.pricing-block-content:hover {\r\n  border-color: #d2b356;\r\n}\r\n\r\n#banner .section-heading:before,\r\n.coin.classic footer:before {\r\n  background: #d2b356;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 2. Navigation */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* Transparent Navigation Color on a Banner */\r\n\r\n#header nav a,\r\n#header i {\r\n  color: #fff;\r\n}\r\n\r\n/* Navigation Colors when the Navigation is sticky and solid */\r\n\r\n#header.nav-solid,\r\n#header.nav-solid a,\r\n#header.nav-solid i,\r\n#nav-mobile ul li a {\r\n  color: #fff;\r\n}\r\n\r\n/* Navigation Active State */\r\n\r\n#header.nav-solid .active {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 3. Primary and Secondary Colors */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* Primary Background and Text Colors */\r\n\r\n.primary-color,\r\n.featured .pricing {\r\n  background-color: #d2b356;\r\n}\r\n\r\n.primary-color,\r\n.primary-color .section-title,\r\n.primary-color .section-subtitle,\r\n.featured .pricing,\r\n.featured .pricing p {\r\n  color: #fff;\r\n}\r\n\r\n.section-heading h2:after {\r\n  background: #d2b356;\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.text-center .section-heading h2:after {\r\n  margin: 30px auto 25px auto;\r\n}\r\n\r\n/* Primary Icon Colors */\r\n\r\n.primary-color .icon i,\r\n.primary-color i {\r\n  color: #fff;\r\n}\r\n\r\n/* Secondary Background and Text Colors */\r\n\r\n.secondary-color {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 4. Banner */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* Banner Background and Text Colors */\r\n\r\n#banner {\r\n  background: url(\"assets/images/banner-images/homepage.png\") no-repeat\r\n    right ;\r\n  background-size:auto;\r\n  background-position-x: 700px;\r\n\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 5. Typography */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\nbody {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  color: #111;\r\n}\r\n\r\n/* Logo, if you are using Fonts as Logo and not image\r\n#logo h1 {\r\n  font-family:;\r\n  font-size:;\r\n  font-weight:;\r\n  color:;\r\n}\r\n#logo h2 {\r\n  font-family:;\r\n  font-size:;\r\n  font-weight:;\r\n  color:;\r\n}\r\n*/\r\n\r\n/* Banner Typography */\r\n\r\n#banner h1 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 62px;\r\n  line-height: 60px;\r\n  font-weight: 800;\r\n  color: #111;\r\n}\r\n\r\n#banner h2 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  color: #111;\r\n}\r\n\r\n/* Section Title and Subtitle */\r\n\r\n.section-title {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n  color: #111;\r\n}\r\n\r\n.section-subtitle {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: #9c9c9c;\r\n}\r\n\r\n/* Testimonial */\r\n\r\n.testimonial q {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 17px;\r\n  font-weight: 300;\r\n}\r\n\r\n.testimonial.classic q,\r\n.testimonial.classic footer {\r\n  color: #111;\r\n}\r\n\r\n/* coin */\r\n\r\n.coin q {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 17px;\r\n  font-weight: 300;\r\n}\r\n\r\n.coin.classic q,\r\n.coin.classic footer {\r\n  color: #111;\r\n}\r\n\r\n\r\n/* Standard Headings h1-h6 */\r\n\r\nh1 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n  color: #111;\r\n}\r\n\r\nh2 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 34px;\r\n  font-weight: 300;\r\n  color: #111;\r\n}\r\n\r\nh3 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: #111;\r\n}\r\n\r\nh4 {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #111;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 6. Buttons */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n/* ----------Default Buttons---------- */\r\n\r\n/* Button Text */\r\n\r\n/* ----------Banner Buttons---------- */\r\n\r\n/* Button Text */\r\n\r\n#banner .button {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  color: #111;\r\n}\r\n\r\n/* Button Color */\r\n\r\n#banner .button {\r\n  border-color: #111;\r\n}\r\n\r\n/* Button Hover Color */\r\n\r\n#banner .button:hover {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 7. Footer */\r\n/*------------------------------------------------------------------------------------------*/\r\n\r\n#landing-footer,\r\n#landing-footer p,\r\n#landing-footer a {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: #999;\r\n}\r\n\r\n/* Footer Icon Color */\r\n\r\n#landing-footer i {\r\n  color: #999;\r\n}\r\n","@keyframes red-zoom-loader-animation {\r\n    from {\r\n        transform: rotateZ(0deg);\r\n    }\r\n    to {\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n\r\n.red-zoom {\r\n    pointer-events: none;\r\n}\r\n// overlay, error\r\n.red-zoom__overlay,\r\n.red-zoom__error {\r\n    position: absolute;\r\n    left: var(--red-zoom-thumb-x, 0px);\r\n    top: var(--red-zoom-thumb-y, 0px);\r\n    width: var(--red-zoom-thumb-w, 0px);\r\n    height: var(--red-zoom-thumb-h, 0px);\r\n}\r\n// window\r\n.red-zoom__lens {\r\n    display: flex;\r\n}\r\n.red-zoom__lens-body {\r\n    position: relative;\r\n    overflow: hidden;\r\n    flex-grow: 1;\r\n}\r\n.red-zoom__lens-image {\r\n    --red-zoom-lens-image-x: calc(\r\n        var(--red-zoom-lens-image-base-x, 0px) +\r\n        var(--red-zoom-lens-image-center-offset-x, 0px)\r\n    );\r\n    --red-zoom-lens-image-y: calc(\r\n        var(--red-zoom-lens-image-base-y, 0px) +\r\n        var(--red-zoom-lens-image-center-offset-y, 0px)\r\n    );\r\n\r\n    position: absolute;\r\n    transform:\r\n        translateX(var(--red-zoom-lens-image-x))\r\n        translateY(var(--red-zoom-lens-image-y))\r\n        translateZ(0);\r\n}\r\n// lens\r\n.red-zoom__frame {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: var(--red-zoom-frame-w, 0px);\r\n    height: var(--red-zoom-frame-h, 0px);\r\n    transform:\r\n        translateX(var(--red-zoom-frame-x, 0px))\r\n        translateY(var(--red-zoom-frame-y, 0px));\r\n}\r\n.red-zoom__frame-body {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.red-zoom__frame-image {\r\n    width: var(--red-zoom-thumb-w, 0px);\r\n    height: var(--red-zoom-thumb-h, 0px);\r\n    transform:\r\n        translateX(var(--red-zoom-frame-image-x, 0px))\r\n        translateY(var(--red-zoom-frame-image-y, 0px))\r\n        translateZ(0);\r\n}\r\n","@import './mixins/style-magnifier';\r\n\r\n\r\n.red-zoom--style--magnifier {\r\n    @include red-zoom-style-magnifier();\r\n}\r\n","@use 'sass:math';\r\n\r\n@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-magnifier(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .3),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // lens\r\n    $lens-clip:             true,\r\n    $lens-size:             160px,\r\n    $lens-border-radius:    20px,\r\n    $lens-shadow:           0 1px 9px 2px rgba(#000, .8),\r\n    $lens-border-width:     0,\r\n    $lens-border-color:     #fff,\r\n    $lens-border-position:  inside,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n        background: $overlay-color;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n    .red-zoom__frame {\r\n        display: none;\r\n    }\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        display: block;\r\n        left: var(--red-zoom-thumb-x);\r\n        top: var(--red-zoom-thumb-y);\r\n        width: var(--red-zoom-thumb-w);\r\n        height: var(--red-zoom-thumb-h);\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n\r\n        @if ($lens-clip) {\r\n            overflow: hidden;\r\n        }\r\n\r\n        &:after {\r\n            position: absolute;\r\n            content: '';\r\n            box-shadow: $lens-shadow;\r\n            border: $lens-border-width solid $lens-border-color;\r\n            opacity: .5;\r\n\r\n            $local-border-width: 0px;\r\n\r\n            @if ($lens-border-position == outside) {\r\n                $local-border-width: $lens-border-width;\r\n            } @else if ($lens-border-position == center) {\r\n                $local-border-width: math.div($lens-border-width, 2);\r\n            }\r\n\r\n            border-radius: $lens-border-radius + $local-border-width;\r\n            left: calc(var(--red-zoom-mouse-x, 0px) - #{math.div($lens-size, 2) + $local-border-width} - var(--red-zoom-thumb-x));\r\n            top: calc(var(--red-zoom-mouse-y, 0px) - #{math.div($lens-size, 2) + $local-border-width} - var(--red-zoom-thumb-y));\r\n            width: $lens-size + $local-border-width * 2;\r\n            height: $lens-size + $local-border-width * 2;\r\n        }\r\n    }\r\n    .red-zoom__lens-body {\r\n        border-radius: $lens-border-radius;\r\n        left: calc(var(--red-zoom-mouse-x, 0px) - #{math.div($lens-size, 2)} - var(--red-zoom-thumb-x));\r\n        top: calc(var(--red-zoom-mouse-y, 0px) - #{math.div($lens-size, 2)} - var(--red-zoom-thumb-y));\r\n        width: $lens-size;\r\n        height: $lens-size;\r\n    }\r\n    .red-zoom__lens-image {\r\n        --red-zoom-lens-image-x: calc(\r\n            var(--red-zoom-lens-image-base-x, 0px) +\r\n            var(--red-zoom-lens-image-center-offset-x, 0px) +\r\n            var(--red-zoom-lens-image-frame-offset-x, 0px)\r\n        );\r\n        --red-zoom-lens-image-y: calc(\r\n            var(--red-zoom-lens-image-base-y, 0px) +\r\n            var(--red-zoom-lens-image-center-offset-y, 0px) +\r\n            var(--red-zoom-lens-image-frame-offset-y, 0px)\r\n        );\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n","@use 'sass:math';\r\n\r\n\r\n@mixin red-zoom-loader(\r\n    $loader-color: #fff,\r\n    $loader-size:  40px\r\n) {\r\n    position: relative;\r\n    display: block;\r\n    content: '';\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-color: rgba($loader-color, .2);\r\n    border-top-color: rgba($loader-color, 1);\r\n    left: calc(50% - #{math.div($loader-size, 2)});\r\n    top: calc(50% - #{math.div($loader-size, 2)});\r\n    width: $loader-size;\r\n    height: $loader-size;\r\n    border-radius: 100%;\r\n    animation-name: red-zoom-loader-animation;\r\n    animation-duration: .5s;\r\n    animation-timing-function: linear;\r\n    animation-iteration-count: infinite;\r\n    animation-play-state: paused;\r\n    opacity: 0;\r\n}\r\n\r\n@mixin red-zoom-states(\r\n    $transition-duration,\r\n    $error-overlay-color,\r\n    $error-font-color\r\n) {\r\n    .red-zoom__error {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        color: $error-font-color;\r\n        padding: 32px;\r\n        visibility: hidden;\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition:\r\n            visibility 0s $transition-duration,\r\n            opacity $transition-duration;\r\n    }\r\n\r\n    &.red-zoom--status--error {\r\n        .red-zoom__frame,\r\n        .red-zoom__lens {\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            width: 0;\r\n            height: 0;\r\n            display: none;\r\n        }\r\n        .red-zoom__overlay {\r\n            background: $error-overlay-color;\r\n        }\r\n    }\r\n\r\n    &.red-zoom--active {\r\n        transition-delay: 0s;\r\n        visibility: visible;\r\n\r\n        .red-zoom__overlay {\r\n            opacity: 1;\r\n        }\r\n\r\n        &.red-zoom--status--loading {\r\n            .red-zoom__overlay:before {\r\n                opacity: 1;\r\n                animation-play-state: running;\r\n            }\r\n        }\r\n\r\n        &.red-zoom--status--loaded {\r\n            .red-zoom__lens,\r\n            .red-zoom__frame {\r\n                opacity: 1;\r\n            }\r\n        }\r\n\r\n        &.red-zoom--status--error {\r\n            .red-zoom__error {\r\n                visibility: visible;\r\n                transition-delay: 0s;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.red-zoom--disabled {\r\n        transition-delay: 0s;\r\n        visibility: hidden;\r\n\r\n        .red-zoom__overlay,\r\n        .red-zoom__frame,\r\n        .red-zoom__lens,\r\n        .red-zoom__error {\r\n            transition-duration: 0s !important;\r\n            opacity: 0 !important;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin red-zoom-min-scale-factor($value, $relative: 'thumb') {\r\n    .red-zoom__lens-image {\r\n        @if($relative == 'lens-image') {\r\n            min-width: calc(var(--red-zoom-lens-image-natural-w) * #{$value});\r\n            min-height: calc(var(--red-zoom-lens-image-natural-h) * #{$value});\r\n        } @else if ($relative == 'thumb') {\r\n            min-width: calc(var(--red-zoom-thumb-w) * #{$value});\r\n            min-height: calc(var(--red-zoom-thumb-h) * #{$value});\r\n        }\r\n    }\r\n}\r\n@mixin red-zoom-max-scale-factor($value, $relative: 'thumb') {\r\n    .red-zoom__lens-image {\r\n        @if($relative == 'lens-image') {\r\n            max-width: calc(var(--red-zoom-lens-image-natural-w) * #{$value});\r\n            max-height: calc(var(--red-zoom-lens-image-natural-h) * #{$value});\r\n        } @else if ($relative == 'thumb') {\r\n            max-width: calc(var(--red-zoom-thumb-w) * #{$value});\r\n            max-height: calc(var(--red-zoom-thumb-h) * #{$value});\r\n        }\r\n    }\r\n}\r\n","@import './mixins/style-window';\r\n\r\n\r\n.red-zoom--style--window {\r\n    @include red-zoom-style-window(\r\n        $overlay-color: rgba(#e50032, .5)\r\n    );\r\n\r\n    .red-zoom__lens {\r\n        --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\r\n\r\n        left: var(--window-x, 0px);\r\n        top: var(--red-zoom-thumb-y, 0px);\r\n        width: var(--red-zoom-thumb-w, 0px);\r\n        height: var(--red-zoom-thumb-h, 0px);\r\n    }\r\n}\r\n","@use 'sass:math';\r\n\r\n@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-window(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .8),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // frame\r\n    $frame-visible:         true,\r\n    $frame-bg-color:        transparent,\r\n    $frame-shadow:          0 1px 7px rgba(#000, .25),\r\n    $frame-border-width:    6px,\r\n    $frame-border-color:    #fff,\r\n    $frame-border-position: outside,\r\n    $frame-image-visible:   true,\r\n    // lens\r\n    $lens-bg-color:         #fff,\r\n    $lens-shadow:           0 1px 9px rgba(#000, .2),\r\n    $lens-border-width:     6px,\r\n    $lens-border-color:     #fff,\r\n    $lens-border-position:  outside,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        background: $overlay-color;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n\r\n    @if ($frame-visible) {\r\n        .red-zoom__frame {\r\n            opacity: 0;\r\n            transition: opacity $transition-duration;\r\n            z-index: 1;\r\n            background: $frame-bg-color;\r\n\r\n            &:after {\r\n                position: absolute;\r\n                content: '';\r\n                border: $frame-border-width solid $frame-border-color;\r\n                box-sizing: border-box;\r\n                box-shadow: $frame-shadow;\r\n\r\n                @if ($frame-border-position == outside) {\r\n                    left: -$frame-border-width;\r\n                    top: -$frame-border-width;\r\n                    width: calc(100% + #{$frame-border-width * 2});\r\n                    height: calc(100% + #{$frame-border-width * 2});\r\n                } @else if ($frame-border-position == inside) {\r\n                    left: 0;\r\n                    top: 0;\r\n                    width: 100%;\r\n                    height: 100%;\r\n                } @else if ($frame-border-position == center) {\r\n                    left: -#{math.div($frame-border-width, 2)};\r\n                    top: -#{math.div($frame-border-width, 2)};\r\n                    width: calc(100% + #{$frame-border-width});\r\n                    height: calc(100% + #{$frame-border-width});\r\n                }\r\n            }\r\n        }\r\n        .red-zoom__frame-image {\r\n            @if (not $frame-image-visible) {\r\n                display: none;\r\n            }\r\n        }\r\n    } @else {\r\n        .red-zoom__frame {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        z-index: 2;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        background: $lens-bg-color;\r\n\r\n        &:after {\r\n            position: absolute;\r\n            content: '';\r\n            border: $lens-border-width solid $lens-border-color;\r\n            box-shadow: $lens-shadow;\r\n        }\r\n\r\n        @if ($lens-border-position == outside) {\r\n            &:after {\r\n                left: -$lens-border-width;\r\n                top: -$lens-border-width;\r\n                width: calc(100% + #{$lens-border-width * 2});\r\n                height: calc(100% + #{$lens-border-width * 2});\r\n            }\r\n        } @else if ($lens-border-position == inside) {\r\n            padding: $lens-border-width;\r\n\r\n            &:after {\r\n                left: 0;\r\n                top: 0;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        } @else if ($lens-border-position == center) {\r\n            padding: math.div($lens-border-width, 2);\r\n\r\n            &:after {\r\n                left: -(math.div($lens-border-width, 2));\r\n                top: -(math.div($lens-border-width, 2));\r\n                width: calc(100% + #{$lens-border-width});\r\n                height: calc(100% + #{$lens-border-width});\r\n            }\r\n        }\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n\r\n@mixin red-zoom-style-window-lens-position() {\r\n\r\n}\r\n","@import './mixins/style-overlay';\r\n\r\n.red-zoom--style--overlay {\r\n    @include red-zoom-style-overlay();\r\n}\r\n","@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-overlay(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .3),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n        background: $overlay-color;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n    .red-zoom__frame {\r\n        display: none;\r\n    }\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        left: var(--red-zoom-thumb-x);\r\n        top: var(--red-zoom-thumb-y);\r\n        width: var(--red-zoom-thumb-w);\r\n        height: var(--red-zoom-thumb-h);\r\n        overflow: hidden;\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6144:
/*!***********************************************************!*\
  !*** ./src/app/coins/coin/coin.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (coinList$ | async; as coin) {\r\n\t<section id=\"about\" class=\"introduction scrollto\">\r\n\t\t<div class=\"row clearfix\">\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<a href=\"javascript:history.back()\">\r\n\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-backward fa-1x\"></i> {{ coin.tagline }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<h2 class=\"section-title\">{{ coin.title }}</h2>\r\n\t\t\t\t\t<p class=\"section-subtitle\">{{ coin.description }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-3\"></div>\r\n\t\t\t<div class=\"col-2-3\" coin>\r\n\t\t\t\t<blockquote class=\"col-3 coin classic\">\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\tsrc=\"assets/images/coins/{{ coin.type }}/{{ coin.frontImg }}\"\r\n\t\t\t\t\t\tredZoom=\"assets/images/coins/{{ coin.type }}/{{ coin.frontImg }}\"\r\n\t\t\t\t\t\tredZoomClass=\"red-zoom--style--window\"\r\n\t\t\t\t\t\tredZoomBehavior=\"hover\"\r\n\t\t\t\t\t\talt=\"{{ coin.name }}\" />\r\n\r\n\t\t\t\t\t<h3>{{ coin.frontTitle }}</h3>\r\n\t\t\t\t\t<q>{{ coin.frontDescription }}</q>\r\n\t\t\t\t\t<footer>{{ coin.name }} - {{ coin.price }}</footer>\r\n\t\t\t\t</blockquote>\r\n\r\n\t\t\t\t<blockquote class=\"col-3 coin classic\">\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\tsrc=\"assets/images/coins/{{ coin.type }}/{{ coin.backImg }}\"\r\n\t\t\t\t\t\tredZoom=\"assets/images/coins/{{ coin.type }}/{{ coin.backImg }}\"\r\n\t\t\t\t\t\tredZoomClass=\"red-zoom--style--window\"\r\n\t\t\t\t\t\tredZoomBehavior=\"hover\"\r\n\t\t\t\t\t\talt=\"{{ coin.name }}\" />\r\n\r\n\t\t\t\t\t<h3>{{ coin.backTitle }}</h3>\r\n\t\t\t\t\t<q>{{ coin.backDescription }}</q>\r\n\t\t\t\t\t<footer>\r\n\t\t\t\t\t\t@if (coin.ebay !== '') {\r\n\t\t\t\t\t\t\t<b>Ebay:</b>\r\n\t\t\t\t\t\t\t<a href=\"{{ coin.ebay }}\" target=\"_blank\">\r\n\t\t\t\t\t\t\t\t{{ coin.title }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</footer>\r\n\t\t\t\t</blockquote>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n}\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_coins_coin_coin_component_ts.js.map