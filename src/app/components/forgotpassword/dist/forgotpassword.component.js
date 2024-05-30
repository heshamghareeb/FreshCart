"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgotpasswordComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(_AuthService, _Renderer2, _Router) {
        this._AuthService = _AuthService;
        this._Renderer2 = _Renderer2;
        this._Router = _Router;
        this.first = true;
        this.seconde = false;
        this.done = false;
        this.isLoading = false;
        this.errMsg = '';
        this.email = '';
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email])
        });
        this.verifyCode = new forms_1.FormGroup({
            resetCode: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^\d{6}$/),
            ])
        });
        this.resetPassword = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            newPassword: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^\w{6,}$/),
            ])
        });
    };
    Object.defineProperty(ForgotpasswordComponent.prototype, "f", {
        get: function () {
            return this.forgotForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotpasswordComponent.prototype, "r", {
        get: function () {
            return this.verifyCode.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotpasswordComponent.prototype, "c", {
        get: function () {
            return this.resetPassword.controls;
        },
        enumerable: false,
        configurable: true
    });
    ForgotpasswordComponent.prototype.handleForgotPassword = function () {
        var _this = this;
        this.isLoading = true;
        if (this.forgotForm.valid) {
            this._AuthService.setForgotPassword(this.forgotForm.value).subscribe({
                next: function (response) {
                    var _a;
                    if (response.statusMsg === 'success') {
                        _this.errMsg = response.message;
                        _this.isLoading = false;
                        _this.forgotForm.disable();
                        _this.email = (_a = _this.forgotForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
                        _this.first = false;
                        _this.seconde = true;
                    }
                },
                error: function (err) {
                    _this.errMsg = err.error.message;
                    _this.isLoading = false;
                }
            });
        }
    };
    ForgotpasswordComponent.prototype.handleVerifyResetCode = function () {
        var _this = this;
        this.isLoading = true;
        if (this.verifyCode.valid) {
            this._AuthService.setVerifyResetCode(this.verifyCode.value).subscribe({
                next: function (response) {
                    var _a, _b;
                    if (response.status === 'Success') {
                        _this.errMsg = response.status;
                        _this.isLoading = false;
                        _this.verifyCode.disable();
                        _this.seconde = false;
                        _this.done = true;
                        (_a = _this.resetPassword.get('email')) === null || _a === void 0 ? void 0 : _a.setValue(_this.email);
                        (_b = _this.resetPassword.get('email')) === null || _b === void 0 ? void 0 : _b.disable();
                    }
                },
                error: function (err) {
                    _this.errMsg = err.error.message;
                    _this.isLoading = false;
                }
            });
        }
    };
    ForgotpasswordComponent.prototype.handleResetPassword = function () {
        var _this = this;
        var _a;
        this.isLoading = true;
        if (this.resetPassword.valid) {
            var userData = {
                email: this.email,
                newPassword: (_a = this.resetPassword.get('newPassword')) === null || _a === void 0 ? void 0 : _a.value
            };
            this._AuthService.resetPassword(userData).subscribe({
                next: function (response) {
                    if (response === null || response === void 0 ? void 0 : response.token) {
                        _this.errMsg = response.message;
                        localStorage.setItem('_token', response === null || response === void 0 ? void 0 : response.token);
                        _this._AuthService.saveUser();
                        _this.isLoading = false;
                        _this.resetPassword.disable();
                        setTimeout(function () {
                            _this._Router.navigate(['/home']);
                        }, 1000);
                    }
                },
                error: function (err) {
                    _this.errMsg = err.error.message;
                    _this.isLoading = false;
                }
            });
        }
    };
    __decorate([
        core_1.ViewChild('form1')
    ], ForgotpasswordComponent.prototype, "form1");
    __decorate([
        core_1.ViewChild('form2')
    ], ForgotpasswordComponent.prototype, "form2");
    __decorate([
        core_1.ViewChild('form3')
    ], ForgotpasswordComponent.prototype, "form3");
    ForgotpasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgotpassword',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, core_2.TranslateModule],
            templateUrl: './forgotpassword.component.html',
            styleUrls: ['./forgotpassword.component.scss']
        })
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());
exports.ForgotpasswordComponent = ForgotpasswordComponent;
