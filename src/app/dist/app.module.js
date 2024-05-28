"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.HttpLoaderFactory = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var loading_interceptor_1 = require("./common/interceptors/loading.interceptor");
var httprequest_interceptor_1 = require("./common/interceptors/httprequest.interceptor");
var ngx_toastr_1 = require("ngx-toastr");
var ngx_spinner_1 = require("ngx-spinner");
var http_loader_1 = require("@ngx-translate/http-loader");
var app_translate_module_1 = require("./common/modules/app-translate.module");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var cuttext_pipe_1 = require("./common/pipes/cuttext.pipe");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            exports: [
                app_translate_module_1.AppTranslateModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: httprequest_interceptor_1.HttpRequestInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: loading_interceptor_1.LoadingInterceptor, multi: true },
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_owl_carousel_o_1.CarouselModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right'
                }),
                ngx_spinner_1.NgxSpinnerModule,
                // TranslateModule.forRoot({
                //     loader: {
                //         provide: TranslateLoader,
                //         useFactory: HttpLoaderFactory,
                //         deps: [HttpClient]
                //     }
                // }),
                app_translate_module_1.AppTranslateModule.forRoot(),
                cuttext_pipe_1.CuttextPipe
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
