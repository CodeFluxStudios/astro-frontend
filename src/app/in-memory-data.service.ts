import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const adminGuilds = [
      {name: 'Sample Guild A', icon: 'iconHash', hasBot: 'false', id: '0'},
      {name: 'Sample Guild B', icon: 'iconHash', hasBot: 'true', id: '1'},
      {name: 'Sample Guild C', icon: 'iconHash', hasBot: 'true', id: '2'},
      {name: 'Sample Guild D', icon: 'iconHash', hasBot: 'true', id: '3'},
      {name: 'CodeFlux Studios', icon: '8fd9254891141b735c4897c72a74127a', hasBot: 'true', id: '369857813465268227'},
    ];

    return {adminGuilds};
  }

  parseRequestUrl(url: string, requestInfoUtils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = '';

    if (url === 'api/user/guilds/admin') {
      newUrl = 'api/adminGuilds';
    }

    return requestInfoUtils.parseRequestUrl(newUrl);
  }
}
