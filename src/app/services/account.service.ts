import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Account} from '../value-types/account';
import {MessagingService} from './messaging.service';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {ProgressBarService} from './progress-bar.service';
import {catchError, last, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public account: Account = undefined;

  constructor(private http: HttpClient,
              private messagingService: MessagingService,
              private progressBarService: ProgressBarService) {
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
    console.log('AccountService - loadAccount');

    if (this.account !== undefined) {
      return of(this.account);
    }

    const request = new HttpRequest('GET', 'api/user', {
      reportProgress: true
    });

    return this.http.request(request).pipe(
      map(event => this.reportProgress(event)),
      last(),
      map(event => {
        const data = event.body;
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

  /** Return distinct message for sent, upload progress, & response events */
  private reportProgress<T>(event: HttpEvent<T>): any {
    console.log('AccountService - reportProgress');
    console.log(event);

    switch (event.type) {
      case HttpEventType.Sent:
        console.log('Sent');
        this.progressBarService.isLoading = true;
        this.progressBarService.value = 0;
        break;
      case HttpEventType.DownloadProgress:
        console.log('Download Progress');
        const percentage = 100 / event.total * event.loaded;
        console.log(event.loaded + ' | ' + event.total);
        this.progressBarService.isLoading = true;
        this.progressBarService.value = percentage;
        break;
      case HttpEventType.Response:
        console.log('Response');
        this.progressBarService.value = 100;
        this.progressBarService.isLoading = false;
    }

    return event;
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
