import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private emitMessageSource = new Subject<any>();
  messageEmitted$ = this.emitMessageSource.asObservable();

  constructor() {
  }

  emitMessage(change: any) {
    this.emitMessageSource.next(change);
  }
}
