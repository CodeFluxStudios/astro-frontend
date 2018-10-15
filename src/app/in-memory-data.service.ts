import {InMemoryDbService} from 'angular-in-memory-web-api';
import {GuildOverview} from './value-types/guild-overview';
import {Account} from './value-types/account';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects_overview: GuildOverview[] = [
      new GuildOverview('CodeFlux Studios', 'https://via.placeholder.com/150x150', '0'),
      new GuildOverview('Global Hackers Community', 'https://via.placeholder.com/150x150', '1'),
      new GuildOverview('Programmer`s Hangout', 'https://via.placeholder.com/150x150', '2'),
      new GuildOverview('The Coding Den', 'https://via.placeholder.com/150x150', '3'),
      new GuildOverview('Rocket League', 'https://via.placeholder.com/150x150', '4'),
      new GuildOverview('algorithm-archive', 'https://via.placeholder.com/150x150', '5')
    ];

    const projects = [];

    const commands = [];

    const account: Account[] = [
      new Account('SampleName', 'https://via.placeholder.com/150x150', 0)
    ];

    return {projects_overview, projects, commands, account};
  }
}
