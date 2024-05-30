"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WhishlistComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var cuttext_pipe_1 = require("src/app/common/pipes/cuttext.pipe");
var WhishlistComponent = /** @class */ (function () {
    function WhishlistComponent(_EcomdataService, _CartService, _ToastrService) {
        this._EcomdataService = _EcomdataService;
        this._CartService = _CartService;
        this._ToastrService = _ToastrService;
        this.whishList = [];
    }
    WhishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._EcomdataService.getWishlist().subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this.whishList = response.data;
                    _this._EcomdataService.updateWhishNumberSignal(response.data.length);
                }
            }
        });
    };
    WhishlistComponent.prototype.addToCart = function (id) {
        var _this = this;
        this._CartService.addToCart(id).subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this._ToastrService.success(response.message);
                    _this._CartService.updateCartNumberSignal(response.numOfCartItems);
                }
            }
        });
    };
    WhishlistComponent.prototype.removeFromWhish = function (id) {
        var _this = this;
        this._EcomdataService.removeWishlist(id).subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this._ToastrService.success(response.message, '', {
                        positionClass: 'toast-bottom-right'
                    });
                    _this.whishList = _this.whishList.filter(function (item) {
                        return response.data.includes(item._id);
                    });
                    _this._EcomdataService.updateWishlistItem(response.data);
                    _this._EcomdataService.updateWhishNumberSignal(_this.whishList.length);
                }
            }
        });
    };
    WhishlistComponent = __decorate([
        core_1.Component({
            selector: 'app-whishlist',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, cuttext_pipe_1.CuttextPipe, ngx_toastr_1.ToastrModule],
            templateUrl: './whishlist.component.html',
            styleUrls: ['./whishlist.component.scss']
        })
    ], WhishlistComponent);
    return WhishlistComponent;
}());
exports.WhishlistComponent = WhishlistComponent;
