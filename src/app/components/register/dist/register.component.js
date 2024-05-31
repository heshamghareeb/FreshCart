"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_AuthService, _fb, _Router, toastr, translate, renderer) {
        this._AuthService = _AuthService;
        this._fb = _fb;
        this._Router = _Router;
        this.toastr = toastr;
        this.translate = translate;
        this.renderer = renderer;
        this.passwordShow = false;
        this.rePasswordShow = false;
        this.isLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this._fb.group({
            name: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(20),
                ],
            ],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.pattern(/^\w{6,}$/)]],
            rePassword: [''],
            phone: [
                '',
                [forms_1.Validators.required, forms_1.Validators.pattern(/^01[0125][0-9]{8}$/)],
            ]
        }, { validator: [this.checkPassword] });
        this.translate.onLangChange.subscribe(function (event) {
            _this.updatePlaceholderStyle(event.lang);
        });
        // Set initial placeholder style
        this.updatePlaceholderStyle(this.translate.currentLang || this.translate.defaultLang);
    };
    RegisterComponent.prototype.checkPassword = function (group) {
        var password = group.get('password');
        var rePassword = group.get('rePassword');
        if ((rePassword === null || rePassword === void 0 ? void 0 : rePassword.value) === '') {
            rePassword === null || rePassword === void 0 ? void 0 : rePassword.setErrors({ required: true });
        }
        else if ((rePassword === null || rePassword === void 0 ? void 0 : rePassword.value) !== (password === null || password === void 0 ? void 0 : password.value)) {
            rePassword === null || rePassword === void 0 ? void 0 : rePassword.setErrors({ mismatch: true });
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.handleRegister = function () {
        var _this = this;
        this.isLoading = true;
        if (this.registerForm.valid) {
            this._AuthService.setRegister(this.registerForm.value).subscribe({
                next: function (response) {
                    if (response.message === 'success') {
                        _this.isLoading = false;
                        _this._Router.navigate(['/login']);
                    }
                },
                error: function (err) {
                    _this.isLoading = false;
                    _this.toastr.error(err.error.message, 'Error', { 'progressBar': true });
                }
            });
        }
    };
    RegisterComponent.prototype.setPlaceholderStyle = function () {
        var inputElement = this.myInput.nativeElement;
        // Set placeholder text
        this.renderer.setAttribute(inputElement, 'placeholder', 'Enter text here');
        // Create a style element for placeholder styles
        var style = document.createElement('style');
        style.textContent = "\n      .centered-placeholder::placeholder {\n        text-align: center; /* Center the placeholder text */\n        color: gray;        /* Additional styles */\n        font-size: 1em;\n      }\n    ";
        document.head.appendChild(style);
        // Add the class to the input element
        this.renderer.addClass(inputElement, 'centered-placeholder');
    };
    RegisterComponent.prototype.updatePlaceholderStyle = function (lang) {
        var inputElement = this.myInput.nativeElement;
        // Clear previous style
        this.renderer.removeStyle(inputElement, 'text-align');
        if (lang === 'ar') {
            this.renderer.setStyle(inputElement, 'text-align', 'right');
        }
        else {
            this.renderer.setStyle(inputElement, 'text-align', 'left');
        }
    };
    __decorate([
        core_1.ViewChild('myInput', { static: true })
    ], RegisterComponent.prototype, "myInput");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, core_2.TranslateModule],
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
