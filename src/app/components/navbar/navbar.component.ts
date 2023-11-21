import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  numberOfCartItems = 0;
  constructor(private _AuthService: AuthService, private _CartService:CartService) {
    this._CartService.numberOfCartItems.subscribe({
      next:(data)=>{
        this.numberOfCartItems = data;
      }
    });
  }

  ngOnInit(): void {
    this._AuthService.tokenUserData.subscribe({
      next: (data) => {
        if (this._AuthService.tokenUserData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  logOut(){
    this._AuthService.logOut();
  }
}
