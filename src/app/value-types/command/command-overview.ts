import {CommandDetails} from './command-details';

export class CommandOverview {
  public name: string;
  public id: string;
  public details: CommandDetails;

  constructor() {
  }

  public loadCommandOverviewData(data) {
    this.name = data['name'];
    this.id = data['id'];
  }
}
