import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from 'src/core/guard/auth.guard';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, },

  {path: 'about', component: AboutComponent, },
  {path: 'brands', component: BrandsComponent, },
  {path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard]},
  {path: 'categories', component: CategoriesComponent,},
  {path: 'productdetails/:id', component: ProductdetailsComponent,},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'settings', loadChildren:()=> import('./settings/settings.module').then((module)=>module.SettingsModule)},
  // {path: 'settings/reset', loadChildren:()=> import('./settings/settings.module').then((module)=>module.SettingsModule)},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
