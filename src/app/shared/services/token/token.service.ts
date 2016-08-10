import { Injectable } from '@angular/core';
import { Token } from './token';

// mock data
// import { TOKEN } from './mock-token';
// let mockToken : Token = TOKEN;

@Injectable()
export class TokenService {

  isAuthenticated: boolean = false;

  constructor() {
    this.isAuthenticated = !!localStorage.getItem('access_token');
  }

  logout() {
    this.isAuthenticated = false;
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('expires');
  }

  tokenNotExpired() {
    if (this.isAuthenticated) {
      return Date.parse(localStorage.getItem('expires')) > Date.now();
    } else {
      return false;
    }
  }

  tokenTTL() {
    if (this.isAuthenticated) {
      return localStorage.getItem('expires');
    }
  }

}
