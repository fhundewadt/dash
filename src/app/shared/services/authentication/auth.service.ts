import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;
  public redirectUrl: string;

  constructor( private tokenService: TokenService ) {
    this.isLoggedIn = tokenService.isAuthenticated;
  }

  login() {
    return Observable.of(true)
      .delay(1000)
      .do(val =>
        this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }

  tokenTTL() {
    return this.tokenService.tokenTTL();
  }

  tokenNotExpired() {
    return this.tokenService.tokenNotExpired();
  }
}
