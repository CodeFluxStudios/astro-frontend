import {InMemoryDbService} from 'angular-in-memory-web-api';
import {GuildOverview} from './value-types/guild-overview';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects_overview: GuildOverview[] = [
      new GuildOverview('CodeFlux Studios', 'https://via.placeholder.com/150x150', '0'),
      new GuildOverview('Global Hackers Community', 'https://via.placeholder.com/150x150', '1'),
      new GuildOverview('Programmer`s Hangout', 'https://via.placeholder.com/150x150', '2'),
      new GuildOverview('The Coding Den', 'https://via.placeholder.com/ff', '3'),
      new GuildOverview('Rocket League', 'https://via.placeholder.com/150x150', '4'),
      new GuildOverview('algorithm-archive', 'https://via.placeholder.com/150x150', '5')
    ];

    const projects_overview_other: GuildOverview[] = [
      new GuildOverview('calculated.gg', 'https://via.placeholder.com/ff', '6'),
      new GuildOverview('Reactiflux', 'https://via.placeholder.com/150x150', '7'),
      new GuildOverview('Aseprite', 'https://via.placeholder.com/150x150', '8'),
      new GuildOverview('C#', 'https://via.placeholder.com/150x150', '9'),
      new GuildOverview('Descenders', 'https://via.placeholder.com/150x150', '10'),
      new GuildOverview('Discord HypeSquad', 'https://via.placeholder.com/150x150', '11')
    ];

    const projects = [];

    const commands = [];

    return {projects_overview, projects_overview_other, projects, commands};
  }
}
