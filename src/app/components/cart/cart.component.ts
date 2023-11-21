import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { GetCartModel } from 'src/core/models/get.cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  isLoading:boolean = false;
  cart?:GetCartModel;

constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this.getCart();
  }

getCart(){
  this.isLoading = true;
  this._CartService.getLoggedUserCart().subscribe({
    next:(res:GetCartModel) =>{
      this.cart = res;
      // console.log(res);
      this._CartService.numberOfCartItems.next(res.numOfCartItems)
      this._CartService.cartId = res.data._id;
      this.isLoading = false;
    },
    error:(err)=>{
      console.log('Error');
    this.isLoading = false;},
  });
}

removeCart(productId:string){
  this.isLoading = true;
  this._CartService.removeFromCart(productId).subscribe({
    next:(response)=>{
      this.cart = response;
      this._CartService.numberOfCartItems.next(response.numOfCartItems)
      this.isLoading = false;
    },
    error:(error)=>{
      // console.log(error);
      this.isLoading = false;
    }
  });
}

updateQuantity(productId:string , count:number){
  this.isLoading = true;
  this._CartService.updateCartProductQuantity(productId, count).subscribe({
    next:(response)=>{
      this.cart = response;
      this._CartService.numberOfCartItems.next(response.numOfCartItems)
      this.isLoading = false;
    },
    error:(error)=>{
      // console.log(error);
      this.isLoading = false;
    }
  });
}
}
