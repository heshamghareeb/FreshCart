import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/common/interfaces/product';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { CardComponent } from '../card/card.component';
import { CartService } from 'src/app/common/services/cart.service';

@Component({
  selector: 'app-products-by',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, ToastrModule, CardComponent],
  templateUrl: './products-by.component.html',
  styleUrl: './products-by.component.scss'
})
export class ProductsByComponent implements OnInit{

  path:any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcomdataService,
    private _CartService: CartService,

  ) {}
  ngOnInit(): void {
    this._EcomdataService.getProducts().subscribe({
      next: (response) => {

        this._EcomdataService.products = response.data;
      },
    });

    this._EcomdataService.wishList.subscribe((data) => {

      if (data.length > 0) {
        this.whishList = data;
      }
    });





    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {

        this._ActivatedRoute.url.subscribe((url)=>{
          this.path = url[0].path;
        })

        this.filterId = params.get('id');
      },
    });

    if(this.path === 'brands'){
      for (const product of this._EcomdataService.products) {
        if (product.brand._id === this.filterId) {
          this.products.push(product);
        }
      }
    }
    else if(this.path === 'categorydetails'){
      for (const product of this._EcomdataService.products) {
        if (product.category._id === this.filterId) {
          this.products.push(product);
        }
      }
    }

  }

  filterId:any;
  products:Product[] = [];


  whishList: any = [];

  addToCart(id: string): void {
    this._CartService.addToCart(id);
  }

}
