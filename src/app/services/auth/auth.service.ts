import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Constants } from 'src/core/constants'
import { RegisterModel } from 'src/core/models/register.model';
import { LoginModel } from 'src/core/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if(localStorage.getItem("token") !== null){
      this.decodeUserToken();
    }
  }

  tokenUserData = new BehaviorSubject(null);
  jwtToken?: string;
  decodedToken?: { [key: string]: string | number };

  decodeUserToken() {
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.tokenUserData.next(decodedToken);
  }

  logOut() {
    localStorage.removeItem("token");
    this.tokenUserData.next(null);
    this._Router.navigate(['/login']);
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken!);
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    let expiryTime: any = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }

  register(userData: object): Observable<RegisterModel> {
    return this._HttpClient.post<RegisterModel>(
      `${Constants.baseUrl}/api/v1/auth/signup`,
      userData
    );
  }

  login(userData: object): Observable<LoginModel> {
    return this._HttpClient.post<LoginModel>(
      `${Constants.baseUrl}/api/v1/auth/signin`,
      userData
    );
  }
}
