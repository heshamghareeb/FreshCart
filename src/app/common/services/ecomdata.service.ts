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

  cartNumberSignal = signal<number>(0);

  wishList: BehaviorSubject<any> = new BehaviorSubject([]);
  whishNumberSignal = signal<number>(0);

  products: Product[] = [];



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
          this.updateCartNumberSignal(response.numOfCartItems)
        }
      },
    });
  }

  updateCartNumberSignal(num:number){
    this.cartNumberSignal.update(() => num);
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




///Wish List Information
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



  updateWishlistItem(item: any) {

    this.wishList.next(item);
  }



  updateWhishNumberSignal(num:number){
    this.whishNumberSignal.update(() => num);
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
