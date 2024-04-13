(self["webpackChunkgilliamworldcoins"] = self["webpackChunkgilliamworldcoins"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_home_home-page_home-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-page/home-page.component */ 7836)).then(mod => mod.HomePageComponent)
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_about_about-page_about-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about-page/about-page.component */ 3416)).then(mod => mod.AboutPageComponent)
}, {
  path: 'britishcoins',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_britishcoin_britishcoin_britishcoin_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./britishcoin/britishcoin/britishcoin.component */ 5844)).then(mod => mod.BritishCoinComponent)
}, {
  path: 'worldcoins',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_worldcoin_worldcoin_worldcoin_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./worldcoin/worldcoin/worldcoin.component */ 5344)).then(mod => mod.WorldCoinComponent)
}, {
  path: 'uscoins',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_uscoin_uscoin_uscoin_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./uscoin/uscoin/uscoin.component */ 2615)).then(mod => mod.usCoinComponent)
}, {
  path: 'clients',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_clients_clients-page_clients-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients-page/clients-page.component */ 4388)).then(mod => mod.ClientsPageComponent)
}, {
  path: 'cointype/:id',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_coins_coinType_coin-type_coin-type_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./coins/coinType/coin-type/coin-type.component */ 9204)).then(mod => mod.CoinTypeComponent)
}, {
  path: 'coin/:id',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_coins_coin_coin_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./coins/coin/coin.component */ 4736)).then(mod => mod.CoinComponent)
}, {
  path: '404',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notfound_notfound-page_notfound-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notfound/notfound-page/notfound-page.component */ 3148)).then(mod => mod.NotfoundPageComponent)
}, {
  path: '**',
  redirectTo: '/404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: []
})], AppRoutingModule);


/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);



let AppComponent = class AppComponent {
  constructor() {
    this.title = 'gilliamworldcoins Website';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-in-memory-web-api */ 2795);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _shared_services_pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/pipes/orderby.pipe */ 96);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 6940);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navmenu/navmenu.component */ 9556);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ 1268);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social/social.component */ 892);
/* harmony import */ var _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./website-block/website-block.component */ 2284);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-red-zoom */ 20);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/config.service */ 9344);
/* harmony import */ var _shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/in-memory-data.service */ 3796);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 5832);








// Components






// Modules



// Services



let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_services_pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_0__.OrderByPipe],
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_7__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_red_zoom__WEBPACK_IMPORTED_MODULE_15__.RedZoomModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__.HttpClientInMemoryWebApiModule.forRoot(_shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_9__.InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true
  }), _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent, _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__.NavmenuComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_5__.SocialComponent, _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_6__.WebsiteBlockComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__.HashLocationStrategy
  }, _shared_services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService, (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_19__.provideAnimationsAsync)()],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6940:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 4474);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 1564);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social/social.component */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);









let FooterComponent = class FooterComponent {
  constructor(config) {
    this.config = config;
    // footer$: Observable<IFooter> = new Observable<IFooter>();
    this.footer$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 6);
  }
  getPageData(database, id) {
    this.footer$ = this.config.getSettings(database, id);
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
  }];
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _social_social_component__WEBPACK_IMPORTED_MODULE_3__.SocialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 1268:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 1036);
/* harmony import */ var _navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.scss?ngResource */ 4240);
/* harmony import */ var _navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navmenu/navmenu.component */ 9556);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2328);








let NavigationComponent = class NavigationComponent {
  constructor(location, config) {
    this.location = location;
    this.config = config;
    this.database = 'menu';
  }
  ngOnInit() {
    this.menuOpen = false;
    this.getMenu();
  }
  toggleMenu(status) {
    this.menuOpen = status;
  }
  getMenu() {
    this.config.getSettings(this.database).subscribe(setting => {
      this.menu = setting;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
  }, {
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
  }];
};
NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-navigation',
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__.NavmenuComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule],
  styles: [(_navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavigationComponent);


/***/ }),

/***/ 9556:
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavmenuComponent: () => (/* binding */ NavmenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navmenu.component.html?ngResource */ 1116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




let NavmenuComponent = class NavmenuComponent {
  constructor() {
    this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }
  static #_ = this.propDecorators = {
    menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    menuOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    menuStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
NavmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-navmenu',
  template: _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink]
})], NavmenuComponent);


/***/ }),

/***/ 9344:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 9124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8916);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1672);






let ConfigService = class ConfigService {
  constructor(http) {
    this.http = http;
    this.config = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration;
    this.apiUrl = 'api/posts';
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
    };
  }
  getConfig() {
    return this.config;
  }
  getCoinLisyByTypeSettings(database, type) {
    const url = type ? `api/${database}?type=${type}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
  getCoinTypeByCountryIDSettings(database, countryId) {
    const url = countryId ? `api/${database}?countryId=${countryId}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
  getCoins(database, id) {
    const url = id ? `api/${database}?id=${id}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
  getSettings(database, id) {
    const url = id ? `api/${database}/${id}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], ConfigService);


/***/ }),

/***/ 9124:
/*!**************************************************!*\
  !*** ./src/app/shared/services/configuration.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configuration: () => (/* binding */ configuration)
/* harmony export */ });
const configuration = {
  header: {
    heading: 'My website',
    headingtext: 'gilliamworldcoins is a free landing page template you can use for your projects.',
    buttontext: 'do some action',
    buttonlink: 'home'
  }
};

/***/ }),

/***/ 3796:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/in-memory-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


