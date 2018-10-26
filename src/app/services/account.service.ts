import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Account} from '../value-types/account';
import {MessagingService} from './messaging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public account: Account = undefined;

  constructor(private messagingService: MessagingService) {
  }

  /**
   * Opens a new window to login via Discord OAuth2.
   */
  openLoginWindow(): void {
    console.log('AccountService - openLoginWindow');
    const loginWindow = window.open('http://lvh.me:5000/auth/login', '_blank', 'height=720,width=500');
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

      this.messagingService.emitMessage({key: 'error', data: error});

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T);
    };
  }
}
