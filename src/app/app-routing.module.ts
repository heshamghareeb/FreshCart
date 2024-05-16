import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardLogin } from './common/gurads/auth.guard';

const routes: Routes = [
  //auth
  {
    canActivate: [authGuardLogin],
    path: '',
    loadComponent: () =>
      import('./layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    {
        path: 'forgotlogin',
        loadComponent: () =>
          import('./components/forgotpassword/forgotpassword.component').then(
            (m) => m.ForgotpasswordComponent
          ),
      },
    ],
  },

  //blank
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank/blank.component').then(
        (m) => m.BlankComponent
        ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'productdetails/:id',
        loadComponent: () =>
          import(
            './components/details/details.component'
          ).then((m) => m.DetailsComponent),
      },
      //Brands
      {
        path: 'brands',
        loadComponent: () =>
          import('./components/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
        title: 'Brands',
      },
      {
        path: 'brands/:id',
        loadComponent: () =>
          import('./components/products-by/products-by.component').then(
            (m) => m.ProductsByComponent
          ),
        title: 'Brands',
      },
      //Whishlist
      {
        path: 'whishlist',
        loadComponent: () =>
          import('./components/whishlist/whishlist.component').then(
            (m) => m.WhishlistComponent
          ),
      },
      //Categories
      {
        path: 'categories',
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'categorydetails/:id',
        loadComponent: () =>
          import('./components/products-by/products-by.component').then(
            (m) => m.ProductsByComponent
          ),
        title: 'Category Details',
      },
      //Cart
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'Cart',
      },
      //Payment
      {
        path: 'payment/:id',
        loadComponent: () =>
          import('./components/payment/payment.component').then(
            (m) => m.PaymentComponent
          ),
        title: 'Payment',
      },


      {
        path: 'forgot',
        loadComponent: () =>
          import('./components/forgotpassword/forgotpassword.component').then(
            (m) => m.ForgotpasswordComponent
          ),
      },
      {
        path: 'updatepass',
        loadComponent: () =>
          import('./components/updatepass/updatepass.component').then(
            (m) => m.UpdatepassComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },





    ],
  },

  //notfound
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
