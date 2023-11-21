import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Constants } from 'src/core/constants'
import { AllProductsModel } from 'src/core/models/all.products.model';
import { ProductModel } from 'src/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProducts():Observable<AllProductsModel>{
    return this._HttpClient.get<AllProductsModel>(`${Constants.baseUrl}/api/v1/products`);
  }

  getProductDetails(productId:string):Observable<any>{
    return this._HttpClient.get<any>(`${Constants.baseUrl}/api/v1/products/${productId}`);
  }

  getAllCategories():Observable<any>{
    return this._HttpClient.get<any>(`${Constants.baseUrl}/api/v1/categories`);
  }
}
