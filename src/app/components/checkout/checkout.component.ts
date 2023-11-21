import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CheckoutModel } from 'src/core/models/checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  isLoading:boolean = false;

  constructor(private _CartService:CartService){}

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\+?\d{1,15}$/),
    ]),
    city: new FormControl(null, [Validators.required]),
  });

  navigateToPaymentPage(url:string){
    window.location.href = url;
  }

  submitForm(shippingAddress:FormGroup){
    this.isLoading = true;
    this._CartService.onlinePayment(shippingAddress.value).subscribe({
      next:(response:CheckoutModel)=>{
        // console.log(response);
        this.isLoading = false;
        this.navigateToPaymentPage(response.session.url)
      },
      error:(error)=>{
        // console.log(error);
        console.log("error");

        this.isLoading = false;
      },
    });

  }

}
