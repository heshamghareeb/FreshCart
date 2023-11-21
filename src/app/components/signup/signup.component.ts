import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private _AuthService:AuthService, private _Router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem("token") !== null){
      this._Router.navigate(['/home']);
    }
  }

  isLoading:boolean = false;
  show: boolean = false;
  reShow: boolean = false;
  apiError:string = '';

  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^\+?\d{1,15}$/)]),
  }, {validators: this.rePasswordMatch});


rePasswordMatch(registerForm:any){
  let password = registerForm.get('password');
  let rePassword = registerForm.get('rePassword');
  if (password?.value === rePassword?.value)
  {
    return null
  } else {
    rePassword?.setErrors({passwordMatch : "Password and repassword doesn\'t match"})
    return {passwordMatch: "Password and repassword doesn\'t match"}
}

}


  showPassword() {
    this.show = !this.show;
}
showRepassword() {
  this.reShow = !this.reShow;
}

  register(registerForm: FormGroup){
    this.isLoading = true;
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=> {
          if(response.message === 'success'){
            this.isLoading = false;
            this._Router.navigate(['/login']);
          }
        },
        error:(err)=> {
          this.isLoading = false;
          this.apiError = err.error.errors.msg;
        },
      })
    }
  }
}