let InMemoryDataService = class InMemoryDataService {
  createDb() {
    const pages = [{
      id: 1,
      name: 'intro',
      tagline: 'About Us',
      title: 'Buying and Trading Coins',
      description: 'We collect various forms of currency from the United States, United Kingdom to world coins.  The coins and currency collection is a great opportunity for collectors and investors alike.'
    }, {
      id: 2,
      name: 'Help Center',
      tagline: 'Help Center',
      title: 'Helpful links',
      description: 'This links will help you on the way. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 3,
      name: 'services',
      tagline: 'BELIEVING',
      title: 'Focusing On What Matters Most',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 4,
      name: 'testimonials',
      tagline: 'FEEDBACK',
      title: 'What our customers are saying',
      description: ''
    }, {
      id: 5,
      name: 'pricing',
      tagline: 'YOUR CHOICE',
      title: 'We have the right package for you',
      description: ''
    }, {
      id: 6,
      name: 'footer',
      tagline: '❤ ',
      developer: 'yoski inc',
      developerlink: 'gilliamworldcoinscom'
    }, {
      id: 7,
      name: 'header',
      tagline: 'World Coin',
      title: 'Welcome to coin collecting, Coin collecting can be a masterclass in history, geography, and even economics.',
      buttontext: 'Get an Estimate',
      buttonlink: '/home',
      image: 'homepage.png'
    }, {
      id: 8,
      name: 'queen-victoria1847',
      tagline: 'Queen Victoria',
      title: 'Queen Victoria 1847',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }];
    const features = [{
      id: 1,
      icon: 'tags',
      title: 'Get an Appraisal',
      description: 'Do you have a coin collection you’re thinking about selling? First research their worth online, you may find conflicting information from different websites.  Each coin can be based on year, quality and availability.  '
    }, {
      id: 2,
      icon: 'envelope',
      title: 'Contact Us',
      description: 'hachu@yahoo.com'
    }, {
      id: 3,
      icon: 'thumbtack"',
      title: 'Feedback',
      description: 'We have all good feedback '
    }];
    const images = [{
      id: 1,
      name: 'crown.jpg'
    }, {
      id: 2,
      name: 'halfcrown.jpg'
    }, {
      id: 3,
      name: 'florin.jpg'
    }, {
      id: 4,
      name: 'shilling.jpg'
    }, {
      id: 5,
      name: 'sixpence.jpg'
    }, {
      id: 6,
      name: 'threepence.jpg'
    }, {
      id: 7,
      name: 'penny.jpg'
    }, {
      id: 8,
      name: 'halfpenny.jpeg'
    }, {
      id: 9,
      name: 'farthing.jpeg'
    }];
    const menu = [{
      id: 1,
      title: 'Home',
      link: '/home'
    }, {
      id: 2,
      title: 'About',
      link: '/about'
    }, {
      id: 3,
      title: 'British Coins',
      link: '/britishcoins'
    }, {
      id: 4,
      title: 'US Coins',
      link: '/uscoins'
    }, {
      id: 4,
      title: 'World Coins',
      link: '/worldcoins'
    }, {
      id: 6,
      title: 'Help Center',
      link: '/clients'
    }];
    const companies = [{
      id: 1,
      name: 'Royal Museum',
      weblink: 'https://www.royalmintmuseum.org.uk/',
      logo: 'company-logo3.png'
    }, {
      id: 2,
      name: 'Royal Mint',
      weblink: 'https://www.royalmint.com/',
      logo: 'company-logo3.png'
    }, {
      id: 3,
      name: 'NGC',
      weblink: 'https://www.ngccoin.com/ncs-conservation/',
      logo: 'company-logo3.png'
    }, {
      id: 4,
      name: 'American Numismatic Association',
      weblink: 'https://www.money.org/',
      logo: 'company-logo4.png'
    }, {
      id: 5,
      name: 'United States Mint',
      weblink: 'https://www.usmint.gov/',
      logo: 'company-logo5.png'
    }];
    const feedback = [{
      id: 1,
      name: 'John Doe',
      userimage: 'user-1.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'ABC'
    }, {
      id: 2,
      name: 'Roslyn Doe',
      userimage: 'user-2.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }, {
      id: 3,
      name: 'Thomas Doe',
      userimage: 'user-3.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }];
    const plans = [{
      id: 1,
      title: 'PERSONAL',
      subtitle: 'The standard version',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '19',
      currency: '₹',
      downloads: '5 Downloads',
      extensions: '2 Extensions',
      tutorials: 'Tutorials',
      support: 'Forum Support',
      updates: '1 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }, {
      id: 2,
      title: 'STUDENT',
      subtitle: 'Most popular choice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '29',
      currency: '₹',
      downloads: '15 Downloads',
      extensions: '5 Extensions',
      tutorials: 'Tutorials with files',
      support: 'Forum Support',
      updates: '2 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: true
    }, {
      id: 3,
      title: 'BUSINESS',
      subtitle: 'For the whole team',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '49',
      currency: '₹',
      downloads: 'Unlimited Downloads',
      extensions: 'Unlimited Downloads',
      tutorials: 'HD Video Tutorials',
      support: 'Chat Support',
      updates: 'Lifetime free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }];
    const websites = [{
      id: 1,
      link: 'https://facebook.com/',
      title: 'Facebook',
      target: '_blank',
      username: 'Thor',
      icon: 'facebook'
    },
    // {
    //   id: 2,
    //   link: "https://googleplus.com/",
    //   title: "Google+",
    //   target: "_blank",
    //   username: "+jagmohan",
    //   icon: "google-plus",
    // },
    {
      id: 3,
      link: 'https://twitter.com/',
      title: 'Twitter',
      target: '_blank',
      username: 'joker',
      icon: 'twitter'
    }, {
      id: 4,
      link: 'https://instagram.com/',
      title: 'Instagram',
      target: '_blank',
      username: 'superman',
      icon: 'instagram'
    }
    // {
    //   id: 5,
    //   link: "https://behance.com/",
    //   title: "Behance",
    //   target: "_blank",
    //   username: "jagmohan",
    //   icon: "behance",
    // },
    ];
    const cointypeList = [{
      id: 1,
      country: 'United Kingdom',
      countryId: 1,
      type: 'crowns',
      name: 'Crown',
      tagline: 'British Coin List',
      title: 'The Crown',
      description: 'The British crown was a denomination of sterling coinage worth 1⁄4 of one pound, or 5 shillings, or 60 (old) pence.  The crown was first issued during the reign of Edward VI, as part of the coinage of the Kingdom of England.',
      Img: 'crown.jpg',
      bottomContent: 'The coins origins lie in the English silver crown, one of many silver coins that appeared in various countries from the 16th century onwards (most famously the Spanish piece of eight).'
    }, {
      id: 2,
      country: 'United Kingdom',
      countryId: 1,
      type: 'halfcrown',
      name: 'Half Crown',
      tagline: 'British Coin List',
      title: 'The Half Crown',
      description: 'The British halfcrown, ',
      Img: 'halfcrown.jpg',
      bottomContent: 'halfcrown.'
    }, {
      id: 3,
      country: 'United Kingdom',
      countryId: 1,
      type: 'florin',
      name: 'Florin',
      tagline: 'British Coin List',
      title: 'The Florin',
      description: 'The Florentine florin was a gold coin struck from 1252 to 1533 with no significant change in its design or metal content standard during that time. ',
      Img: 'florin.jpg',
      bottomContent: 'florin.'
    }, {
      id: 4,
      country: 'United Kingdom',
      countryId: 1,
      type: 'Shilling',
      name: 'Shilling',
      tagline: 'British Coin List',
      title: 'The Shilling',
      description: 'The British shilling, abbreviated "1s" or "1/-", was a unit of currency and a denomination of sterling coinage worth 1⁄20 of one pound, or twelve pence. ',
      Img: 'shilling.jpg',
      bottomContent: 'First entering circulation during the mid-sixteenth century, the shilling became known as a bob. Its regular appearances in literature, role in military recruitment and use by sailors as a talisman for good luck demonstrate its special place in public affection.'
    }, {
      id: 5,
      country: 'United Kingdom',
      countryId: 1,
      type: 'sixpence',
      name: 'sixpence',
      tagline: 'British Coin List',
      title: 'The Sixpence',
      description: 'The British sixpence piece, sometimes known as a tanner or sixpenny bit, was a denomination of sterling coinage worth 1⁄40 of one pound or half of one shilling. It was first minted in 1551, during the reign of Edward VI, and circulated until 1980. The coin was made from silver from its introduction in 1551 until 1947, and thereafter in cupronickel.',
      Img: 'sixpence.jpg',
      bottomContent: 'sixpence.'
    }, {
      id: 6,
      country: 'United Kingdom',
      countryId: 1,
      type: 'threepence',
      name: 'Threepence',
      tagline: 'British Coin List',
      title: 'The Three Pence',
      description: 'The British threepence piece, usually simply known as a threepence, thruppence, or thruppenny bit, was a denomination of sterling coinage worth 1⁄80 of one pound or 1⁄4 of one shilling. It was used in the United Kingdom, and earlier in Great Britain and England. Similar denominations were later used throughout the British Empire and Commonwealth countries, notably in Australia, New Zealand and South Africa.',
      Img: 'threepence.jpg',
      bottomContent: 'threepence.'
    }, {
      id: 7,
      country: 'United Kingdom',
      countryId: 1,
      type: 'penny',
      name: 'Penny',
      tagline: 'British Coin List',
      title: 'The Penny',
      description: 'The British penny, ',
      Img: 'penny.jpg',
      bottomContent: 'penny.'
    }, {
      id: 8,
      country: 'United Kingdom',
      countryId: 1,
      type: 'halfpenny',
      name: 'halfpenny',
      tagline: 'British Coin List',
      title: 'The Half Penny',
      description: 'The British Half Penny, ',
      Img: 'halfpenny.jpeg',
      bottomContent: 'halfpenny.'
    }, {
      id: 9,
      country: 'United Kingdom',
      countryId: 1,
      type: 'farthing',
      name: 'Farthing',
      tagline: 'British Coin List',
      title: 'The Farthing',
      description: 'The British Farthing, ',
      Img: 'farthing.jpeg',
      bottomContent: 'farthing.'
    }, {
      id: 10,
      country: 'United States',
      countryId: 2,
      type: 'morgan',
      name: 'Morgan Dollars',
      tagline: 'U.S Coin List',
      title: 'The Morgan Dollars',
      description: 'The Morgan dollar, designed by George T. Morgan, was struck intermittently from 1878 to 1921. Since this coins inception it has become one of the most popular silver dollars in America.',
      Img: 'morgan.png',
      bottomContent: 'farthing.'
    }];
    const coinList = [{
      id: 1,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'King Charles II ',
      year: 1676,
      tagline: 'Crown',
      title: 'King Charles II',
      description: 'Charles II (29 May 1630 6 February 1685)[c] was King of Scotland from 1649 until 1651 and King of England, Scotland, and Ireland from the 1660 Restoration of the monarchy until his death in 1685.',
      frontImg: '1676f.jpeg',
      frontTitle: 'Charles II',
      frontDescription: 'The bust of King Charles II draped in his flowing hair and laurel leaves.',
      backImg: '1676b.jpeg',
      backTitle: 'EMBOSSED',
      backDescription: 'An original crown from the reign of Charles II .',
      bottomContent: 'An original crown from the reign of Charles II .',
      price: '$1,400',
      ebay: ''
    }, {
      id: 2,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'King James II ',
      year: 1687,
      tagline: 'Crown',
      title: 'King James II',
      description: 'James II and VII was King of England and Ireland as James II and King of Scotland as James VII from the death of his elder brother, Charles II, on 6 February 1685. He was deposed in the Glorious Revolution of 1688. He was the last Catholic monarch of England, Scotland, and Ireland.',
      frontImg: '1687f.jpg',
      frontTitle: 'IACOBVS II DEI GRATIA',
      frontDescription: 'The second bust covered a 1687 Tertio edge.',
      backImg: '1687b.jpg',
      backTitle: 'Cruciform',
      backDescription: 'Qvarto edge, Crowned Cruciform shields.',
      bottomContent: 'Qvarto edge, Crowned Cruciform shields.',
      price: '$1,200',
      ebay: ''
    }, {
      id: 3,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'King William III ',
      year: 1696,
      tagline: 'Crown',
      title: 'King William III',
      description: 'William III, also widely known as William of Orange, was the sovereign Prince of Orange from birth, Stadtholder of Holland, Zeeland, Utrecht, Guelders, and Overijssel in the Dutch Republic from the 1670s, and King of England, Ireland, and Scotland from 1689 until his death in 1702.',
      frontImg: '1693f.jpg',
      frontTitle: 'William III',
      frontDescription: '1696 Great Britain William III Silver Crown 1st Bust',
      backImg: '1696b.jpg',
      backTitle: 'Reverse',
      backDescription: 'First harp in left shield',
      bottomContent: 'First harp in left shield',
      price: '$1,400',
      ebay: ''
    }, {
      id: 4,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Queen Anne ',
      year: 1707,
      tagline: 'Crown',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1707f.jpg',
      frontTitle: 'ANNA 1707',
      frontDescription: 'ANNA DEI GRATIA',
      backImg: '1707b.jpg',
      backTitle: 'Anne',
      backDescription: 'Crowned shields cruciform, six strings to Irish harp.',
      bottomContent: 'Crowned shields cruciform, six strings to Irish harp.',
      price: '$800',
      ebay: ''
    }, {
      id: 5,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'George III ',
      year: 1819,
      tagline: 'Crown',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1819f.jpg',
      frontTitle: 'George III crown',
      frontDescription: 'Shame on he who thinks evil of it.',
      backImg: '1819b.jpg',
      backTitle: 'Benedetto Pistrucci',
      backDescription: 'One of the first coins to feature the iconic St George and the dragon design.',
      bottomContent: 'One of the first coins to feature the iconic St George and the dragon design.',
      price: '$400',
      ebay: ''
    }, {
      id: 6,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'George III ',
      year: 1820,
      tagline: 'Crown',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1820f.jpg',
      frontTitle: 'King George III',
      frontDescription: 'Shows a laureate head portrait of George II by Benedetto Pistrucci.',
      backImg: '1820b.jpg',
      backTitle: 'Saint George',
      backDescription: 'Shame on him who thinks evil of it.',
      bottomContent: 'GEORGE',
      price: '$200',
      ebay: ''
    }, {
      id: 7,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'King George IV ',
      year: 1822,
      tagline: 'Crown',
      title: 'King George IV',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1822f.jpg',
      frontTitle: 'SECUNDO',
      frontDescription: 'Head of king George IV, facing left.',
      backImg: '1822b.jpg',
      backTitle: 'Saint George and the Dragon',
      backDescription: 'Reverse by the legendary Benedetto Pistrucc.',
      bottomContent: 'reverse by the legendary Benedetto Pistrucc.',
      price: '$400',
      ebay: ''
    }, {
      id: 8,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Queen Victoria ',
      year: 1844,
      tagline: 'Crown',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1844f.jpg',
      frontTitle: 'Victoria Young Head',
      frontDescription: 'VICTORIA DEI GRATIA',
      backImg: '1844b.jpg',
      backTitle: 'BRITANNIARUM REGIBA FID: DEF',
      backDescription: 'Crowned arms within branches',
      bottomContent: 'Crowned arms within branches',
      price: '$200',
      ebay: ''
    }, {
      id: 9,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Queen Victoria ',
      year: 1847,
      tagline: 'Crown',
      title: 'The Gothic Crown',
      description: 'Victoria (Alexandrina Victoria; 24 May 1819 22 January 1901) was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era. It was a period of industrial, political, scientific, and military change within the United Kingdom, and was marked by a great expansion of the British Empire. In 1876, the British Parliament voted to grant her the additional title of Empress of India.',
      frontImg: '1847f.jpg',
      frontTitle: 'Victoria',
      frontDescription: 'A sought after 1847 silver Crown of Queen Victoria. This issue is known as the Gothic Crown because its style was inspired by medieval revivalism, a popular art style of that looked to the middle ages for inspiration. The ornate obverse portrait shows Victoria wearing an ornate dress and crown, a plait looping around her ear.',
      backImg: '1847b.jpg',
      backTitle: 'Cruciform',
      backDescription: 'The reverse though the crowned cruciform shields motif is the work of Scottish artist, William Wyon.',
      bottomContent: 'Just 8,000 Gothic crowns were used in 1847 and it remains one of the most beautiful and rarest coins in the world.',
      price: '$7,200',
      ebay: ''
    }, {
      id: 10,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Queen Victoria ',
      year: 1892,
      tagline: 'Crown',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1892f.jpg',
      frontTitle: 'Victoria Jubilee Head',
      frontDescription: 'UK crown obverse features the robed jubilee bust of the mature Queen Victoria',
      backImg: '1892b.jpg',
      backTitle: 'Victoria',
      backDescription: 'Featuring the traditional George and Dragon',
      bottomContent: 'Victoria',
      price: '$200',
      ebay: ''
    }, {
      id: 11,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Queen Victoria ',
      year: 1896,
      tagline: 'Crown',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1896f.jpg',
      frontTitle: 'Victoria',
      frontDescription: 'Victoria Old (Veiled) head.',
      backImg: '1896b.jpg',
      backTitle: 'Victoria Crown LX',
      backDescription: 'Featuring the traditional George and Dragon',
      bottomContent: 'Featuring the traditional George and Dragon',
      price: '$200',
      ebay: ''
    }, {
      id: 12,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'EDWARD VII ',
      year: 1902,
      tagline: 'Crown',
      title: 'King Edward VII',
      description: 'The second child and eldest son of Queen Victoria and Prince Albert of Saxe-Coburg and Gotha, Edward, nicknamed "Bertie", was related to royalty throughout Europe.',
      frontImg: '1902f.jpg',
      frontTitle: 'King Edward',
      frontDescription: 'Seventh facing left',
      backImg: '1902b.jpg',
      backTitle: 'St George',
      backDescription: 'Coronation day was set for 26th June 1902',
      bottomContent: 'EDWARD',
      price: '$400',
      ebay: ''
    }, {
      id: 13,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'George V ',
      year: 1928,
      tagline: 'Crown',
      title: 'King George V',
      description: 'George V was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936. George was born during the reign of his paternal grandmother, Queen Victoria, as the second son of the Prince and Princess of Wales.',
      frontImg: '1928f.jpg',
      frontTitle: 'George V',
      frontDescription: 'The initials BM appear on the truncation of George V neck for the artist: Bertram MacKennal.',
      backImg: '1928b.jpg',
      backTitle: 'Wreath Crown',
      backDescription: 'A large royal crown surrounded by a wreath of shamrocks with roses and thistles.',
      bottomContent: 'GEORGE',
      price: '$400',
      ebay: ''
    }, {
      id: 14,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'George V ',
      year: 1935,
      tagline: 'Crown',
      title: 'King George V',
      description: 'George V was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936. George was born during the reign of his paternal grandmother, Queen Victoria, as the second son of the Prince and Princess of Wales.',
      frontImg: '1935f.jpg',
      frontTitle: 'Jubilee Crown',
      frontDescription: 'GEORGE',
      backImg: '1935b.jpg',
      backTitle: 'Mackennal',
      backDescription: 'Stylised St George and dragon.',
      bottomContent: 'GEORGE',
      price: '$300',
      ebay: ''
    }, {
      id: 15,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'George VI ',
      year: 1937,
      tagline: 'Crown',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1937f.jpg',
      frontTitle: 'GEORGE VI',
      frontDescription: 'The Coronation year of King George VI in 1937',
      backImg: '1937b.jpg',
      backTitle: 'Lion and unicorn',
      backDescription: 'The engravers initials K.G. appear at either side of the shield, between the animals legs.',
      bottomContent: 'The engravers initials K.G. appear at either side of the shield, between the animals legs.',
      price: '$150',
      ebay: ''
    }, {
      id: 17,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'ELIZABETH II ',
      year: 1953,
      tagline: 'Crown',
      title: 'Queen Elizabeth II',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1953f.jpg',
      frontTitle: 'Queen Elizabeth',
      frontDescription: '1953 Great Britain 5 Shillings',
      backImg: '1953b.jpg',
      backTitle: 'Crowned Queen',
      backDescription: 'The coronation of Queen Elizabeth II',
      bottomContent: 'The coronation of Queen Elizabeth II',
      price: '$40',
      ebay: ''
    }, {
      id: 18,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'ELIZABETH II ',
      year: 1960,
      tagline: 'Crown',
      title: 'Queen Elizabeth II',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1960f.jpg',
      frontTitle: 'Elizabeth II',
      frontDescription: 'In 1960 the Royal Mint issued a Special Crown for the British Exhibition in New York.',
      backImg: '1960b.jpg',
      backTitle: 'Four shields',
      backDescription: 'DEI GRATIA REGINA F D. FIVE SHILLINGS',
      bottomContent: 'DEI GRATIA REGINA F D. FIVE SHILLINGS',
      price: '$40',
      ebay: ''
    }, {
      id: 19,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'ELIZABETH II ',
      year: 1965,
      tagline: 'Crown',
      title: 'Queen Elizabeth II',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1965f.jpg',
      frontTitle: 'Elizabeth II',
      frontDescription: '1965 crown to commemorate the death of Sir Winston Churchill',
      backImg: '1977b.jpg',
      backTitle: 'Churchill',
      backDescription: 'Portrait of Churchill.',
      bottomContent: 'Portrait of Churchill.',
      price: '$10',
      ebay: ''
    }, {
      id: 20,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'Elizabeth II ',
      year: 1977,
      tagline: 'Crown',
      title: 'Queen Elizabeth II',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1977f.jpg',
      frontTitle: 'horseback',
      frontDescription: 'THE JUBILEE EQUESTRIAN PORTRAIT',
      backImg: '1977b.jpg',
      backTitle: 'Jubilee',
      backDescription: 'Silver Jubilee of Her Majesty, Queen Elizabeth II.',
      bottomContent: 'Silver Jubilee of Her Majesty, Queen Elizabeth II.',
      price: '$40',
      ebay: ''
    }, {
      id: 21,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'CHARLES III ',
      year: 2023,
      tagline: 'Crown',
      title: 'King Charles III',
      description: 'Charles III is King of the United Kingdom and the 14 other Commonwealth realms. Charles was born in Buckingham Palace during the reign of his maternal grandfather, King George VI, and became heir apparent when his mother, Queen Elizabeth II, acceded to the throne in 1952.',
      frontImg: '2023f.jpg',
      frontTitle: 'Charles III',
      frontDescription: 'Struck to celebrate the coronation of His Majesty The King.',
      backImg: '2023b.jpg',
      backTitle: 'Martin Jennings',
      backDescription: 'The Royal Arms',
      bottomContent: 'The Royal Arms',
      price: '$400',
      ebay: ''
    }, {
      id: 22,
      country: 'United Kingdom',
      type: 'crowns',
      typeid: 1,
      name: 'CHARLES III ',
      year: 2024,
      tagline: 'Crown',
      title: 'King Charles III',
      description: 'Charles III is King of the United Kingdom and the 14 other Commonwealth realms. Charles was born in Buckingham Palace during the reign of his maternal grandfather, King George VI, and became heir apparent when his mother, Queen Elizabeth II, acceded to the throne in 1952.',
      frontImg: '2024f.jpg',
      frontTitle: 'Charles III',
      frontDescription: 'Design from Martin Jennings',
      backImg: '2024b.jpg',
      backTitle: 'Britannia',
      backDescription: 'Great Britain Silver Britannia.',
      bottomContent: 'Great Britain Silver Britannia.',
      price: '$40',
      ebay: ''
    }, {
      id: 23,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'William & Mary ',
      year: 1689,
      tagline: 'Half Crowns',
      title: 'William & Mary',
      description: 'The Latin legends translate as on the obverse "William and Mary by the Grace of God," and abbreviated on the reverse as "King and Queen of Great Britain, France and Ireland." and additionally on the edge "An ornament and a safeguard, in the first year of the reign."',
      frontImg: '1689f.jpg',
      frontTitle: 'William & Mary',
      frontDescription: 'Very Fine William & Mary Great Britain silver 1/2 crown coin.',
      backImg: '1689b.jpg',
      backTitle: 'Grace of God',
      backDescription: 'Very attractive original coin.',
      bottomContent: 'William & Mary',
      price: '$500',
      ebay: ''
    }, {
      id: 24,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'William III ',
      year: 1696,
      tagline: 'Half Crowns',
      title: 'King William III ',
      description: 'William III (William Henry; Dutch: Willem Hendrik; 4 November 1650 8 March 1702),[b] also widely known as William of Orange',
      frontImg: '1696f.jpg',
      frontTitle: 'GVLIELMVS· III·DEI·GRA',
      frontDescription: 'First laureate and draped bust of King William III right, legend around.',
      backImg: '1696b.jpg',
      backTitle: 'William III ',
      backDescription: 'Crowned cruciform shields around cental Nassau lion, divided date above, legend around.',
      bottomContent: 'William III ',
      price: '$500',
      ebay: ''
    }, {
      id: 25,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Queen Anne ',
      year: 1714,
      tagline: 'Half Crowns',
      title: 'Queen Anne ',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1714f.jpg',
      frontTitle: 'ANNA·DEI· GRATIA',
      frontDescription: 'Anne by the Grace of God',
      backImg: '1714b.jpg',
      backTitle: 'Queen Anne ',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'Queen Anne ',
      price: '$400',
      ebay: ''
    }, {
      id: 26,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George II ',
      year: 1745,
      tagline: 'Half Crowns',
      title: 'King George II',
      description: 'George II (George Augustus; German: Georg August; 30 October / 9 November 1683[a] 25 October 1760) was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760.',
      frontImg: '1745f.jpg',
      frontTitle: 'GEORGIUS·II· DEI·GRATIA',
      frontDescription: 'George the Second by the Grace of God',
      backImg: '1745b.jpg',
      backTitle: 'George II',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'George II',
      price: '$850',
      ebay: ''
    }, {
      id: 27,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George III ',
      year: 1817,
      tagline: 'Half Crowns',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1817f.jpg',
      frontTitle: 'George III',
      frontDescription: 'GEORGIUS III DEI GRATIA ',
      backImg: '1817b.jpg',
      backTitle: 'BRITANNIARUM ',
      backDescription: 'Crowned and quartered ornate shield ',
      bottomContent: 'George III',
      price: '$300',
      ebay: ''
    }, {
      id: 28,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George III ',
      year: 1819,
      tagline: 'Half Crowns',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1819f.jpg',
      frontTitle: 'George III',
      frontDescription: 'GEORGIUS III DEI GRATIA ',
      backImg: '1819b.jpg',
      backTitle: 'BRITANNIARUM ',
      backDescription: 'Crowned and quartered ornate shield ',
      bottomContent: 'George III',
      price: '$300',
      ebay: ''
    }, {
      id: 29,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George IIII ',
      year: 1820,
      tagline: 'Half Crowns',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1820f.jpg',
      frontTitle: 'GEORGIUS ',
      frontDescription: 'George the Fourth by the Grace of God',
      backImg: '1820b.jpg',
      backTitle: 'BRITANNIARUM ',
      backDescription: 'King of the Britains Defender of the FaithGod and my right',
      bottomContent: 'George IIII',
      price: '$300',
      ebay: ''
    }, {
      id: 30,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George IV ',
      year: 1826,
      tagline: 'Half Crowns',
      title: 'King George IV',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1826f.jpg',
      frontTitle: 'GEORGIUS ',
      frontDescription: 'George the Fourth by the Grace of God',
      backImg: '1826b.jpg',
      backTitle: 'BRITANNIARUM ',
      backDescription: 'King of the Britains Defender of the FaithGod and my right',
      bottomContent: 'George IV',
      price: '$300',
      ebay: ''
    }, {
      id: 31,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'William IIII ',
      year: 1834,
      tagline: 'Half Crowns',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1834f.jpg',
      frontTitle: 'GEORGIUS ',
      frontDescription: 'George the Fourth by the Grace of God',
      backImg: '1834b.jpg',
      backTitle: 'George IIII',
      backDescription: 'King of the Britains Defender of the FaithGod and my right',
      bottomContent: 'George IIII',
      price: '$300',
      ebay: ''
    }, {
      id: 32,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Queen Victoria ',
      year: 1883,
      tagline: 'Half Crowns',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1883f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Young uncrowned portrait (Young Head) of Queen Victoria ',
      backImg: '1883b.jpg',
      backTitle: 'BRITANNIARUM',
      backDescription: 'Crowned quartered shield of arms within olive wreath, legend around, national flower emblems below.',
      bottomContent: 'Queen Victoria',
      price: '$250',
      ebay: ''
    }, {
      id: 33,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Queen Victoria ',
      year: 1887,
      tagline: 'Half Crowns',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1887f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Crowned and veiled bust (Jubilee Head) of Queen Victoria ',
      backImg: '1887b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned quartered shield of arms within garter and collar, legend around, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '$250',
      ebay: ''
    }, {
      id: 34,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Queen Victoria ',
      year: 1893,
      tagline: 'Half Crowns',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1893f.jpg',
      frontTitle: 'Queen Victoria',
      frontDescription: 'Victoria Old Veiled Head Crown',
      backImg: '1893b.jpg',
      backTitle: 'Victorian crown',
      backDescription: 'Silver Half Crown',
      bottomContent: 'Queen Victoria',
      price: '$250',
      ebay: ''
    }, {
      id: 35,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Edward VII ',
      year: 1902,
      tagline: 'Half Crowns',
      title: 'King Edward VII',
      description: 'Edward VII (Albert Edward; 9 November 1841 6 May 1910) was King of the United Kingdom and the British Dominions, and Emperor of India, from 22 January 1901 until his death in 1910.',
      frontImg: '1902f.jpg',
      frontTitle: 'Edward VII',
      frontDescription: 'Uncrowned portrait of King Edward VII ',
      backImg: '1902b.jpg',
      backTitle: 'Edwardus VII ',
      backDescription: 'Crowned quartered shield of arms within Garter, legend around.',
      bottomContent: 'Edward VII',
      price: '$200',
      ebay: ''
    }, {
      id: 36,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George V ',
      year: 1911,
      tagline: 'Half Crowns',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1911f.jpg',
      frontTitle: 'GEORGIVS V ',
      frontDescription: 'George the Fifth by the Grace of God King of all the Britains',
      backImg: '1911b.jpg',
      backTitle: 'George V',
      backDescription: 'Crowned quartered shield of arms within Garter band, legend around.',
      bottomContent: 'George V',
      price: '$150',
      ebay: ''
    }, {
      id: 37,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George V ',
      year: 1935,
      tagline: 'Half Crowns',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1935f.jpg',
      frontTitle: 'GEORGIVS V ',
      frontDescription: 'George the Fifth by the Grace of God King of all the Britains',
      backImg: '1935b.jpg',
      backTitle: 'George V',
      backDescription: 'Crowned quartered shield of arms within Garter band, legend around.',
      bottomContent: 'George V',
      price: '$150',
      ebay: ''
    }, {
      id: 38,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'George VI ',
      year: 1940,
      tagline: 'Half Crowns',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1940f.jpg',
      frontTitle: 'GEORGIVS VI ',
      frontDescription: 'George the Sixth by the Grace of God King of all the Britains',
      backImg: '1940b.jpg',
      backTitle: 'Pound sterling',
      backDescription: 'Quartered shield of arms flanked by crowned royal cyphers, legend above, denomination.',
      bottomContent: 'George VI',
      price: '$100',
      ebay: ''
    }, {
      id: 39,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Elizabeth II ',
      year: 1970,
      tagline: 'Shilling',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1970f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'Young laureate bust of Queen Elizabeth II',
      backImg: '1970b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Central Tudor rose surrounded by thistles, shamrocks and leeks, legend above, denomination.',
      bottomContent: 'Queen ELIZABETH II',
      price: '$20',
      ebay: ''
    }, {
      id: 40,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Elizabeth II ',
      year: 1964,
      tagline: 'Shilling',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1964f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'Young laureate bust of Queen Elizabeth II',
      backImg: '1964b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Central Tudor rose surrounded by thistles, shamrocks and leeks, legend above, denomination.',
      bottomContent: 'Queen ELIZABETH II',
      price: '$20',
      ebay: ''
    }, {
      id: 41,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Elizabeth II ',
      year: 1956,
      tagline: 'Shilling',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1956f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'Young laureate bust of Queen Elizabeth II',
      backImg: '1956b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Central Tudor rose surrounded by thistles, shamrocks and leeks, legend above, denomination.',
      bottomContent: 'Queen ELIZABETH II',
      price: '$20',
      ebay: ''
    }, {
      id: 42,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Elizabeth II ',
      year: 1955,
      tagline: 'Shilling',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1955f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'Young laureate bust of Queen Elizabeth II',
      backImg: '1955b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Central Tudor rose surrounded by thistles, shamrocks and leeks, legend above, denomination.',
      bottomContent: 'Queen ELIZABETH II',
      price: '$20',
      ebay: ''
    }, {
      id: 43,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George VI ',
      year: 1950,
      tagline: 'Shilling',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1950f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1950b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Crowned lion passant atop crown',
      bottomContent: 'George VI',
      price: '$20',
      ebay: ''
    }, {
      id: 44,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George VI ',
      year: 1949,
      tagline: 'Shilling',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1949f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1949b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Crowned lion passant atop crown',
      bottomContent: 'George VI',
      price: '$20',
      ebay: ''
    }, {
      id: 45,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George VI ',
      year: 1945,
      tagline: 'Shilling',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1945f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1945b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Crowned lion passant atop crown',
      bottomContent: 'George VI',
      price: '$20',
      ebay: ''
    }, {
      id: 46,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George VI ',
      year: 1943,
      tagline: 'Shilling',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1943f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1943b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Crowned lion passant atop crown',
      bottomContent: 'George VI',
      price: '$20',
      ebay: ''
    }, {
      id: 47,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George VI ',
      year: 1938,
      tagline: 'Shilling',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1938f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1938b.jpg',
      backTitle: 'Shillings  ',
      backDescription: 'Crowned lion passant atop crown',
      bottomContent: 'George VI',
      price: '$20',
      ebay: ''
    }, {
      id: 48,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George V ',
      year: 1935,
      tagline: 'Shilling',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1935f.jpg',
      frontTitle: 'GEORGIVS V ',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1935b.jpg',
      backTitle: 'Grace of God King ',
      backDescription: 'Crowned lion passant atop crown, legend above',
      bottomContent: 'George V',
      price: '$20',
      ebay: ''
    }, {
      id: 49,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George V ',
      year: 1914,
      tagline: 'Shilling',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1914f.jpg',
      frontTitle: 'GEORGIVS V ',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1914b.jpg',
      backTitle: 'Grace of God King ',
      backDescription: 'Crowned lion passant atop crown, legend above',
      bottomContent: 'George V',
      price: '$20',
      ebay: ''
    }, {
      id: 50,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George V ',
      year: 1911,
      tagline: 'Shilling',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1911f.jpg',
      frontTitle: 'GEORGIVS V ',
      frontDescription: 'Uncrowned portrait of King George VI left',
      backImg: '1911b.jpg',
      backTitle: 'Grace of God King ',
      backDescription: 'Crowned lion passant atop crown, legend above',
      bottomContent: 'George V',
      price: '$20',
      ebay: ''
    }, {
      id: 51,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Edward VII ',
      year: 1910,
      tagline: 'Shilling',
      title: 'King Edward VII',
      description: 'The second child and eldest son of Queen Victoria and Prince Albert of Saxe-Coburg and Gotha, Edward, nicknamed "Bertie", was related to royalty throughout Europe.',
      frontImg: '1910f.jpg',
      frontTitle: 'Edward VII',
      frontDescription: 'Uncrowned portrait of King Edward VII ',
      backImg: '1910b.jpg',
      backTitle: 'Edward VII',
      backDescription: 'Crowned lion passant atop crown dividing date.',
      bottomContent: 'Edward VII',
      price: '$20',
      ebay: ''
    }, {
      id: 52,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Victoria ',
      year: 1895,
      tagline: 'Shilling',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1895f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Victoria Old Veiled Head Crown',
      backImg: '1895b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned shields of arms with national flower emblems between, all within Garter.',
      bottomContent: 'Queen Victoria',
      price: '$60',
      ebay: ''
    }, {
      id: 53,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Victoria ',
      year: 1889,
      tagline: 'Shilling',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1889f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Crowned and veiled bust (Jubilee Head) of Queen Victoria ',
      backImg: '1889b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned Royal shield within Garter, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '$60',
      ebay: ''
    }, {
      id: 54,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Victoria ',
      year: 1887,
      tagline: 'Shilling',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1887f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Crowned and veiled bust (Jubilee Head) of Queen Victoria ',
      backImg: '1887b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned Royal shield within Garter, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '$60',
      ebay: ''
    }, {
      id: 55,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Victoria ',
      year: 1881,
      tagline: 'Shilling',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1881f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Young uncrowned portrait (Young Head) of Queen Victoria ',
      backImg: '1881b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crown above denomination within wreath',
      bottomContent: 'Queen Victoria',
      price: '$60',
      ebay: ''
    }, {
      id: 56,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Victoria ',
      year: 1875,
      tagline: 'Shilling',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1875f.jpg',
      frontTitle: 'VICTORIA DEI GRATIA',
      frontDescription: 'Young uncrowned portrait (Young Head) of Queen Victoria ',
      backImg: '1875b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crown above denomination within wreath',
      bottomContent: 'Queen Victoria',
      price: '$60',
      ebay: ''
    }, {
      id: 57,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George IIII ',
      year: 1835,
      tagline: 'Shilling',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1835f.jpg',
      frontTitle: 'George IIII',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1835b.jpg',
      backTitle: 'Defender of the Faith',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George IIII',
      price: '$160',
      ebay: ''
    }, {
      id: 58,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George IV ',
      year: 1826,
      tagline: 'Shilling',
      title: 'King George IV',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1826f2.jpg',
      frontTitle: 'George IV',
      frontDescription: 'George the Fourth by the Grace of God',
      backImg: '1826b2.jpg',
      backTitle: 'George IV',
      backDescription: 'Crowned lion passant atop crown, legend around, national flower emblems below.',
      bottomContent: 'George IV',
      price: '$140',
      ebay: ''
    }, {
      id: 59,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George IV ',
      year: 1826,
      tagline: 'Shilling',
      title: 'King George IV',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1826f.jpg',
      frontTitle: 'George IV',
      frontDescription: 'George the Fourth by the Grace of God',
      backImg: '1826b.jpg',
      backTitle: 'George IV',
      backDescription: 'Crowned lion passant atop crown, legend around, national flower emblems below.',
      bottomContent: 'George IV',
      price: '$140',
      ebay: ''
    }, {
      id: 60,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George IIII ',
      year: 1823,
      tagline: 'Shilling',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1823f.jpg',
      frontTitle: 'George IIII',
      frontDescription: 'New laureate portrait of King George III ',
      backImg: '1823b.jpg',
      backTitle: 'House of Hanover ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George IIII',
      price: '$60',
      ebay: ''
    }, {
      id: 61,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George IIII ',
      year: 1823,
      tagline: 'Shilling',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1823f.jpg',
      frontTitle: 'George IIII',
      frontDescription: 'New laureate portrait of King George III ',
      backImg: '1823b.jpg',
      backTitle: 'House of Hanover ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George IIII',
      price: '$60',
      ebay: ''
    }, {
      id: 62,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George III ',
      year: 1819,
      tagline: 'Shilling',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1819f2.jpg',
      frontTitle: 'George III',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1819b2.jpg',
      backTitle: 'George the Third ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George III',
      price: '$60',
      ebay: ''
    }, {
      id: 63,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George III ',
      year: 1819,
      tagline: 'Shilling',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1819f.jpg',
      frontTitle: 'George III',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1819b.jpg',
      backTitle: 'George the Third ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George III',
      price: '$60',
      ebay: ''
    }, {
      id: 64,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George III ',
      year: 1817,
      tagline: 'Shilling',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1817f.jpg',
      frontTitle: 'George III',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1817b.jpg',
      backTitle: 'George the Third ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George III',
      price: '$60',
      ebay: ''
    }, {
      id: 65,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George III ',
      year: 1817,
      tagline: 'Shilling',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1817f.jpg',
      frontTitle: 'George III',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1817b.jpg',
      backTitle: 'George the Third ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George III',
      price: '$60',
      ebay: ''
    }, {
      id: 66,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George III ',
      year: 1787,
      tagline: 'Shilling',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1787f.jpg',
      frontTitle: 'George III',
      frontDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      backImg: '1787b.jpg',
      backTitle: 'George the Third ',
      backDescription: 'Ornate crowned Royal shield overlaid with smaller crowned shield, all within Garter.',
      bottomContent: 'George III',
      price: '$60',
      ebay: ''
    }, {
      id: 67,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George II ',
      year: 1745,
      tagline: 'Shilling',
      title: 'King George II',
      description: 'George II (George Augustus; German: Georg August; 30 October / 9 November 1683[a] 25 October 1760) was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760.',
      frontImg: '1745f2.jpg',
      frontTitle: 'Lima',
      frontDescription: 'George the Second by the Grace of God',
      backImg: '1745b2.jpg',
      backTitle: 'George II',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'George II',
      price: '$250',
      ebay: ''
    }, {
      id: 68,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George II ',
      year: 1745,
      tagline: 'Shilling',
      title: 'King George II',
      description: 'George II (George Augustus; German: Georg August; 30 October / 9 November 1683[a] 25 October 1760) was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760.',
      frontImg: '1745f.jpg',
      frontTitle: 'Lima',
      frontDescription: 'George the Second by the Grace of God',
      backImg: '1745b.jpg',
      backTitle: 'George II',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'George II',
      price: '$250',
      ebay: ''
    }, {
      id: 69,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'George I ',
      year: 1723,
      tagline: 'Shilling',
      title: 'King George I',
      description: 'George I (George Louis; German: Georg Ludwig; 28 May 1660 11 June 1727)[a] was King of Great Britain and Ireland from 1 August 1714 and ruler of the Electorate of Hanover within the Holy Roman Empire from 23 January 1698 until his death in 1727. He was the first British monarch of the House of Hanover.',
      frontImg: '1723f.jpg',
      frontTitle: 'George I',
      frontDescription: 'Second laureate and draped bust of King George I',
      backImg: '1723b.jpg',
      backTitle: 'Johann Ochs',
      backDescription: 'Duke of Brunswick and Lueneburg, Arch Treasurer and Prince Elector of the Holy Roman Empire',
      bottomContent: 'George I',
      price: '$600',
      ebay: ''
    }, {
      id: 70,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Anne',
      year: 1711,
      tagline: 'Shilling',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1711f.jpg',
      frontTitle: 'Third draped bust ',
      frontDescription: 'Anne by the Grace of God',
      backImg: '1711b.jpg',
      backTitle: 'Queen Anne',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'Queen Anne',
      price: '$500',
      ebay: ''
    }, {
      id: 71,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Anne',
      year: 1708,
      tagline: 'Shilling',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1708f.jpg',
      frontTitle: 'Grace of God',
      frontDescription: 'Second draped bust of Queen Anne left',
      backImg: '1708b.jpg',
      backTitle: 'Queen Anne',
      backDescription: 'Crowned cruciform shields with central Garter star, divided date above, legend around.',
      bottomContent: 'Queen Anne',
      price: '$500',
      ebay: ''
    }, {
      id: 72,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Anne',
      year: 1707,
      tagline: 'Shilling',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1707medallf.jpg',
      frontTitle: 'ANNA·DEI· GRATIA·E\n',
      frontDescription: 'Draped Edinburgh bust of Queen Anne left',
      backImg: '1707medallb.jpg',
      backTitle: 'Queen Anne',
      backDescription: 'Crowned cruciform shields around central Garter star, divided date above, legend around.',
      bottomContent: 'Queen Anne',
      price: '$500',
      ebay: ''
    }, {
      id: 73,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'Queen Anne',
      year: 1701,
      tagline: 'Shilling',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1700AnnAMedalf.jpg',
      frontTitle: 'GRATIA',
      frontDescription: 'Third draped bust of Queen Anne ',
      backImg: '1700AnnAMedalb.jpg',
      backTitle: 'Queen Anne',
      backDescription: 'Magnae Britanniae Franciae Et Hiberniae Regina',
      bottomContent: 'Queen Anne',
      price: '$500',
      ebay: ''
    }, {
      id: 74,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'King James II',
      year: 1700,
      tagline: 'Shilling',
      title: 'King James II',
      description: 'James II and VII was King of England and Ireland as James II and King of Scotland as James VII from the death of his elder brother, Charles II, on 6 February 1685. He was deposed in the Glorious Revolution of 1688. He was the last Catholic monarch of England, Scotland, and Ireland.',
      frontImg: '1700f.jpg',
      frontTitle: 'King James II',
      frontDescription: 'King James II Shilling minted by the Royal Mint at the Tower Mint in London. ',
      backImg: '1700b.jpg',
      backTitle: 'Arms of England',
      backDescription: 'The Reverse is four crowned shields, bearing the arms of England Scotland France and Ireland, arranged in a cross. Star of the Garter at the centre. ',
      bottomContent: 'King James II',
      price: '$600',
      ebay: ''
    }, {
      id: 75,
      country: 'United Kingdom',
      type: 'shilling',
      typeid: 4,
      name: 'King Charles II ',
      year: 1663,
      tagline: 'Shilling',
      title: 'King Charles II',
      description: 'Charles III is King of the United Kingdom and the 14 other Commonwealth realms. Charles was born in Buckingham Palace during the reign of his maternal grandfather, King George VI, and became heir apparent when his mother, Queen Elizabeth II, acceded to the throne in 1952.',
      frontImg: '1663f.jpg',
      frontTitle: 'King Charles II',
      frontDescription: 'First laureate and draped bust of King Charles II right, legend around.',
      backImg: '1663b.jpg',
      backTitle: 'Milled',
      backDescription: "Crowned cruciform shields around central Garter star with interlinked C's in angles, divided date above, legend around.",
      bottomContent: 'King Charles II',
      price: '$800',
      ebay: ''
    }, {
      id: 76,
      country: 'United Kingdom',
      type: 'halfcrowns',
      typeid: 2,
      name: 'Queen Elizabeth II ',
      year: 1960,
      tagline: 'Half Crowns',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1960f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'Queen ELIZABETH II',
      backImg: '1960b.jpg',
      backTitle: 'Queen ELIZABETH II',
      backDescription: 'Queen ELIZABETH II',
      bottomContent: 'Queen ELIZABETH II',
      price: '$40',
      ebay: ''
    }, {
      id: 77,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Victoria ',
      year: 1849,
      tagline: 'Florin',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1877f.jpg',
      frontTitle: 'Godless',
      frontDescription: 'Crowned bust of Queen Victoria left, legend and date around.',
      backImg: '1877b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned cruciform shields of arms around central Tudor rose, national flower emblems in angles, legend above, denomination below.',
      bottomContent: 'Queen Victoria',
      price: '$400',
      ebay: ''
    }, {
      id: 78,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Victoria ',
      year: 1849,
      tagline: 'Florin',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1878f.jpg',
      frontTitle: 'Godless',
      frontDescription: 'Crowned bust of Queen Victoria left, legend and date around.',
      backImg: '1878b.jpg',
      backTitle: 'Queen Victoria',
      backDescription: 'Crowned cruciform shields of arms around central Tudor rose, national flower emblems in angles, legend above, denomination below.',
      bottomContent: 'Queen Victoria',
      price: '$400',
      ebay: ''
    }, {
      id: 79,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Victoria ',
      year: 1887,
      tagline: 'Florin',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1887f.jpg',
      frontTitle: 'Obverse',
      frontDescription: 'Crowned and veiled bust (Jubilee Head) of Queen Victoria ',
      backImg: '1887b.jpg',
      backTitle: 'Reverse',
      backDescription: 'Crowned cruciform shields of England, Scotland and Ireland, sceptres with national flower emblems in angles, divided date above, legend around.',
      bottomContent: 'Queen Victoria',
      price: '$150',
      ebay: ''
    }, {
      id: 80,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Victoria ',
      year: 1895,
      tagline: 'Florin',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1895f.jpg',
      frontTitle: 'Queen Victoria',
      frontDescription: 'Older crowned and veiled bust of Queen Victoria left, legend around.',
      backImg: '1895b.jpg',
      backTitle: '3rd portrait',
      backDescription: 'Crown above shields of England, Scotland and Ireland with national flower emblems between, all within Garter with divided date below and legend around.',
      bottomContent: 'Queen Victoria',
      price: '$150',
      ebay: ''
    }, {
      id: 81,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Edward VII ',
      year: 1902,
      tagline: 'Florin',
      title: 'King Edward VII ',
      description: 'The second child and eldest son of Queen Victoria and Prince Albert of Saxe-Coburg and Gotha, Edward, nicknamed "Bertie", was related to royalty throughout Europe.',
      frontImg: '1902f.jpg',
      frontTitle: 'Edward VII ',
      frontDescription: 'Uncrowned portrait of King Edward VII right, legend around.',
      backImg: '1902b.jpg',
      backTitle: 'EDWARDVS VII ',
      backDescription: "Standing figure of Britannia on ship's bow holding trident in the right hand and shield bearing the Union flag in the left, legend around, date below.",
      bottomContent: 'Edward VII ',
      price: '$100',
      ebay: ''
    }, {
      id: 82,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'George V ',
      year: 1911,
      tagline: 'Florin',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1911f.jpg',
      frontTitle: 'George V',
      frontDescription: 'Uncrowned portrait of King George V left',
      backImg: '1911b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'Crowned cruciform shields around central Garter star, sceptres with national emblems in angles, denomination above, divided date below.',
      bottomContent: 'George V',
      price: '$60',
      ebay: ''
    }, {
      id: 83,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'George V ',
      year: 1935,
      tagline: 'Florin',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1935f.jpg',
      frontTitle: 'George V',
      frontDescription: 'Uncrowned portrait of King George V left',
      backImg: '1935b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'Crowned cruciform shields around central Garter star, sceptres with national emblems in angles, denomination above, divided date below.',
      bottomContent: 'George V',
      price: '$60',
      ebay: ''
    }, {
      id: 84,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'George VI ',
      year: 1944,
      tagline: 'Florin',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1944f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Portrait of King George VI facing left',
      backImg: '1944b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'Coat of arms ',
      bottomContent: 'George VI',
      price: '$60',
      ebay: ''
    }, {
      id: 85,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'George VI ',
      year: 1951,
      tagline: 'Florin',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1951f.jpg',
      frontTitle: 'George VI',
      frontDescription: 'Portrait of King George VI facing left',
      backImg: '1951b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'Coat of arms ',
      bottomContent: 'George VI',
      price: '$60',
      ebay: ''
    }, {
      id: 86,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Elizabeth II ',
      year: 1970,
      tagline: 'Florin',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1970f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'The florin was introduced as part of an experiment in decimalisation that went no further at the time. ',
      backImg: '1970b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'floral design',
      bottomContent: 'Queen ELIZABETH II',
      price: '$40',
      ebay: ''
    }, {
      id: 87,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Elizabeth II ',
      year: 1970,
      tagline: 'Florin',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '19702f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'The florin was introduced as part of an experiment in decimalisation that went no further at the time. ',
      backImg: '19702b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'floral design',
      bottomContent: 'Queen ELIZABETH II',
      price: '$40',
      ebay: ''
    }, {
      id: 88,
      country: 'United Kingdom',
      type: 'florin',
      typeid: 3,
      name: 'Queen Elizabeth II ',
      year: 1956,
      tagline: 'Florin',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1956f.jpg',
      frontTitle: 'Queen ELIZABETH II',
      frontDescription: 'The florin was introduced as part of an experiment in decimalisation that went no further at the time. ',
      backImg: '1956b.jpg',
      backTitle: 'ONE FLORIN',
      backDescription: 'floral design',
      bottomContent: 'Queen ELIZABETH II',
      price: '$40',
      ebay: ''
    }, {
      id: 89,
      country: 'United States',
      type: 'morgan',
      typeid: 10,
      name: 'Morgan Dollars',
      year: 1881,
      tagline: 'Morgan Dollars',
      title: '1881 Morgan Dollars',
      description: 'The Morgan dollar is a United States dollar coin minted from 1878 to 1904, in 1921, and beginning again in 2021 as a collectible. It was the first standard silver dollar minted since the passage of the Coinage Act of 1873. ',
      frontImg: '1881f.jpg',
      frontTitle: 'Anna Willess Williams',
      frontDescription: 'The bust of Lady Liberty',
      backImg: '1881b.jpg',
      backTitle: 'Morgan Dollar Reverse',
      backDescription: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      bottomContent: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      price: '$60',
      ebay: ''
    }, {
      id: 90,
      country: 'United States',
      type: 'morgan',
      typeid: 10,
      name: 'Morgan Dollars',
      year: 1885,
      tagline: 'Morgan Dollars',
      title: '1885 Morgan Dollars',
      description: 'The Morgan dollar is a United States dollar coin minted from 1878 to 1904, in 1921, and beginning again in 2021 as a collectible. It was the first standard silver dollar minted since the passage of the Coinage Act of 1873. ',
      frontImg: '1885f.jpg',
      frontTitle: 'Anna Willess Williams',
      frontDescription: 'The bust of Lady Liberty',
      backImg: '1885b.jpg',
      backTitle: 'Morgan Dollar Reverse',
      backDescription: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      bottomContent: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      price: '$60',
      ebay: ''
    }, {
      id: 91,
      country: 'United States',
      type: 'morgan',
      typeid: 10,
      name: 'Morgan Dollars',
      year: 1890,
      tagline: 'Morgan Dollars',
      title: '1890 Morgan Dollars',
      description: 'The Morgan dollar is a United States dollar coin minted from 1878 to 1904, in 1921, and beginning again in 2021 as a collectible. It was the first standard silver dollar minted since the passage of the Coinage Act of 1873. ',
      frontImg: '1890f.jpg',
      frontTitle: 'Anna Willess Williams',
      frontDescription: 'The bust of Lady Liberty',
      backImg: '1890b.jpg',
      backTitle: 'Morgan Dollar Reverse',
      backDescription: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      bottomContent: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      price: '$60',
      ebay: ''
    }, {
      id: 92,
      country: 'United States',
      type: 'morgan',
      typeid: 10,
      name: 'Morgan Dollars',
      year: 1900,
      tagline: 'Morgan Dollars',
      title: '1900 Morgan Dollars',
      description: 'The Morgan dollar is a United States dollar coin minted from 1878 to 1904, in 1921, and beginning again in 2021 as a collectible. It was the first standard silver dollar minted since the passage of the Coinage Act of 1873. ',
      frontImg: '1900f.jpg',
      frontTitle: 'Anna Willess Williams',
      frontDescription: 'The bust of Lady Liberty',
      backImg: '1900b.jpg',
      backTitle: 'Morgan Dollar Reverse',
      backDescription: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      bottomContent: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      price: '$60',
      ebay: ''
    }, {
      id: 93,
      country: 'United States',
      type: 'morgan',
      typeid: 10,
      name: 'Morgan Dollars',
      year: 2023,
      tagline: 'Morgan Dollars',
      title: '2023 Morgan Dollars',
      description: 'The Morgan dollar is a United States dollar coin minted from 1878 to 1904, in 1921, and beginning again in 2021 as a collectible. It was the first standard silver dollar minted since the passage of the Coinage Act of 1873. ',
      frontImg: '2023f.jpg',
      frontTitle: 'Anna Willess Williams',
      frontDescription: 'The bust of Lady Liberty',
      backImg: '2023b.jpg',
      backTitle: 'Morgan Dollar Reverse',
      backDescription: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      bottomContent: 'Morgans depiction of the eagle is extremely intricate and the its feathers can be seen in full detail. ',
      price: '$60',
      ebay: ''
    }, {
      id: 94,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'King Charles II ',
      year: 1677,
      tagline: 'Sixpence',
      title: 'King Charles II',
      description: 'Charles II (29 May 1630 6 February 1685)[c] was King of Scotland from 1649 until 1651 and King of England, Scotland, and Ireland from the 1660 Restoration of the monarchy until his death in 1685.',
      frontImg: '1677f.jpg',
      frontTitle: 'CAROLVS·II',
      frontDescription: 'Laureate and draped bust of King Charles II right, legend around.',
      backImg: '1677b.jpg',
      backTitle: 'House of Stuart ',
      backDescription: "Crowned cruciform shields around central Garter star with interlinked C's in angles, divided date above, legend around.",
      bottomContent: 'King Charles II',
      price: '$600',
      ebay: ''
    }, {
      id: 95,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'William III ',
      year: 1698,
      tagline: 'Sixpence',
      title: 'King William III ',
      description: 'William III (William Henry; Dutch: Willem Hendrik; 4 November 1650 8 March 1702),[b] also widely known as William of Orange',
      frontImg: '1698f.jpg',
      frontTitle: 'GVLIELMVS· III·DEI·GRA',
      frontDescription: 'Third laureate and draped bust of King William III right, legend around.',
      backImg: '1698b.jpg',
      backTitle: 'House of Stuart ',
      backDescription: 'Crowned cruciform shields around central lion rampant, divided date above, legend around.',
      bottomContent: '',
      price: '$600',
      ebay: ''
    }, {
      id: 96,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Anne',
      year: 1707,
      tagline: 'Sixpence',
      title: 'Queen Anne',
      description: 'Anne was Queen of Great Britain and Ireland following the ratification of the Acts of Union on 1 May 1707, which merged the kingdoms of Scotland and England. Before this, she was Queen of England, Scotland, and Ireland from 8 March 1702. Anne was born during the reign of her uncle King Charles II.',
      frontImg: '1707f.jpg',
      frontTitle: 'ANNA·DEI· GRATIA',
      frontDescription: 'Normal draped bust of Queen Anne left, legend around.',
      backImg: '1707b.jpg',
      backTitle: 'Circulated ',
      backDescription: 'Crowned cruciform shields around central Garter star, divided date above, legend around.',
      bottomContent: 'Queen Anne',
      price: 'N/A',
      ebay: ''
    }, {
      id: 97,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George I',
      year: 1723,
      tagline: 'Sixpence',
      title: 'King George I',
      description: 'George I (George Louis; German: Georg Ludwig; 28 May 1660 11 June 1727)[a] was King of Great Britain and Ireland from 1 August 1714 and ruler of the Electorate of Hanover within the Holy Roman Empire from 23 January 1698 until his death in 1727. He was the first British monarch of the House of Hanover.',
      frontImg: '1723f.jpg',
      frontTitle: 'GEORGIVS',
      frontDescription: 'Laureate and draped bust of King George I right, legend around.',
      backImg: '1723b.jpg',
      backTitle: 'Reverse',
      backDescription: 'Crowned cruciform shields around central Garter star, divided date above, legend around.',
      bottomContent: 'King George I',
      price: '$600',
      ebay: ''
    }, {
      id: 98,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George II',
      year: 1757,
      tagline: 'Sixpence',
      title: 'King George II',
      description: 'George II (George Augustus; German: Georg August; 30 October / 9 November 1683[a] 25 October 1760) was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760.',
      frontImg: '1757f.jpg',
      frontTitle: 'GEORGIUS·II· DEI·GRATIA',
      frontDescription: 'Older laureate and draped bust of King George II left, legend around.',
      backImg: '1757b.jpg',
      backTitle: 'House of Hanover ',
      backDescription: 'Crowned cruciform shields around central Garter star, divided date above, legend around.',
      bottomContent: 'King George II',
      price: '$150',
      ebay: ''
    }, {
      id: 99,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George III',
      year: 1782,
      tagline: 'Sixpence',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1782f.jpg',
      frontTitle: 'GEORGIVS·III',
      frontDescription: 'Laureate and draped bust of King George III right, legend around.',
      backImg: '1782b.jpg',
      backTitle: 'Grace of God',
      backDescription: 'Cruciform shields around central Garter star with crowns in angles, legend around, date below.',
      bottomContent: 'King George III',
      price: '',
      ebay: ''
    }, {
      id: 100,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George III',
      year: 1810,
      tagline: 'Sixpence',
      title: 'King George III',
      description: 'George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. The Acts of Union 1800 unified Great Britain and Ireland into the United Kingdom of Great Britain and Ireland, with George as its king.',
      frontImg: '1810f.jpg',
      frontTitle: 'GEORGIVS·III',
      frontDescription: 'Laureate portrait of King George III right, legend around, date below.',
      backImg: '1810b.jpg',
      backTitle: 'GEOR:III',
      backDescription: 'George the Third by the Grace of God King of the Britains Defender of the Faith',
      bottomContent: 'King George III',
      price: '',
      ebay: ''
    }, {
      id: 101,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George IIII ',
      year: 1821,
      tagline: 'Sixpence',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1821f.jpg',
      frontTitle: 'GEORGIUS IIII ',
      frontDescription: 'Laureate portrait of King George IV left, legend around.',
      backImg: '1821b.jpg',
      backTitle: 'ANNO 1821',
      backDescription: 'Ornate garnished crowned quartered shield of arms overlaid with second, smaller crowned shield, national flower emblems around, date below',
      bottomContent: 'King George IIII',
      price: '',
      ebay: ''
    }, {
      id: 102,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George IIII ',
      year: 1826,
      tagline: 'Sixpence',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1826f.jpg',
      frontTitle: 'GEORGIUS IIII ',
      frontDescription: 'Laureate portrait of King George IV left, legend around.',
      backImg: '1826b.jpg',
      backTitle: 'Benedetto Pistrucci',
      backDescription: 'Square topped crowned quartered shield of arms overlaid with second, smaller crowned shield, Garter with legend around, date below.',
      bottomContent: 'King George IIII',
      price: '',
      ebay: ''
    }, {
      id: 103,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George IIII ',
      year: 1864,
      tagline: 'Sixpence',
      title: 'King George IIII',
      description: 'George IV was the eldest child of King George III and Queen Charlotte. He led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. ',
      frontImg: '1864f.jpg',
      frontTitle: 'GEORGIUS IIII ',
      frontDescription: 'Laureate portrait of King George III right, legend around, date below.',
      backImg: '1864b.jpg',
      backTitle: 'Benedetto Pistrucci',
      backDescription: 'Crowned quartered shield of arms, overlaid with smaller crowned shield, legend around on garter.',
      bottomContent: 'King George IIII',
      price: '',
      ebay: ''
    }, {
      id: 104,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Victoria ',
      year: 1887,
      tagline: 'Sixpence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1887f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: "Crowned and veiled bust (Jubilee Head) of Queen Victoria left, legend around, engraver's initials below truncation.",
      backImg: '1887b.jpg',
      backTitle: 'Edgar Boehm',
      backDescription: 'Crowned quartered shield of arms within Garter, legend around, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 105,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Victoria ',
      year: 1887,
      tagline: 'Sixpence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1887yf.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: "Crowned and veiled bust (Jubilee Head) of Queen Victoria left, legend around, engraver's initials below truncation.",
      backImg: '1887yb.jpg',
      backTitle: 'Edgar Boehm',
      backDescription: 'Crowned quartered shield of arms within Garter, legend around, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 106,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Victoria ',
      year: 1888,
      tagline: 'Sixpence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1888f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: "Crowned and veiled bust (Jubilee Head) of Queen Victoria left, legend around, engraver's initials below truncation.",
      backImg: '1888b.jpg',
      backTitle: 'Edgar Boehm',
      backDescription: 'Crowned quartered shield of arms within Garter, legend around, divided date below.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 107,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Victoria ',
      year: 1895,
      tagline: 'Sixpence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1895f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: 'Older diademed and veiled bust (Old Head) of Queen Victoria left, legend around.',
      backImg: '1895b.jpg',
      backTitle: 'Thomas Brock',
      backDescription: 'Crowned denomination within wreath, date below.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 108,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Edward VII ',
      year: 1905,
      tagline: 'Sixpence',
      title: 'King Edward VII ',
      description: 'The second child and eldest son of Queen Victoria and Prince Albert of Saxe-Coburg and Gotha, Edward, nicknamed "Bertie", was related to royalty throughout Europe.',
      frontImg: '1905f.jpg',
      frontTitle: 'EDWARDVS VII',
      frontDescription: 'Uncrowned bust of King Edward VII right, legend around.',
      backImg: '1905b.jpg',
      backTitle: 'de Saulles',
      backDescription: 'Crowned denomination within wreath (olive sprig on left, oak on right), date below.',
      bottomContent: 'King Edward VII ',
      price: '',
      ebay: ''
    }, {
      id: 109,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George V ',
      year: 1911,
      tagline: 'Sixpence',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1911f.jpg',
      frontTitle: 'GEORGIVS V',
      frontDescription: 'Uncrowned portrait of King George V left, legend around.',
      backImg: '1911b.jpg',
      backTitle: 'MacKennal',
      backDescription: 'Crowned lion passant atop crown dividing date within circle, legend above, denomination below.',
      bottomContent: 'King George V',
      price: '',
      ebay: ''
    }, {
      id: 110,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George V ',
      year: 1935,
      tagline: 'Sixpence',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1935f.jpg',
      frontTitle: 'GEORGIVS V',
      frontDescription: 'Uncrowned portrait of King George V left, legend around.',
      backImg: '1935b.jpg',
      backTitle: 'MacKennal',
      backDescription: 'Three oak sprigs with six acorns, denomination above, date below.',
      bottomContent: 'King George V',
      price: '',
      ebay: ''
    }, {
      id: 111,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George VI ',
      year: 1943,
      tagline: 'Sixpence',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1943f.jpg',
      frontTitle: 'GEORGIVS VI ',
      frontDescription: 'Uncrowned portrait of King George VI left, legend around.',
      backImg: '1943b.jpg',
      backTitle: 'Paget',
      backDescription: 'Crowned royal cypher dividing date, legend above, denomination below.',
      bottomContent: 'King George VI',
      price: '',
      ebay: ''
    }, {
      id: 112,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George VI ',
      year: 1948,
      tagline: 'Sixpence',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1948f.jpg',
      frontTitle: 'GEORGIVS VI ',
      frontDescription: 'Uncrowned portrait of King George VI left, legend around.',
      backImg: '1948b.jpg',
      backTitle: 'Paget',
      backDescription: 'Crowned royal cypher dividing date, legend above, denomination below.',
      bottomContent: 'King George VI',
      price: '',
      ebay: ''
    }, {
      id: 113,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'George VI ',
      year: 1950,
      tagline: 'Sixpence',
      title: 'George VI ',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1950f.jpg',
      frontTitle: 'GEORGIVS VI ',
      frontDescription: 'Uncrowned portrait of King George VI left, legend around.',
      backImg: '1950b.jpg',
      backTitle: 'Paget',
      backDescription: 'Crowned royal cypher dividing date, legend above, denomination below.',
      bottomContent: 'King George VI',
      price: '',
      ebay: ''
    }, {
      id: 114,
      country: 'United Kingdom',
      type: 'sixpence',
      typeid: 5,
      name: 'Queen Elizabeth II ',
      year: 1970,
      tagline: 'Sixpence',
      title: 'Queen Elizabeth II ',
      description: 'Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.',
      frontImg: '1970f.jpg',
      frontTitle: 'ELIZABETH·II',
      frontDescription: 'Young laureate portrait of Queen Elizabeth II right, legend around.',
      backImg: '1970b.jpg',
      backTitle: 'Gillick',
      backDescription: 'Tudor rose, shamrock, thistle and leek aligned in a cross, legend above, denomination and date below.',
      bottomContent: 'Queen Elizabeth II ',
      price: '',
      ebay: ''
    }, {
      id: 115,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'Queen Victoria ',
      year: 1884,
      tagline: 'Threepence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1884f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: 'Uncrowned portrait (Young Head) of Queen Victoria left, legend around.',
      backImg: '1884f.jpg',
      backTitle: 'Wyon',
      backDescription: 'Crowned denomination divides date within oak wreath.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 116,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'Queen Victoria ',
      year: 1889,
      tagline: 'Threepence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1889f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: 'Crowned and veiled portrait (Jubilee Head) of Queen Victoria left, legend around.',
      backImg: '1889b.jpg',
      backTitle: 'Boehm',
      backDescription: 'Crowned denomination divides date within oak wreath.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 117,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'Queen Victoria ',
      year: 1900,
      tagline: 'Threepence',
      title: 'Queen Victoria',
      description: 'Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901. Her reign of 63 years and 216 days, which was longer than those of any of her predecessors, is known as the Victorian era.',
      frontImg: '1900f.jpg',
      frontTitle: 'VICTORIA ',
      frontDescription: "Older crowned and veiled bust (Old Head) of Queen Victoria left with designer's initials below truncation and legend around.",
      backImg: '1900b.jpg',
      backTitle: 'Brock',
      backDescription: 'Crowned denomination divides date within oak sprigs.',
      bottomContent: 'Queen Victoria',
      price: '',
      ebay: ''
    }, {
      id: 118,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'Edward VII ',
      year: 1902,
      tagline: 'Threepence',
      title: 'King Edward VII ',
      description: 'The second child and eldest son of Queen Victoria and Prince Albert of Saxe-Coburg and Gotha, Edward, nicknamed "Bertie", was related to royalty throughout Europe.',
      frontImg: '1902f.jpg',
      frontTitle: 'EDWARDVS VII',
      frontDescription: 'Uncrowned portrait of King Edward VII right, legend around.',
      backImg: '1902b.jpg',
      backTitle: 'de Saulles',
      backDescription: 'Crowned denomination dividing date within oak wreath.',
      bottomContent: 'King Edward VII ',
      price: '',
      ebay: ''
    }, {
      id: 119,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'George V ',
      year: 1911,
      tagline: 'Threepence',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1911f.jpg',
      frontTitle: 'GEORGIVS V',
      frontDescription: 'Uncrowned portrait of King George V left, legend around.',
      backImg: '1911b.jpg',
      backTitle: 'incl. Maundy',
      backDescription: 'Crowned denomination dividing date within oak wreath.',
      bottomContent: 'King George V',
      price: '',
      ebay: ''
    }, {
      id: 120,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'George V ',
      year: 1935,
      tagline: 'Threepence',
      title: 'King George V',
      description: 'George V (George Frederick Ernest Albert; 3 June 1865 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.',
      frontImg: '1935f.jpg',
      frontTitle: 'GEORGIVS V',
      frontDescription: 'Modified uncrowned portrait of King George V facing left, legend around.',
      backImg: '1935b.jpg',
      backTitle: 'MacKennal',
      backDescription: 'Three oak sprigs with three acorns, denomination above, date below.',
      bottomContent: 'King George V',
      price: '',
      ebay: ''
    }, {
      id: 121,
      country: 'United Kingdom',
      type: 'threepence',
      typeid: 6,
      name: 'George VI ',
      year: 1943,
      tagline: 'Threepence',
      title: 'King George VI',
      description: 'George VI was King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death on 6 February 1952.',
      frontImg: '1943f.jpg',
      frontTitle: 'GEORGIVS VI ',
      frontDescription: "Uncrowned portrait of King George VI left, legend around, designer's initials below truncation.",
      backImg: '1943b.jpg',
      backTitle: 'Paget',
      backDescription: "Three-headed thrift'plant denomination above date below.",
      bottomContent: 'King George VI',
      price: '',
      ebay: ''
    }];
    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites,
      coinList,
      cointypeList
    };
  }
};
InMemoryDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], InMemoryDataService);


/***/ }),

