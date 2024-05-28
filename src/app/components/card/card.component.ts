import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/common/interfaces/product';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from 'src/app/common/services/cart.service';
import { CartInterface } from 'src/app/common/interfaces/cart-interface';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, ToastrModule, TranslateModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) cutTextNum: number = 0;
  @Input({ required: true }) wish: any = [];

  constructor(
    private _CartService: CartService,
    private _EcomdataService: EcomdataService,
    private _ToastrService: ToastrService,
  ) {}

  ngOnInit(): void {

  }



  addToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response:CartInterface) => {
        if (response.status === 'success') {

          this._ToastrService.success(response.message);
        
          this._CartService.updateCartNumberSignal(response.numOfCartItems)
        }
      },
    });
  }



  addToWhish(id: string): void {
    this._EcomdataService.setWishlist(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this._ToastrService.success(response.message, '', {
            positionClass: 'toast-bottom-right',
          });

          this._EcomdataService.updateWishlistItem(response.data)
          this._EcomdataService.updateWhishNumberSignal(response.data.length);
          this.wish = this._EcomdataService.wishList.subscribe((data) => {
            if (data.length > 0) {
              this.wish = data;
            }
          });
        }
      },
    });
  }

  removeFromWhish(id: string): void {
    this._EcomdataService.removeWishlist(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {

          this._ToastrService.success(response.message, '', {
            positionClass: 'toast-bottom-right',
          });

          this._EcomdataService.updateWishlistItem(response.data);
          this._EcomdataService.updateWhishNumberSignal(response.data.length);
          this.wish = this._EcomdataService.wishList.subscribe((data) => {
            if (data.length > 0) {
              this.wish = data;
            }
          });
        }
      },
    });
  }
}
