import {GuildDetails} from './guild-details';

export class GuildOverview {
  public name: string;
  public iconURL: string;
  public id: string;
  public hasBot: boolean;
  public details: GuildDetails;

  constructor() {
  }

  loadGuildOverviewData(data) {
    this.name = data['name'];
    this.id = data['id'];
    this.iconURL = `https://cdn.discordapp.com/icons/${this.id}/${data['icon']}.png`;
  }
}
