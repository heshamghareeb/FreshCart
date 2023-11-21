import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: any = localStorage.getItem('token');
    let test = [
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
    ];

    if (token && !test.includes(httpRequest.url)) {
      const reqCopy = httpRequest.clone({
        //can set new header
        headers: httpRequest.headers.set('token', token),
      });
      return next.handle(reqCopy);
    }

    return next.handle(httpRequest);
  }
}
