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
    guild.hasBot ? this.showGuild(guild) : this.guildService.addBotToGuild(guild.id);
  }

  showGuild(guild: GuildOverview) {
    this.guildService.curGuild = guild;
    this.router.navigateByUrl(`guild/${guild.id}`);
  }
}
