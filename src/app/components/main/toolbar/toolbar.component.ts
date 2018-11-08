import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {Router, RoutesRecognized} from '@angular/router';
import {GuildService} from '../../../services/guild.service';
import {CommandService} from '../../../services/command.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  public curUrlParams: {};

  constructor(public accountService: AccountService,
              public guildService: GuildService,
              public commandService: CommandService,
              public router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.curUrlParams = val.state.root.firstChild.params;
      }
    });
  }

  login() {
    this.accountService.openLoginWindow();
  }

  logout() {
    // TODO: Logout
    this.accountService.account = undefined;
    this.router.navigateByUrl('home');
  }
}
