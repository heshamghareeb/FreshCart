import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  FormControlOptions,
} from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _fb: FormBuilder,
    private _Router: Router,
    private toastr: ToastrService,
    public   translate: TranslateService,
    private renderer: Renderer2
  ) {}

  passwordShow: boolean = false;
  rePasswordShow: boolean = false;
  registerForm!: FormGroup;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.registerForm = this._fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^\w{6,}$/)]],
        rePassword: [''],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
        ],
      },
      { validator: [this.checkPassword] } as FormControlOptions
    );


    this.translate.onLangChange.subscribe((event) => {
      this.updatePlaceholderStyle(event.lang);
    });

    // Set initial placeholder style
    this.updatePlaceholderStyle(this.translate.currentLang || this.translate.defaultLang);
  }

  checkPassword(group: AbstractControl): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value === '') {
      rePassword?.setErrors({ required: true });
    } else if (rePassword?.value !== password?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  public get f(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.registerForm.controls;
  }

  handleRegister(): void {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.isLoading = false;
            this._Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.isLoading = false;

          this.toastr.error(err.error.message, 'Error', {'progressBar':true,});
        },
      });
    }
  }

  @ViewChild('myInput', { static: true }) myInput!: ElementRef;

  setPlaceholderStyle(): void {
    const inputElement = this.myInput.nativeElement;

    // Set placeholder text
    this.renderer.setAttribute(inputElement, 'placeholder', 'Enter text here');

    // Create a style element for placeholder styles
    const style = document.createElement('style');
    style.textContent = `
      .centered-placeholder::placeholder {
        text-align: center; /* Center the placeholder text */
        color: gray;        /* Additional styles */
        font-size: 1em;
      }
    `;
    document.head.appendChild(style);

    // Add the class to the input element
    this.renderer.addClass(inputElement, 'centered-placeholder');
  }


  private updatePlaceholderStyle(lang: string): void {
    const inputElement = this.myInput.nativeElement;

    // Clear previous style
    this.renderer.removeStyle(inputElement, 'text-align');

    if (lang === 'ar') {
      this.renderer.setStyle(inputElement, 'text-align', 'right');
    } else {
      this.renderer.setStyle(inputElement, 'text-align', 'left');
    }
  }







}
