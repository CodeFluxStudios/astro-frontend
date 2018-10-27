import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AccountService} from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('--- AuthGuard ---');
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.accountService.account !== undefined) {
      console.log('Already logged in');
      return true;
    }

    this.accountService.loadAccount().subscribe(account => {
      if (account === null) {
        console.log('No login data available');
        this.router.navigateByUrl('home');
        return false;
      } else {
        console.log('Found account data');
        return true;
      }
    });
  }
}
