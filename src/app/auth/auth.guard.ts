import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AccountService} from '../services/account.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('--- AuthGuard ---');

    return this.accountService.loadAccount().pipe(
      map(account => {
        if (account === null) {
          console.log('No login data available');
          this.router.navigateByUrl('home');
          return false;
        } else {
          console.log('Found account data');
          return true;
        }
      })
    );
  }
}
