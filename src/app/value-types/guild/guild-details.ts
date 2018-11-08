import {CommandOverview} from '../command/command-overview';

export class GuildDetails {
  public commands: CommandOverview[];

  constructor() {
  }

  public loadGuildDetailsData(data) {
    this.commands = [];
  }
}
