import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {CommandService} from '../../services/command.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(public accountService: AccountService,
              public projectService: ProjectService,
              public commandService: CommandService,
              public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.accountService.login();
  }

  logout() {
    // TODO: Logout
    this.accountService.account = undefined;
    this.router.navigateByUrl('home');
  }
}
