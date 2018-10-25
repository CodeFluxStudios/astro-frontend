import {Component, OnInit} from '@angular/core';
import {GuildOverview} from '../../../value-types/guild-overview';
import {GuildService} from '../../../services/guild.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoadingGuilds: boolean;
  guilds: GuildOverview[] = [];

  constructor(private guildService: GuildService,
              private router: Router) {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://lvh.me:5000' || event.data.key === undefined) {
        return;
      }

      console.log('DashboardComponent Message listener');
      console.log(event.data);

      switch (event.data.key) {
        case 'guild_auth':

          break;
      }
    }, false);
  }

  ngOnInit() {
    this.getGuilds();
  }

  getGuilds() {
    this.isLoadingGuilds = true;
    this.guildService.getAccessibleGuilds().subscribe(guildOverviews => {
      this.isLoadingGuilds = false;
      this.guilds = guildOverviews;
    });
  }

  onGuildClicked(guild: GuildOverview) {
    this.guildService.getBotGuild(guild.id).subscribe(data => {
      console.log(data);
      if (data !== undefined) {
        if (data.code === undefined) {
          this.showGuild(guild);
        } else {
          this.guildService.addBotToGuild(guild.id);
        }
      }
    });
  }

  showGuild(guild: GuildOverview) {
    this.guildService.curGuild = guild;
    this.router.navigateByUrl(`guild/${guild.id}`);
  }
}
