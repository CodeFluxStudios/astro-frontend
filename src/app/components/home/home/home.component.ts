import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';
import {Account} from '../../../value-types/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService,
              private router: Router) {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://lvh.me:5000' || event.data.key === undefined) {
        return;
      }

      console.log('HomeComponent Message listener');
      console.log(event.data);

      switch (event.data.key) {
        case 'user_auth':
          const account = new Account();
          account.loadAccountData(event.data.data);
          this.accountService.account = account;
          this.router.navigateByUrl('dashboard');
          break;
      }
    }, false);
  }

  ngOnInit() {
  }

  login() {
    this.accountService.openLoginWindow();
  }
}
