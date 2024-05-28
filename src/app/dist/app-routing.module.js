"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./common/gurads/auth.guard");
var routes = [
    //auth
    {
        canActivate: [auth_guard_1.authGuardLogin],
        path: '',
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./layouts/auth/auth.component'); }).then(function (m) { return m.AuthComponent; });
        },
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/login/login.component'); }).then(function (m) { return m.LoginComponent; });
                }
            },
            {
                path: 'register',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/register/register.component'); }).then(function (m) { return m.RegisterComponent; });
                }
            },
            {
                path: 'forgotlogin',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/forgotpassword/forgotpassword.component'); }).then(function (m) { return m.ForgotpasswordComponent; });
                }
            },
        ]
    },
    //blank
    {
        path: '',
        canActivate: [auth_guard_1.authGuard],
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./layouts/blank/blank.component'); }).then(function (m) { return m.BlankComponent; });
        },
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/home/home.component'); }).then(function (m) { return m.HomeComponent; });
                }
            },
            {
                path: 'products',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/products/products.component'); }).then(function (m) { return m.ProductsComponent; });
                },
                title: 'Products'
            },
            {
                path: 'productdetails/:id',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/details/details.component'); }).then(function (m) { return m.DetailsComponent; });
                }
            },
            //Brands
            {
                path: 'brands',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/brands/brands.component'); }).then(function (m) { return m.BrandsComponent; });
                },
                title: 'Brands'
            },
            {
                path: 'brands/:id',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/products-by/products-by.component'); }).then(function (m) { return m.ProductsByComponent; });
                },
                title: 'Brands'
            },
            //Whishlist
            {
                path: 'whishlist',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/whishlist/whishlist.component'); }).then(function (m) { return m.WhishlistComponent; });
                }
            },
            //Categories
            {
                path: 'categories',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/categories/categories.component'); }).then(function (m) { return m.CategoriesComponent; });
                },
                title: 'Categories'
            },
            {
                path: 'categorydetails/:id',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/products-by/products-by.component'); }).then(function (m) { return m.ProductsByComponent; });
                },
                title: 'Category Details'
            },
            //Cart
            {
                path: 'cart',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/cart/cart.component'); }).then(function (m) { return m.CartComponent; });
                },
                title: 'Cart'
            },
            // Payment
            {
                path: 'payment/:id',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/payment/payment.component'); }).then(function (m) { return m.PaymentComponent; });
                }
            },
            {
                path: 'forgot',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/forgotpassword/forgotpassword.component'); }).then(function (m) { return m.ForgotpasswordComponent; });
                }
            },
            {
                path: 'updatepass',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/updatepass/updatepass.component'); }).then(function (m) { return m.UpdatepassComponent; });
                }
            },
            //profile
            {
                path: 'profile',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./components/profile/profile.component'); }).then(function (m) { return m.ProfileComponent; });
                }
            },
        ]
    },
    //notfound
    {
        path: '**',
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./components/notfound/notfound.component'); }).then(function (m) { return m.NotfoundComponent; });
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    scrollPositionRestoration: 'enabled'
                }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
