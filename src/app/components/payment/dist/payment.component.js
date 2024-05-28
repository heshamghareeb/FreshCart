"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(_ActivatedRoute, _CartService) {
        this._ActivatedRoute = _ActivatedRoute;
        this._CartService = _CartService;
        this.cartId = '';
        this.orderForm = new forms_1.FormGroup({
            details: new forms_1.FormControl(''),
            phone: new forms_1.FormControl(''),
            city: new forms_1.FormControl('')
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute.paramMap.subscribe({
            next: function (params) {
                _this.cartId = params.get('id');
            }
        });
    };
    PaymentComponent.prototype.handleForm = function () {
        this._CartService.checkOut(this.cartId, this.orderForm.value).subscribe({
            next: function (response) {
                if (response.status == 'success') {
                    console.log(response, 'response handleForm checkOut');
                    window.open(response.session.url, '_self');
                }
            }
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule],
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.scss']
        })
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