/***/ 96:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/pipes/orderby.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByPipe: () => (/* binding */ OrderByPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 8696);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);



let OrderByPipe = class OrderByPipe {
  transform(array, sortBy, order) {
    const sortOrder = order ? order : 'asc'; // setting default ascending order
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(array, [sortBy], [sortOrder]);
  }
};
OrderByPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'orderBy'
})], OrderByPipe);


/***/ }),

/***/ 892:
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.component.html?ngResource */ 9828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);






let SocialComponent = class SocialComponent {
  constructor(config) {
    this.config = config;
    this.socialsites$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getSocialsites();
  }
  getSocialsites() {
    this.socialsites$ = this.config.getSettings('websites').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
SocialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-social',
  template: _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], SocialComponent);


/***/ }),

/***/ 2284:
/*!**********************************************************!*\
  !*** ./src/app/website-block/website-block.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteBlockComponent: () => (/* binding */ WebsiteBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _website_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-block.component.html?ngResource */ 8744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let WebsiteBlockComponent = class WebsiteBlockComponent {
  static #_ = this.propDecorators = {
    website: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
WebsiteBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-website-block',
  template: _website_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], WebsiteBlockComponent);


/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2675);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 1564:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-social app-social {
  float: right;
  right: 10px;
  margin-right: 0;
  margin-left: 15px;
}`, "",{"version":3,"sources":["webpack://./src/app/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;AACF","sourcesContent":[".footer-social app-social {\n  float: right;\n  right: 10px;\n  margin-right: 0;\n  margin-left: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4240:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
  margin-top: 15px;
}`, "",{"version":3,"sources":["webpack://./src/app/navigation/navigation.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF","sourcesContent":["#header {\n  margin-top: 15px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 440:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n\t<div\n\t\tclass=\"top-border wow fadeInDown animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInDown\"></div>\n\t<div\n\t\tclass=\"right-border wow fadeInRight animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInRight\"></div>\n\t<div\n\t\tclass=\"bottom-border wow fadeInUp animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInUp\"></div>\n\t<div\n\t\tclass=\"left-border wow fadeInLeft animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInLeft\"></div>\n</div>\n<!--Main Content Area-->\n<main id=\"content\">\n\t<app-navigation></app-navigation>\n\t<router-outlet></router-outlet>\n\t<app-footer></app-footer>\n</main>\n<!--End Main Content Area-->\n";

/***/ }),

/***/ 4474:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (footer$ | async; as footer) {\n\t<footer id=\"landing-footer\" class=\"clearfix\">\n\t\t<div class=\"row clearfix\">\n\t\t\t<p id=\"copyright\" class=\"col-2\">\n\t\t\t\t{{ footer.tagline }}\n\t\t\t\t<a routerLink=\"{{ footer.developerlink }}\">{{ footer.developer }}</a>\n\t\t\t</p>\n\t\t\t<!--Social Icons in Footer-->\n\t\t\t<div class=\"col-2\" style=\"text-align: right\">\n\t\t\t\t<app-social></app-social>\n\t\t\t</div>\n\t\t\t<!--End of Social Icons in Footer-->\n\t\t</div>\n\t</footer>\n}\n";

/***/ }),

