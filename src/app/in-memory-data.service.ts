import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const projects = [];

    const commands = [];

    return {projects, commands};
  }
}
