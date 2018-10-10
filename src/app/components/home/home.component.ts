import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.accountService.login().subscribe(loggedIn => {
      if (loggedIn) {
        console.log('Logged in!');
        this.router.navigateByUrl('dashboard');
      } else {
        console.warn('Error while logging in!');
      }
    });
  }
}
