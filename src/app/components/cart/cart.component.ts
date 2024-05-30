import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/common/services/cart.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}
  cartDetails: any = false;

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        console.log(response,'test1');

        this.cartDetails = response;

      },
      error:(err)=> {
        this.cartDetails = false
      },
    });
  }

  removeItem(id: string, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {

        this.cartDetails = response;
        if (this.cartDetails.numOfCartItems == 0) {
          this.clear();

        }

        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(this.cartDetails.numOfCartItems);


        this._CartService.updateCartNumberSignal(this.cartDetails.numOfCartItems);

      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

  ///          0
  changeCount(
    count: number,
    id: string,
    el1: HTMLButtonElement,
    el2: HTMLButtonElement
  ): void {
    if (count >= 1) {
      this._Renderer2.setAttribute(el1, 'disabled', 'true');
      this._Renderer2.setAttribute(el2, 'disabled', 'true');

      this._CartService.updateCartCount(id, count).subscribe({
        next: (response) => {
          this.cartDetails = response;
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        },
        error: (err) => {
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        },
      });
    }
  }

  clear(): void {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this.cartDetails = false;
          this._CartService.cartNumber.next(0);
          this._CartService.updateCartNumberSignal(0);
        }
      },
    });
  }
}
