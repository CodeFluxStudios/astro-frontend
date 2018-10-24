import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GuildOverview} from '../../../value-types/guild-overview';
import {GuildService} from '../../../services/guild.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-new-guild',
  templateUrl: './new-guild.component.html',
  styleUrls: ['./new-guild.component.scss']
})
export class NewGuildComponent implements OnInit {
  isLoadingGuilds: boolean;
  isAddingAstro: boolean;
  selectedGuild: GuildOverview;
  guilds: GuildOverview[];

  constructor(private guildService: GuildService) {
  }

  ngOnInit() {
    this.getGuilds();
  }

  getGuilds() {
    this.isLoadingGuilds = true;
    this.guildService.getAccessibleGuilds().subscribe(guilds => {
      this.isLoadingGuilds = false;
      this.guilds = guilds;
    });
  }

  handleSelection(event) {
    if (event.option.selected) {
      event.source.deselectAll();
      event.option._setSelected(true);
    }

    if (event.source.selectedOptions.selected.length > 0) {
      this.selectedGuild = event.source.selectedOptions.selected;
    } else {
      this.selectedGuild = undefined;
    }
  }

  addAstro() {
    if (this.isAddingAstro) {
      return;
    }
    this.isAddingAstro = true;
  }
}
