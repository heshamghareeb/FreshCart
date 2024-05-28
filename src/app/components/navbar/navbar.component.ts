import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CartService } from 'src/app/common/services/cart.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  pageDirAR:boolean = false;

  constructor(
    public   translate: TranslateService,
    private _AuthService: AuthService,
    private _Router: Router,

    private _EcomdataService: EcomdataService,
    private _CartService: CartService,
    @Inject(DOCUMENT) private document: Document,
    public translateService:TranslateService
  ) {
    effect(()=>{
      this.whishItemNumberS = this._EcomdataService.whishNumberSignal();
    })

    effect(()=>{
      this.cartItemNumberS = this._CartService.cartNumberSignal();
    })

  }


    changeLangage(lang: string) {
      let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
    }


    changeCssFile(lang: string) {
      let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
      let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
      let bundleName = lang === "ar" ?       "arabicStyle.css":"englishStyle.css";
      if (existingLink) {
        existingLink.href = bundleName;
      } else {
        let newLink = this.document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.type = "text/css";
        newLink.id = "langCss";
        newLink.href = bundleName;
        headTag.appendChild(newLink);
      }
      }


  whishItemNumberS:number = 0;
  cartItemNumberS:number = 0;
  userName: string = '';

  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next: (data) => {
        if (data !== null) {

          this.userName = data.name ? data?.name?.slice(0, 1).toUpperCase() : 'U';
        } else {
          this.userName = 'U';
        }
      },
    });

    if (this._Router.url.includes('cart')) {
      this._CartService.getCartUser().subscribe({
        next: (response) => {
          if (response.status === 'success') {

            this._CartService.updateCartNumberSignal(response.numOfCartItems);
            this.cartItemNumberS = this._CartService.cartNumberSignal();
          }
        },
        error: (err) => {
        },
      });
    }

    if (!this._Router.url.includes('whishlist')) {

      this._EcomdataService.getWishlist().subscribe({
        next: (response) => {
          if (response.status === 'success') {
            const whishList = response.data.map((item: any) => item._id);
            this._EcomdataService.updateWhishNumberSignal(response.data.length);

            this._EcomdataService.updateWishlistItem(whishList)

            this.whishItemNumberS = this._EcomdataService.whishNumberSignal();
          }
        },
      });
    }




  }




  logOut(): void {
    localStorage.removeItem('_token');
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
