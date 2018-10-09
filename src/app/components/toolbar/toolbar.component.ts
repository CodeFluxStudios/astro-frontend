import {Component, OnInit} from '@angular/core';
import {Paths} from '../../models/paths.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  curPath: Paths = Paths.HOME;
  loggedIn = true;
  username = 'Username';
  projectName = 'ProjectName';
  commandName = 'CommandName';

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    // TODO: Discord OAuth2
  }
}
