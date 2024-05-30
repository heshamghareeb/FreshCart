"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var footer_component_1 = require("src/app/components/footer/footer.component");
var core_2 = require("@ngx-translate/core");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(document, translate) {
        this.document = document;
        this.translate = translate;
    }
    AuthComponent.prototype.changeLangage = function (lang) {
        var htmlTag = this.document.getElementsByTagName("html")[0];
        htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        this.changeCssFile(lang);
    };
    AuthComponent.prototype.changeCssFile = function (lang) {
        var headTag = this.document.getElementsByTagName("head")[0];
        var existingLink = this.document.getElementById("langCss");
        var bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";
        if (existingLink) {
            existingLink.href = bundleName;
        }
        else {
            var newLink = this.document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.type = "text/css";
            newLink.id = "langCss";
            newLink.href = bundleName;
            headTag.appendChild(newLink);
        }
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterModule, footer_component_1.FooterComponent, core_2.TranslateModule],
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
        }),
        __param(0, core_1.Inject(common_1.DOCUMENT))
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
