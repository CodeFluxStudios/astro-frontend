import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public account: Account = undefined;
  private accountUrl = 'api/account';

  constructor(private http: HttpClient) {
  }

  /** TODO: Discord OAuth2 */
  login(): Observable<boolean> {
    return this.http.get<boolean>(this.accountUrl + '/0')
      .pipe(
        map((a: Account) => {
          this.account = a;
          console.log('Account is:');
          console.log(a);
          return a;
        }),
        catchError(this.handleError('login', undefined))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T);
    };
  }
}
