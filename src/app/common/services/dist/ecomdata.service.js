"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EcomdataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("src/environments/environment");
var EcomdataService = /** @class */ (function () {
    function EcomdataService(_HttpClient, _ToastrService) {
        this._HttpClient = _HttpClient;
        this._ToastrService = _ToastrService;
        this.cartNumberSignal = core_1.signal(0);
        this.wishList = new rxjs_1.BehaviorSubject([]);
        this.whishNumberSignal = core_1.signal(0);
        this.products = [];
    }
    EcomdataService.prototype.getUserOrders = function (userId) {
        return this._HttpClient.get(environment_1.environment.baseUrlData + "/orders/user/" + userId);
    };
    EcomdataService.prototype.addToCart = function (id) {
        var _this = this;
        this.sendToCart(id).subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this._ToastrService.success(response.message);
                    _this.updateCartNumberSignal(response.numOfCartItems);
                }
            }
        });
    };
    EcomdataService.prototype.updateCartNumberSignal = function (num) {
        this.cartNumberSignal.update(function () { return num; });
    };
    EcomdataService.prototype.SetcheckOut = function (userId, userDetails) {
        return this._HttpClient.post(environment_1.environment.baseUrlData +
            ("/orders/checkout-session/" + userId + "?url=" + environment_1.environment.payUrl), userDetails);
    };
    EcomdataService.prototype.getProducts = function (pageNum) {
        if (pageNum === void 0) { pageNum = 1; }
        return this._HttpClient.get(environment_1.environment.baseUrlData + ("/products?page=" + pageNum));
    };
    EcomdataService.prototype.getProductById = function (id) {
        return this._HttpClient.get(environment_1.environment.baseUrlData + '/products/' + id);
    };
    EcomdataService.prototype.getCategories = function () {
        return this._HttpClient.get(environment_1.environment.baseUrlData + '/categories');
    };
    EcomdataService.prototype.getCategoriesById = function (id) {
        return this._HttpClient.get(environment_1.environment.baseUrlData + '/categories/' + id);
    };
    EcomdataService.prototype.getSubCategoriesToCat = function (id) {
        return this._HttpClient.get(environment_1.environment.baseUrlData + ("/categories/" + id + "/subcategories"));
    };
    EcomdataService.prototype.sendToCart = function (id) {
        return this._HttpClient.post(environment_1.environment.baseUrlData + '/cart', {
            productId: id
        });
    };
    EcomdataService.prototype.getCartData = function () {
        return this._HttpClient.get(environment_1.environment.baseUrlData + '/cart');
    };
    EcomdataService.prototype.clearCart = function () {
        return this._HttpClient["delete"](environment_1.environment.baseUrlData + '/cart');
    };
    EcomdataService.prototype.updatePoductCount = function (id, countNumb) {
        return this._HttpClient.put(environment_1.environment.baseUrlData + "/cart/" + id, {
            count: countNumb
        });
    };
    EcomdataService.prototype.deletePoductCart = function (id) {
        return this._HttpClient["delete"](environment_1.environment.baseUrlData + "/cart/" + id);
    };
    EcomdataService.prototype.getBrands = function (pageNum) {
        if (pageNum === void 0) { pageNum = 1; }
        return this._HttpClient.get(environment_1.environment.baseUrlData + ("/brands?page=" + pageNum));
    };
    EcomdataService.prototype.getBrandData = function (id) {
        return this._HttpClient.get(environment_1.environment.baseUrlData + ("/brands/" + id));
    };
    ///Wish List Information
    EcomdataService.prototype.setWishlist = function (id) {
        return this._HttpClient.post(environment_1.environment.baseUrlData + "/wishlist", {
            productId: id
        });
    };
    EcomdataService.prototype.removeWishlist = function (id) {
        return this._HttpClient["delete"](environment_1.environment.baseUrlData + ("/wishlist/" + id));
    };
    EcomdataService.prototype.getWishlist = function () {
        return this._HttpClient.get(environment_1.environment.baseUrlData + "/wishlist");
    };
    EcomdataService.prototype.updateWishlistItem = function (item) {
        this.wishList.next(item);
    };
    EcomdataService.prototype.updateWhishNumberSignal = function (num) {
        this.whishNumberSignal.update(function () { return num; });
    };
    EcomdataService.prototype.setAddresses = function (data) {
        return this._HttpClient.post(environment_1.environment.baseUrlData + "/addresses", data);
    };
    EcomdataService.prototype.getAddresses = function () {
        return this._HttpClient.get(environment_1.environment.baseUrlData + "/addresses");
    };
    EcomdataService.prototype.removeAddresses = function (id) {
        return this._HttpClient["delete"](environment_1.environment.baseUrlData + ("/addresses/" + id));
    };
    EcomdataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EcomdataService);
    return EcomdataService;
}());
exports.EcomdataService = EcomdataService;
