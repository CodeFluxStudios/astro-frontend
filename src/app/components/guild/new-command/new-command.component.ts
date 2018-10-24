import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-new-command',
  templateUrl: './new-command.component.html',
  styleUrls: ['./new-command.component.scss']
})
export class NewCommandComponent implements OnInit {
  isCreatingCommand: boolean;
  done = true;

  constructor() {
  }

  ngOnInit() {

  }

  createCommand() {
    if (this.isCreatingCommand) {
      return;
    }
    this.isCreatingCommand = true;
  }
}
