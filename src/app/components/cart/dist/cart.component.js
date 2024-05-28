"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(_CartService, _Renderer2) {
        this._CartService = _CartService;
        this._Renderer2 = _Renderer2;
        this.cartDetails = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._CartService.getCartUser().subscribe({
            next: function (response) {
                _this.cartDetails = response;
            },
            error: function (err) {
                _this.cartDetails = false;
            }
        });
    };
    CartComponent.prototype.removeItem = function (id, element) {
        var _this = this;
        this._Renderer2.setAttribute(element, 'disabled', 'true');
        this._CartService.removeCartItem(id).subscribe({
            next: function (response) {
                _this.cartDetails = response;
                _this._Renderer2.removeAttribute(element, 'disabled');
                _this._CartService.cartNumber.next(response.numOfCartItems);
                _this._CartService.updateCartNumberSignal(response.numOfCartItems);
            },
            error: function (err) {
                _this._Renderer2.removeAttribute(element, 'disabled');
            }
        });
    };
    ///          0
    CartComponent.prototype.changeCount = function (count, id, el1, el2) {
        var _this = this;
        if (count >= 1) {
            this._Renderer2.setAttribute(el1, 'disabled', 'true');
            this._Renderer2.setAttribute(el2, 'disabled', 'true');
            this._CartService.updateCartCount(id, count).subscribe({
                next: function (response) {
                    _this.cartDetails = response;
                    _this._Renderer2.removeAttribute(el1, 'disabled');
                    _this._Renderer2.removeAttribute(el2, 'disabled');
                },
                error: function (err) {
                    _this._Renderer2.removeAttribute(el1, 'disabled');
                    _this._Renderer2.removeAttribute(el2, 'disabled');
                }
            });
        }
    };
    CartComponent.prototype.clear = function () {
        var _this = this;
        this._CartService.clearCart().subscribe({
            next: function (response) {
                if (response.message === 'success') {
                    _this.cartDetails = false;
                    _this._CartService.cartNumber.next(0);
                    _this._CartService.updateCartNumberSignal(0);
                }
            }
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, core_2.TranslateModule],
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
