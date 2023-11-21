import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductModel } from 'src/core/models/product.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { CartModel } from 'src/core/models/cart.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  isLogin = localStorage.getItem('token');
  isLoading: boolean = false;
  apiError: string = '';
  productId: string = '';
  productDetails: ProductModel = {} as any;
  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _CartService:CartService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.productId = params.get('id') ?? '';
      } else {
        this.isLoading = false;
        this.apiError = 'Unknown Error try again later';
      }
    });

    this._ProductsService.getProductDetails(this.productId).subscribe({
      next: (data) => {
        // console.log(data);
        // console.log(data.data);
        this.productDetails = data.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        // console.log(err);

        this.apiError = err?.error?.message
          ? err?.error?.message
          : 'An unexpected error occurred!';
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  navgateTo() {
    this._Router.navigate(['/login']);
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
