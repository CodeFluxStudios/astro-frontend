import {Component, OnInit} from '@angular/core';
import {GuildService} from '../../../services/guild.service';
import {CommandService} from '../../../services/command.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-command-view',
  templateUrl: './command-view.component.html',
  styleUrls: ['./command-view.component.scss']
})
export class CommandViewComponent implements OnInit {

  constructor(private guildService: GuildService,
              private commandService: CommandService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCommand();
    this.getGuild();
  }

  getCommand() {
    const guildId = this.route.snapshot.paramMap.get('guildId');
    const commandId = this.route.snapshot.paramMap.get('commandId');
    console.log(commandId);
    this.commandService.getCommand(guildId, commandId).subscribe(command => {
      if (command !== null) {
        console.log(command);
        this.commandService.curCommand = command;
      } else {
        console.log('NO COMMAND FOUND OR NO ACCESS');
        console.log(command);
      }
    });
  }

  getGuild() {
    const guildId = this.route.snapshot.paramMap.get('guildId');
    console.log(guildId);
    this.guildService.getBotGuild(guildId).subscribe(guild => {
      if (guild !== null) {
        console.log(guild);
        this.guildService.curGuild = guild;
      } else {
        console.log('NO GUILD FOUND OR NO ACCESS');
        console.log(guild);
      }
    });
  }
}
