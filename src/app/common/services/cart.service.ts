import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  cartNumberSignal = signal<number>(0);

  addToCart(prodId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrlData + `/cart`, {
      productId: prodId,
    });
  }

  getCartUser(): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + '/cart');
  }

  removeCartItem(prodId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${prodId}`);
  }

  updateCartCount(prodId: string, countNum: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `cart/${prodId}`, {
      count: countNum,
    });
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`);
  }

  checkOut(cartId: string | null, orderInfo: object): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `orders/checkout-session/${cartId}?url=https://heshamghareeb.github.io/freshcart`,

      {
        shippingAddress: orderInfo,
      }
    );
  }


  updateCartNumberSignal(num:number){
    this.cartNumberSignal.update(() => num);
  }



}
