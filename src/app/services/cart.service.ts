import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from 'src/core/constants';
import { CartModel } from 'src/core/models/cart.model';
import { CheckoutModel } from 'src/core/models/checkout.model';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit{
  numberOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0);
// cartList:BehaviorSubject<Array<CartModel>> = new BehaviorSubject([]);
  cartId?:string;
  constructor(private _HttpClient: HttpClient) {
    // console.log(this.cartId);

    if(localStorage.getItem('token')){
      this.getLoggedUserCart().subscribe({
        next:(response:CartModel) =>{
          this.numberOfCartItems.next(response.numOfCartItems);
          this.cartId = response.data._id
          // console.log(this.cartId);


        },
        error:(err)=> {
          // console.log(err);

        },
      });
    }
  }
  ngOnInit(): void {

  }

  // headers: any = {
  //   token: localStorage.getItem('token'),
  // };

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `${Constants.baseUrl}/api/v1/cart`,
      { productId: productId },
      // { headers: this.headers }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`${Constants.baseUrl}/api/v1/cart`,
    // {
    //   headers: this.headers,
    // }
    );
  }

  removeFromCart(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `${Constants.baseUrl}/api/v1/cart/${productId}`,
      // { headers: this.headers }
    );
  }

  updateCartProductQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `${Constants.baseUrl}/api/v1/cart/${productId}`,
      { count: count },
      // { headers: this.headers }
    );
  }

  onlinePayment(shippingAddress: any):Observable<any> {
    return this._HttpClient.post(
      `${Constants.baseUrl}/api/v1/orders/checkout-session/${this.cartId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress,
      },
      // { headers: this.headers }
    );
  }
}
