import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root',
})
export class EcomdataService {
  constructor(
    private _HttpClient: HttpClient,
    private _ToastrService: ToastrService
  ) {}

  // cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  cartNumberSignal = signal<number>(0);
  // whishNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  whishNumberSignal = signal<number>(0);
  whishListSignal = signal<[]>([]);
  whishList: BehaviorSubject<any> = new BehaviorSubject([]);
  products: Product[] = [];

  updateWhishSignal(whishList:[]){
    // console.log(num);
    this.whishListSignal.update(() => whishList);
  }

  updateWhishNumberSignal(num:number){
    this.whishNumberSignal.update(() => num);
  }

  updateCartNumberSignal(num:number){
    // console.log(num);
    this.cartNumberSignal.update(() => num);
    // console.log(this.cartNumberSignal());
    // console.log("this.cartNumberSignal() service");
  }

  getUserOrders(userId: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseUrlData + `/orders/user/` + userId
    );
  }

  addToCart(id: string): void {
    this.sendToCart(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this._ToastrService.success(response.message);
          // this.cartNumber.next(response.numOfCartItems);
          this.updateCartNumberSignal(response.numOfCartItems)
        }
      },
    });
  }

  SetcheckOut(userId: string | null, userDetails: Object): Observable<any> {
    return this._HttpClient.post(
      environment.baseUrlData +
        `/orders/checkout-session/${userId}?url=${environment.payUrl}`,
      userDetails
    );
  }

  getProducts(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(
      environment.baseUrlData + `/products?page=${pageNum}`
    );
  }

  getProductById(id: string | null): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + '/products/' + id);
  }

  getCategories(): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + '/categories');
  }

  getCategoriesById(id: string | null): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + '/categories/' + id);
  }

  getSubCategoriesToCat(id: string | null): Observable<any> {
    return this._HttpClient.get(
      environment.baseUrlData + `/categories/${id}/subcategories`
    );
  }

  sendToCart(id: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrlData + '/cart', {
      productId: id,
    });
  }

  getCartData(): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + '/cart');
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(environment.baseUrlData + '/cart');
  }

  updatePoductCount(id: string, countNumb: number): Observable<any> {
    return this._HttpClient.put(environment.baseUrlData + `/cart/` + id, {
      count: countNumb,
    });
  }

  deletePoductCart(id: string): Observable<any> {
    return this._HttpClient.delete(environment.baseUrlData + `/cart/` + id);
  }

  getBrands(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(
      environment.baseUrlData + `/brands?page=${pageNum}`
    );
  }

  getBrandData(id: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + `/brands/${id}`);
  }

  setWishlist(id: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrlData + `/wishlist`, {
      productId: id,
    });
  }

  removeWishlist(id: string): Observable<any> {
    return this._HttpClient.delete(environment.baseUrlData + `/wishlist/${id}`);
  }

  getWishlist(): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + `/wishlist`);
  }

  setAddresses(data: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrlData + `/addresses`, data);
  }

  getAddresses(): Observable<any> {
    return this._HttpClient.get(environment.baseUrlData + `/addresses`);
  }

  removeAddresses(id: string): Observable<any> {
    return this._HttpClient.delete(
      environment.baseUrlData + `/addresses/${id}`
    );
  }
}
