import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './components/home/components/mainslider/mainslider.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddHeaderInterceptor } from './add-header.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    SignupComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    SearchPipe,
    FormsModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:AddHeaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
