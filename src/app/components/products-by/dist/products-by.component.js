"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsByComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var cuttext_pipe_1 = require("src/app/common/pipes/cuttext.pipe");
var card_component_1 = require("../card/card.component");
var ProductsByComponent = /** @class */ (function () {
    function ProductsByComponent(_ActivatedRoute, _EcomdataService, _CartService) {
        this._ActivatedRoute = _ActivatedRoute;
        this._EcomdataService = _EcomdataService;
        this._CartService = _CartService;
        this.products = [];
        this.whishList = [];
    }
    ProductsByComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._EcomdataService.getProducts().subscribe({
            next: function (response) {
                _this._EcomdataService.products = response.data;
            }
        });
        this._EcomdataService.wishList.subscribe(function (data) {
            if (data.length > 0) {
                _this.whishList = data;
            }
        });
        this._ActivatedRoute.paramMap.subscribe({
            next: function (params) {
                _this._ActivatedRoute.url.subscribe(function (url) {
                    _this.path = url[0].path;
                });
                _this.filterId = params.get('id');
            }
        });
        if (this.path === 'brands') {
            for (var _i = 0, _a = this._EcomdataService.products; _i < _a.length; _i++) {
                var product = _a[_i];
                if (product.brand._id === this.filterId) {
                    this.products.push(product);
                }
            }
        }
        else if (this.path === 'categorydetails') {
            for (var _b = 0, _c = this._EcomdataService.products; _b < _c.length; _b++) {
                var product = _c[_b];
                if (product.category._id === this.filterId) {
                    this.products.push(product);
                }
            }
        }
    };
    ProductsByComponent.prototype.addToCart = function (id) {
        this._CartService.addToCart(id);
    };
    ProductsByComponent = __decorate([
        core_1.Component({
            selector: 'app-products-by',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, cuttext_pipe_1.CuttextPipe, ngx_toastr_1.ToastrModule, card_component_1.CardComponent],
            templateUrl: './products-by.component.html',
            styleUrl: './products-by.component.scss'
        })
    ], ProductsByComponent);
    return ProductsByComponent;
}());
exports.ProductsByComponent = ProductsByComponent;
