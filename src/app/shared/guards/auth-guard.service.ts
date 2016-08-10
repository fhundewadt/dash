import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( private authService: AuthService, private router: Router ) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    if (this.authService.isLoggedIn && this.authService.tokenNotExpired()) {
      return true;
    }

    this.authService.redirectUrl = state.url;
    // reason is 'token' if isLoggedIn otherwise 'login'
    let reason = this.authService.isLoggedIn ? 'token' : 'login';

    let navigationExtras = {
      queryParams: { 'r': reason }
    };

    this.router.navigate([ '/login' ], navigationExtras);
    return false;
  }
}
