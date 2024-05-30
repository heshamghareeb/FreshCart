import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _fb: FormBuilder,
    private _Router: Router,
    private toastr: ToastrService,
    public   translate: TranslateService,
  ) {}

  passwordShow: boolean = false;

  loginForm!: FormGroup;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['test13@test.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    });
  }

  public get f(): {[key: string]: AbstractControl<any, any>;} {
    return this.loginForm.controls;
  }

  handleLogin(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.isLoading = false;
            localStorage.setItem('_token', response.token);
            this._AuthService.saveUser();
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.toastr.error(err.error.message, 'Error', {'progressBar':true,});
        },
      });
    }
  }
}
