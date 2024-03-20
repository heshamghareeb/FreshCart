import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/common/interfaces/product';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, ToastrModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(
    private _EcomdataService: EcomdataService,
    private _ToastrService: ToastrService,
    private _ChangeDetectorRef: ChangeDetectorRef
  ) {}
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) cutTextNum: number = 0;
  @Input({ required: true }) whish: any[] = [];

  // whishList: any = [...this.whish];

  addToCart(id: string): void {
    this._EcomdataService.addToCart(id);
  }

  addToWhish(id: string): void {
    this._EcomdataService.setWishlist(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this._ToastrService.success(response.message, '', {
            positionClass: 'toast-bottom-right',
          });

          this._EcomdataService.updateWhishSignal(response.data)
          this._EcomdataService.updateWhishNumberSignal(response.data.length);
          this.whish = this._EcomdataService.whishListSignal();
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

          this._EcomdataService.updateWhishSignal(response.data);
          this._EcomdataService.updateWhishNumberSignal(response.data.length);
          this.whish = this._EcomdataService.whishListSignal();
        }
      },
    });
  }
}
