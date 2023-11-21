import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCookieService {

    private cookieStore: Record<string, string> = {};

    constructor() {
      this.parseCookies(document.cookie);
    }

    public parseCookies(cookies: string = document.cookie): void {
      this.cookieStore = {};
      if (!cookies) {
        return;
      }
      const cookiesArr = cookies.split(';');
      for (const cookie of cookiesArr) {
        const cookieArr = cookie.split('=');
        this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
      }
    }

    get(key: string): string | null {
      this.parseCookies();
      return this.cookieStore[key] ?? null;
    }

    remove(key: string): void {
      document.cookie = `${key}=; expires=Thu, 1 Jan 1990 12:00:00 UTC; path=/`;
    }

    set(key: string, value: string): void {
      document.cookie = `${key}=${value || ''}`;
    }
}
