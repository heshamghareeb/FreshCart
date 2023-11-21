import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { AllProductsModel } from 'src/core/models/all.products.model';
import { CartModel } from 'src/core/models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  products!: AllProductsModel;
  searchTerm: string = '';

  isLogin = localStorage.getItem('token');

  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    if (localStorage.getItem('token')) {
      this._CartService.getLoggedUserCart().subscribe({
        next:(response:CartModel) =>{
          this._CartService.numberOfCartItems.next(response.numOfCartItems);
      }});
    }
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.isLoading = false;
      },
      error: (error) => {},
    });
  }

  addToCart(productId: string) {
    this.isLoading = true;
    if (this.isLogin) {
      this._CartService.addToCart(productId).subscribe({
        next: (response: CartModel) => {
          this._CartService.numberOfCartItems.next(response.numOfCartItems);
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
        },
      });
    }
  }
}
