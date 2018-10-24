import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Account} from '../value-types/account';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public account: Account = undefined;

  constructor(private http: HttpClient, private router: Router) {
    window.addEventListener('message', (event) => {
      console.log(event);

      if (event.origin !== 'http://lvh.me:5000') {
        return;
      }

      if (event.data.username !== undefined) {
        this.account = new Account();
        this.account.loadAccountData(event.data);
        this.router.navigateByUrl('dashboard');
      }
    }, false);
  }

  login(): void {
    console.log('login');
    const loginWindow = window.open('http://lvh.me:5000/login', '_blank', 'height=720,width=500');
    loginWindow.focus();
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
