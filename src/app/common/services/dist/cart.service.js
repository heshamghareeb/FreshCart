"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("src/environments/environment");
var CartService = /** @class */ (function () {
    function CartService(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.baseUrl = "https://ecommerce.routemisr.com/api/v1/";
        this.cartNumber = new rxjs_1.BehaviorSubject(0);
        this.cartNumberSignal = core_1.signal(0);
    }
    CartService.prototype.addToCart = function (prodId) {
        return this._HttpClient.post(environment_1.environment.baseUrlData + "/cart", {
            productId: prodId
        });
    };
    CartService.prototype.getCartUser = function () {
        return this._HttpClient.get(environment_1.environment.baseUrlData + '/cart');
    };
    CartService.prototype.removeCartItem = function (prodId) {
        return this._HttpClient["delete"](this.baseUrl + ("cart/" + prodId));
    };
    CartService.prototype.updateCartCount = function (prodId, countNum) {
        return this._HttpClient.put(this.baseUrl + ("cart/" + prodId), {
            count: countNum
        });
    };
    CartService.prototype.clearCart = function () {
        return this._HttpClient["delete"](this.baseUrl + "cart");
    };
    CartService.prototype.checkOut = function (cartId, orderInfo) {
        return this._HttpClient.post(this.baseUrl +
            ("orders/checkout-session/" + cartId + "?url=https://heshamghareeb.github.io/freshcart"), {
            shippingAddress: orderInfo
        });
    };
    CartService.prototype.updateCartNumberSignal = function (num) {
        this.cartNumberSignal.update(function () { return num; });
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
