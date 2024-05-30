"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var core_3 = require("@angular/core");
var common_2 = require("@angular/common");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, _AuthService, _Router, _Renderer2, _EcomdataService, _CartService, document, translateService) {
        var _this = this;
        this.translate = translate;
        this._AuthService = _AuthService;
        this._Router = _Router;
        this._Renderer2 = _Renderer2;
        this._EcomdataService = _EcomdataService;
        this._CartService = _CartService;
        this.document = document;
        this.translateService = translateService;
        this.pageDirAR = false;
        this.whishItemNumberS = 0;
        this.cartItemNumberS = 0;
        this.userName = '';
        core_1.effect(function () {
            _this.whishItemNumberS = _this._EcomdataService.whishNumberSignal();
        });
        core_1.effect(function () {
            _this.cartItemNumberS = _this._CartService.cartNumberSignal();
        });
    }
    NavbarComponent.prototype.changeLangage = function (lang) {
        var htmlTag = this.document.getElementsByTagName("html")[0];
        htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
        this.translateService.setDefaultLang(lang);
        this.translateService.use(lang);
        this.changeCssFile(lang);
    };
    NavbarComponent.prototype.changeCssFile = function (lang) {
        var headTag = this.document.getElementsByTagName("head")[0];
        var existingLink = this.document.getElementById("langCss");
        var bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";
        if (existingLink) {
            existingLink.href = bundleName;
        }
        else {
            var newLink = this.document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.type = "text/css";
            newLink.id = "langCss";
            newLink.href = bundleName;
            headTag.appendChild(newLink);
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AuthService.userData.subscribe({
            next: function (data) {
                var _a;
                if (data !== null) {
                    _this.userName = data.name ? (_a = data === null || data === void 0 ? void 0 : data.name) === null || _a === void 0 ? void 0 : _a.slice(0, 1).toUpperCase() : 'U';
                }
                else {
                    _this.userName = 'U';
                }
            }
        });
        if (this._Router.url.includes('cart')) {
            this._CartService.getCartUser().subscribe({
                next: function (response) {
                    if (response.status === 'success') {
                        _this._CartService.updateCartNumberSignal(response.numOfCartItems);
                        _this.cartItemNumberS = _this._CartService.cartNumberSignal();
                    }
                },
                error: function (err) {
                }
            });
        }
        if (!this._Router.url.includes('whishlist')) {
            this._EcomdataService.getWishlist().subscribe({
                next: function (response) {
                    if (response.status === 'success') {
                        var whishList = response.data.map(function (item) { return item._id; });
                        _this._EcomdataService.updateWhishNumberSignal(response.data.length);
                        _this._EcomdataService.updateWishlistItem(whishList);
                        _this.whishItemNumberS = _this._EcomdataService.whishNumberSignal();
                    }
                }
            });
        }
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('_token');
        this._AuthService.userData.next(null);
        this._Router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, router_1.RouterLinkActive, core_2.TranslateModule],
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        }),
        __param(6, core_3.Inject(common_2.DOCUMENT))
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
