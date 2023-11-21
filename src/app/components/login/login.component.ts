import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  ngOnInit(): void {
    if(localStorage.getItem("token") !== null){
      this._Router.navigate(['/home']);
    }
  }

  isLoading: boolean = false;
  show: boolean = false;
  apiError: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/),
    ]),
  });

  showPassword() {
    this.show = !this.show;
  }

  login(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('token', response.token);
            this._AuthService.decodeUserToken();
            this.isLoading = false;
            this._Router.navigate(['/home', { skipLocationChange: true }]);
          //   this._Router.navigateByUrl('/cart', { skipLocationChange: true }).then(() => {
          //     this._Router.navigate(['/home']);
          // });
            // window.location.href = '/home';
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
        },
      });
    }
  }
}
