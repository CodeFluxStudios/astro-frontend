import {Component, OnInit, ViewChild} from '@angular/core';
import {GuildService} from '../../../services/guild.service';
import {CommandService} from '../../../services/command.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-command-editor',
  templateUrl: './command-editor.component.html',
  styleUrls: ['./command-editor.component.scss', './command-editor.component.theme.scss']
})
export class CommandEditorComponent implements OnInit {
  @ViewChild('contextMenu') contextMenu;

  isContextMenuOpen: boolean;

  constructor(private guildService: GuildService,
              private commandService: CommandService,
              private route: ActivatedRoute) {
    this.addContextMenu();
  }

  ngOnInit() {
    this.getCommand();
    this.getGuild();
  }

  addContextMenu() {
    document.addEventListener('contextmenu', (e) => {
      if (this.clickInsideElement(e, 'node-canvas')) {
        e.preventDefault();
        this.toggleCustomContextMenu(e, true);
      } else {
        this.toggleCustomContextMenu(e, false);
      }
    }, false);

    document.addEventListener('click', (e) => {
      this.toggleCustomContextMenu(e, false);
    });
  }

  toggleCustomContextMenu(e, on: boolean) {
    if (on) {
      this.isContextMenuOpen = true;

      if (!this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.add('open');
      }

      const origin = this.getContextOrigin(e.pageX, e.pageY - 64);
      this.contextMenu.nativeElement.style.left = `${origin.x}px`;
      this.contextMenu.nativeElement.style.top = `${origin.y}px`;
    } else {
      this.isContextMenuOpen = false;

      if (this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.remove('open');
      }
    }
  }

  getContextOrigin(leftOffset, topOffset) {
    console.log(topOffset);
    console.log(window.innerHeight);
    if (leftOffset + 150 > window.innerWidth) {
      leftOffset -= 150;
    }

    if (topOffset + 108 > window.innerHeight - 112) {
      topOffset -= 108;
    }
    return {x: leftOffset, y: topOffset};
  }

  clickInsideElement(e, className) {
    let el = e.srcElement || e.target;

    if (el.classList.contains(className)) {
      return el;
    } else {
      while (el = el.parentNode) {
        if (el.classList && el.classList.contains(className)) {
          return el;
        }
      }
    }

    return false;
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
