import {Component, OnInit} from '@angular/core';
import {GuildOverview} from '../../../value-types/guild-overview';
import {GuildService} from '../../../services/guild.service';
import {MatDialog} from '@angular/material';
import {NewGuildComponent} from '../../guild/new-guild/new-guild.component';
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
              public dialog: MatDialog,
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

  newGuild() {
    const dialogRef = this.dialog.open(NewGuildComponent, {
      width: '400px',
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true
    });
  }

  showGuild(guild: GuildOverview) {
    this.guildService.curGuild = guild;
    this.router.navigateByUrl(`guild/${guild.id}`);
  }
}
