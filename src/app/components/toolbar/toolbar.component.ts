import {Component, OnInit} from '@angular/core';
import {Paths} from '../../models/paths.enum';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  curPath: Paths = Paths.HOME;
  projectName = 'ProjectName';
  commandName = 'CommandName';

  constructor(public accountService: AccountService,
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

  logout() {
    // TODO: Logout
    this.accountService.account = undefined;
    this.router.navigateByUrl('home');
  }
}
