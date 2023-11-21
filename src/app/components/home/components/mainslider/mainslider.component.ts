import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrl: './mainslider.component.css'
})
export class MainsliderComponent {


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
        items: 1
      },
    },
    nav: false
  }

}
