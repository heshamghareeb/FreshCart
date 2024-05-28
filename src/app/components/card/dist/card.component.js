"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var cuttext_pipe_1 = require("src/app/common/pipes/cuttext.pipe");
var core_2 = require("@ngx-translate/core");
var CardComponent = /** @class */ (function () {
    function CardComponent(_CartService, _EcomdataService, _ToastrService) {
        this._CartService = _CartService;
        this._EcomdataService = _EcomdataService;
        this._ToastrService = _ToastrService;
        this.cutTextNum = 0;
        this.wish = [];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.addToCart = function (id) {
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
    CardComponent.prototype.addToWhish = function (id) {
        var _this = this;
        this._EcomdataService.setWishlist(id).subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this._ToastrService.success(response.message, '', {
                        positionClass: 'toast-bottom-right'
                    });
                    _this._EcomdataService.updateWishlistItem(response.data);
                    _this._EcomdataService.updateWhishNumberSignal(response.data.length);
                    _this.wish = _this._EcomdataService.wishList.subscribe(function (data) {
                        if (data.length > 0) {
                            _this.wish = data;
                        }
                    });
                }
            }
        });
    };
    CardComponent.prototype.removeFromWhish = function (id) {
        var _this = this;
        this._EcomdataService.removeWishlist(id).subscribe({
            next: function (response) {
                if (response.status === 'success') {
                    _this._ToastrService.success(response.message, '', {
                        positionClass: 'toast-bottom-right'
                    });
                    _this._EcomdataService.updateWishlistItem(response.data);
                    _this._EcomdataService.updateWhishNumberSignal(response.data.length);
                    _this.wish = _this._EcomdataService.wishList.subscribe(function (data) {
                        if (data.length > 0) {
                            _this.wish = data;
                        }
                    });
                }
            }
        });
    };
    __decorate([
        core_1.Input({ required: true })
    ], CardComponent.prototype, "product");
    __decorate([
        core_1.Input({ required: true })
    ], CardComponent.prototype, "cutTextNum");
    __decorate([
        core_1.Input({ required: true })
    ], CardComponent.prototype, "wish");
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, cuttext_pipe_1.CuttextPipe, ngx_toastr_1.ToastrModule, core_2.TranslateModule],
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
