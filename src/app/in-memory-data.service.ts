import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ProjectOverview} from './value-types/project-overview';
import {Account} from './value-types/account';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects_overview: ProjectOverview[] = [
      new ProjectOverview('CodeFlux Studios', 'https://via.placeholder.com/150x150', '0'),
      new ProjectOverview('Global Hackers Community', 'https://via.placeholder.com/150x150', '1'),
      new ProjectOverview('Programmer`s Hangout', 'https://via.placeholder.com/150x150', '2'),
      new ProjectOverview('The Coding Den', 'https://via.placeholder.com/150x150', '3'),
      new ProjectOverview('Rocket League', 'https://via.placeholder.com/150x150', '4'),
      new ProjectOverview('algorithm-archive', 'https://via.placeholder.com/150x150', '5')
    ];

    const projects = [];

    const commands = [];

    const account: Account[] = [
      new Account('SampleName', 'https://via.placeholder.com/150x150', 0)
    ];

    return {projects_overview, projects, commands, account};
  }
}
