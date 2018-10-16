import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GuildOverview} from '../../value-types/guild-overview';
import {ProjectService} from '../../services/project.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  isLoadingGuilds: boolean;
  isAddingAstro: boolean;
  selectedGuild: GuildOverview;
  guilds: GuildOverview[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getGuilds();
  }

  getGuilds() {
    this.isLoadingGuilds = true;
    this.projectService.getProjectOverviewsOther().subscribe(guilds => {
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