/***/ 1036:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-1\">\n\t\t\t<!--Logo-->\n\t\t\t<div id=\"logo\">\n\t\t\t\t<!--Logo that is shown on the banner-->\n\t\t\t\t<img src=\"assets/images/logo.jpg\" id=\"banner-logo\" alt=\"Landing Page\" />\n\t\t\t\t<!--End of Banner Logo-->\n\n\t\t\t\t<!--The Logo that is shown on the sticky Navigation Bar-->\n\t\t\t\t<img\n\t\t\t\t\tsrc=\"assets/images/logo.jpg\"\n\t\t\t\t\tid=\"navigation-logo\"\n\t\t\t\t\talt=\"Landing Page\" />\n\t\t\t\t<!--End of Navigation Logo-->\n\t\t\t</div>\n\t\t\t<!--End of Logo-->\n\n\t\t\t<!--Main Navigation-->\n\t\t\t<nav id=\"nav-main\">\n\t\t\t\t<app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\n\t\t\t</nav>\n\t\t\t<!--End of Main Navigation-->\n\n\t\t\t<div id=\"nav-trigger\">\n\t\t\t\t<mat-icon\n\t\t\t\t\taria-hidden=\"false\"\n\t\t\t\t\taria-label=\"Navigation icon\"\n\t\t\t\t\tfontIcon=\"reorder\"\n\t\t\t\t\t(click)=\"toggleMenu(!menuOpen)\"></mat-icon>\n\t\t\t</div>\n\t\t\t<nav id=\"nav-mobile\">\n\t\t\t\t@if (menuOpen === true) {\n\t\t\t\t\t<app-navmenu\n\t\t\t\t\t\t[menu]=\"menu\"\n\t\t\t\t\t\t(menuStatus)=\"toggleMenu($event)\"\n\t\t\t\t\t\t[menuOpen]=\"menuOpen\"></app-navmenu>\n\t\t\t\t}\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n</div>\n<!--End of Header-->\n";

