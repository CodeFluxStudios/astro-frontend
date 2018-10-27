import {Injectable} from '@angular/core';
import {Account} from '../value-types/account';
import {Router} from '@angular/router';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class WindowEventListenerService {
  constructor(private accountService: AccountService, private router: Router) {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://lvh.me:5000' || event.data.key === undefined) {
        return;
      }

      console.log('Received message from backend');
      console.log(event);

      switch (event.data.key) {
        case 'user_auth':
          const account = new Account();
          account.loadAccountData(event.data.data);
          this.accountService.account = account;
          this.router.navigateByUrl('dashboard');
          break;
        case 'guild_auth':
          this.router.navigateByUrl(`guild/${event.data.data.guild_id}`);
          break;
      }
    }, false);
  }
}
