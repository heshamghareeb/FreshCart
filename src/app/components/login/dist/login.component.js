"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_AuthService, _fb, _Router, toastr, translate) {
        this._AuthService = _AuthService;
        this._fb = _fb;
        this._Router = _Router;
        this.toastr = toastr;
        this.translate = translate;
        this.passwordShow = false;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['test13@test.com', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['123456', [forms_1.Validators.required, forms_1.Validators.pattern(/^\w{6,}$/)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        this.isLoading = true;
        if (this.loginForm.valid) {
            this._AuthService.setLogin(this.loginForm.value).subscribe({
                next: function (response) {
                    if (response.message === 'success') {
                        _this.isLoading = false;
                        localStorage.setItem('_token', response.token);
                        _this._AuthService.saveUser();
                        _this._Router.navigate(['/home']);
                    }
                },
                error: function (err) {
                    _this.isLoading = false;
                    _this.toastr.error(err.error.message, 'Error', { 'progressBar': true });
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, router_1.RouterLink, core_2.TranslateModule],
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
