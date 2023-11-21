import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoriesModel } from 'src/core/models/categories.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  // isLoading:boolean = false;
  apiError:boolean = false;
  allCategories?:CategoriesModel;
constructor(private _ProductsService:ProductsService){}

  ngOnInit(): void {
    // this.isLoading = true;
    this._ProductsService.getAllCategories().subscribe({
      next:(response)=> {
          this.allCategories = response;
          // this.isLoading = false;
      },
      error:(err)=> {
        this.apiError = true
        // this.isLoading = false;
      },
    });
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 700,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },
    },
    nav: false
  }
}
