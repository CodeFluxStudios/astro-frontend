export class GuildOverview {
  public name: string;
  public iconURL: string;
  public id: string;

  constructor(name: string, iconURL: string, id: string) {
    this.name = name;
    this.iconURL = iconURL;
    this.id = id;
  }
}
