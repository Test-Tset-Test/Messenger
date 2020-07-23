import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from '../servises/user.service';
import {RegAuthService} from '../servises/reg.auth.service';
import {BaseApiService} from './base.api.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,

  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('authUser')) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
