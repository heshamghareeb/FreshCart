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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  pageDirAR:boolean = false;
  switchLang(lang: string) {
    this.translate.use(lang);
    this.setPageDirection(this.translate.instant('DIR'));
    this.checkDir();
  }
  private setPageDirection(direction: string) {
    document.documentElement.setAttribute('dir', direction);
  }

  checkDir(){
    this.pageDirAR = document.documentElement.getAttribute('dir') == 'rtl';
    console.log(this.pageDirAR,'this.pageDirAR');

  }


    //Make sure to add the import statement to the top of the file
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
  constructor(
    public   translate: TranslateService,
    private _AuthService: AuthService,
    private _Router: Router,
    private _Renderer2: Renderer2,
    private _EcomdataService: EcomdataService,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document, public translateService:TranslateService
  ) {
    this.checkDir();
    effect(()=>{
      this.whishItemNumberS = this._EcomdataService.whishNumberSignal();
    })

    effect(()=>{
      this.cartItemNumberS = this._EcomdataService.cartNumberSignal();
    })

  }



  // cartItemNumber: number = 0;
  // whishItemNumber: number = 0;
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

    if (!this._Router.url.includes('cart')) {
      this._EcomdataService.getCartData().subscribe({
        next: (response) => {
          if (response.status === 'success') {
            // this._EcomdataService.cartNumber.next(response.numOfCartItems);
            this._EcomdataService.updateCartNumberSignal(response.numOfCartItems);
            this.cartItemNumberS = this._EcomdataService.cartNumberSignal();
          }
        },
        error: (err) => {
          console.log('Error Cart Nav', err.error.message);
        },
      });
    }

    // this._EcomdataService.cartNumber.subscribe({
    //   next: (data) => {
    //     this.cartItemNumber = data;
    //   },
    // });

    if (!this._Router.url.includes('whishlist')) {
      // console.log('1',!this._Router.url.includes('whishlist'));
      // console.log('2',this._Router.url.includes('whishlist'));

      this._EcomdataService.getWishlist().subscribe({
        next: (response) => {
          if (response.status === 'success') {
            const whishList = response.data.map((item: any) => item._id);

            this._EcomdataService.whishList.next(whishList);

            // this._EcomdataService.whishNumber.next(response.data.length);

            this._EcomdataService.updateWhishNumberSignal(response.data.length);

          this._EcomdataService.updateWhishSignal(whishList)

            this.whishItemNumberS = this._EcomdataService.whishNumberSignal();
          }
        },
      });
    }

    // this._EcomdataService.whishNumber.subscribe({
    //   next: (data) => {
    //     this.whishItemNumber = data;

    //   },
    // });



  }


  // @ViewChild('navbar') navbar!: ElementRef;

  // @HostListener('window:scroll')
  // onScroll(): void {
  //   if (scrollY > 200) {
  //     this._Renderer2.addClass(this.navbar.nativeElement, 'px-5');
  //     this._Renderer2.addClass(this.navbar.nativeElement, 'py-3');
  //   } else {
  //     this._Renderer2.removeClass(this.navbar.nativeElement, 'px-5');
  //     this._Renderer2.removeClass(this.navbar.nativeElement, 'py-3');
  //   }
  // }

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   const navbarToggler = document.querySelector('.navbar-toggler');
  //   const navbarCollapse = document.querySelector('.navbar-collapse');
  //   if (navbarToggler && !navbarToggler.classList.contains('collapsed') && navbarCollapse) {
  //     navbarToggler.dispatchEvent(new Event('click'));
  //   }
  // }

  logOut(): void {
    localStorage.removeItem('_token');
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
