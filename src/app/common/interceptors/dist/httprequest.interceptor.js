"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpRequestInterceptor = void 0;
var core_1 = require("@angular/core");
var jwt_decode_1 = require("jwt-decode");
var operators_1 = require("rxjs/operators");
var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(_Router) {
        this._Router = _Router;
    }
    HttpRequestInterceptor.prototype.intercept = function (request, next) {
        if (request.url.includes('cart') ||
            request.url.includes('orders') ||
            request.url.includes('wishlist') ||
            request.url.includes('addresses') ||
            request.url.includes('changeMyPassword')) {
            var token = localStorage.getItem('_token');
            try {
                var decodedToken = jwt_decode_1.jwtDecode(token);
                if (token) {
                    request = request.clone({
                        setHeaders: {
                            token: token
                        }
                    });
                }
            }
            catch (error) {
                if (error.message.includes('Invalid token')) {
                    localStorage.removeItem('_token');
                    this._Router.navigate(['/login']);
                }
            }
        }
        return next.handle(request).pipe(operators_1.tap(function (event) {
            if (event.type === 4) {
                // Handle the response here
            }
        }, function (error) {
            // Handle error response here
            if (error.statusText == 'Unauthorized') {
                // console.log(error.statusText == 'Unauthorized','Unauthorized');
                // localStorage.removeItem('_token');
                // this._Router.navigate(['/login']);
            }
        })
        // tap({
        //   next: value => console.log(value,'success'),
        //   error: err => console.error(err,'error'),
        //   complete: () => console.log('Complete!')
        // })
        );
    };
    HttpRequestInterceptor = __decorate([
        core_1.Injectable()
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());
exports.HttpRequestInterceptor = HttpRequestInterceptor;
