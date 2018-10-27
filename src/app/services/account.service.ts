import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Account} from '../value-types/account';
import {MessagingService} from './messaging.service';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public account: Account = undefined;

  constructor(private http: HttpClient, private messagingService: MessagingService) {
  }

  /**
   * Opens a new window to login via Discord OAuth2.
   */
  openLoginWindow(): void {
    console.log('AccountService - openLoginWindow');
    const loginWindow = window.open('http://lvh.me:5000/auth/login', '_blank', 'height=720,width=500');
    loginWindow.focus();
  }

  /*
  logout(): void {
    return this.http.post('auth/logout').pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }*/

  loadAccount(): Observable<Account> {
    if (this.account !== undefined) {
      return of(this.account);
    }

    return this.http.get<Account>('api/user')
      .pipe(
        tap(data => console.log('AccountService - loadAccount')),
        map(data => {
          console.log(data);
          if (data.username !== undefined) {
            const account = new Account();
            account.loadAccountData(data);
            this.account = account;
            return account;
          } else {
            return null;
          }
        }),
        catchError(this.handleError('loadAccount', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.messagingService.emitMessage({key: 'error', data: error});

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T);
    };
  }
}
