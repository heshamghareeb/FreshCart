import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private _Router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes('cart') ||
      request.url.includes('orders') ||
      request.url.includes('wishlist') ||
      request.url.includes('addresses') ||
      request.url.includes('changeMyPassword')
    ) {
      const token: any = localStorage.getItem('_token');
      try {
        const decodedToken: any = jwtDecode(token);
        if (token) {
          request = request.clone({
            setHeaders: {
              token: token,
            },
          });
        }
      } catch (error: any) {
        // console.log('error', error);
        if (error.message.includes('Invalid token')) {
          localStorage.removeItem('_token');
          this._Router.navigate(['/login']);
        }
      }
    }

    return next.handle(request).pipe(
      tap(
        event => {
          if (event.type === 4) {
            // Handle the response here
          }
        },
        error => {
          // Handle error response here
          if (error.statusText == 'Unauthorized') {
            console.log(error.statusText == 'Unauthorized','Unauthorized');
            // localStorage.removeItem('_token');
            // this._Router.navigate(['/login']);
          }

        }
      )


      // tap({
      //   next: value => console.log(value,'success'),
      //   error: err => console.error(err,'error'),
      //   complete: () => console.log('Complete!')
      // })
    );
  }
}