/***/ }),

/***/ 1116:
/*!***********************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul [class.expanded]=\"menuOpen === true\">\n\t@for (menuItem of menu; track menuItem) {\n\t\t<li>\n\t\t\t<a\n\t\t\t\trouterLink=\"{{ menuItem.link }}\"\n\t\t\t\t(click)=\"toggleMenu()\"\n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions]=\"{ exact: true }\"\n\t\t\t\t>{{ menuItem.title }}</a\n\t\t\t>\n\t\t</li>\n\t}\n</ul>\n";

/***/ }),

/***/ 9828:
/*!*********************************************************!*\
  !*** ./src/app/social/social.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"social-icons\">\n\t@for (website of socialsites$ | async; track website; let i = $index) {\n\t\t<li>\n\t\t\t<a\n\t\t\t\ttarget=\"{{ website.target }}\"\n\t\t\t\ttitle=\"{{ website.title }}\"\n\t\t\t\thref=\"{{ website.link }}{{ website.username }}\">\n\t\t\t\t<i class=\"fa fa-{{ website.icon }} fa-1x\"></i\n\t\t\t\t><span>{{ website.title }}</span>\n\t\t\t</a>\n\t\t</li>\n\t}\n</ul>\n";

/***/ }),

/***/ 8744:
/*!***********************************************************************!*\
  !*** ./src/app/website-block/website-block.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<a\n\ttarget=\"{{ website.target }}\"\n\ttitle=\"{{ website.title }}\"\n\thref=\"{{ website.link }}/{{ website.username }}\">\n\t<i class=\"fa fa-{{ website.icon }} fa-1x\"></i><span>{{ website.title }}</span>\n</a>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map